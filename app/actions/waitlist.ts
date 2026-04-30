"use server";

export type WaitlistState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export const initialWaitlistState: WaitlistState = { status: "idle" };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const raw = formData.get("email");
  const email = typeof raw === "string" ? raw.trim() : "";

  if (!email || email.length > 254 || !EMAIL_REGEX.test(email)) {
    return { status: "error", message: "Please enter a valid email." };
  }

  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formGuid = process.env.HUBSPOT_FORM_GUID;
  const region = process.env.HUBSPOT_REGION ?? "na1";

  if (!portalId || !formGuid) {
    console.error(
      "[waitlist] Missing HUBSPOT_PORTAL_ID or HUBSPOT_FORM_GUID env var.",
    );
    return {
      status: "error",
      message: "Waitlist is temporarily unavailable. Please try again later.",
    };
  }

  const base =
    region === "eu1" ? "https://api-eu1.hsforms.com" : "https://api.hsforms.com";
  const url = `${base}/submissions/v3/integration/submit/${portalId}/${formGuid}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      body: JSON.stringify({
        fields: [{ objectTypeId: "0-1", name: "email", value: email }],
        context: { pageName: "uareai waitlist" },
      }),
    });

    if (res.ok) {
      return { status: "success" };
    }

    const body = await res.text().catch(() => "");
    console.error(`[waitlist] HubSpot ${res.status}: ${body}`);

    if (res.status === 400) {
      return {
        status: "error",
        message: "We couldn't accept that email. Please double-check and try again.",
      };
    }
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  } catch (err) {
    console.error("[waitlist] Network error:", err);
    return {
      status: "error",
      message: "Network error. Please try again.",
    };
  }
}
