export type WaitlistState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export const initialWaitlistState: WaitlistState = { status: "idle" };
