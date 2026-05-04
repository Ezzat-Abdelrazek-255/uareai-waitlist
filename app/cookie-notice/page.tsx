import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Cookie Notice",
  description:
    "How Uare.ai uses cookies and similar technologies on its website and applications, and the choices you have.",
  alternates: { canonical: "/cookie-notice" },
};

const CookieNoticePage = () => {
  return (
    <LegalPage title="Cookie Notice" lastRevised="April 29, 2026">
      <p>
        This Cookie Notice explains how Uare.ai, Inc. (&ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;) uses cookies and similar
        technologies on{" "}
        <a href="https://www.uare.ai/">https://www.uare.ai/</a>, our
        applications, and related services (the &ldquo;Services&rdquo;), and
        the choices you have. It supplements our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2>What are cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a
        website. They let the site remember your actions and preferences across
        sessions, measure how the site is used, and deliver relevant content.
      </p>
      <p>
        We also use related technologies — local storage, web beacons, and
        pixel tags — that perform similar functions. For brevity, we refer to
        all of these as &ldquo;cookies&rdquo; in this notice.
      </p>

      <h2>Categories of cookies we use</h2>

      <h3>Strictly necessary</h3>
      <p>
        These cookies are required for the Services to operate. They enable
        core functionality such as security, account authentication, network
        management, and remembering your cookie preferences. You cannot opt out
        of these cookies through our consent controls because the Services
        cannot function without them.
      </p>

      <h3>Functional</h3>
      <p>
        Functional cookies remember choices you make to give you a better,
        more personalized experience — for example, your language, region, or
        UI preferences. Disabling these may degrade some Services features.
      </p>

      <h3>Analytics</h3>
      <p>
        Analytics cookies help us understand how visitors use the Services so
        we can measure performance and improve them. These cookies typically
        collect aggregated information such as pages viewed, time spent, and
        traffic sources. Where required by law, we ask for your consent before
        loading analytics cookies.
      </p>

      <h3>Marketing</h3>
      <p>
        Marketing cookies track visits across websites to help us and our
        advertising partners deliver more relevant ads and measure campaign
        effectiveness. Where required by law, we ask for your consent before
        loading marketing cookies.
      </p>

      <h2>Third-party cookies</h2>
      <p>
        Some cookies are set by third parties whose services appear on our
        Services — for example, analytics, advertising, payment processors,
        and embedded media. These third parties may collect information about
        your activity on our Services and elsewhere on the internet, subject
        to their own privacy policies.
      </p>

      <h2>Your choices</h2>

      <h3>Consent controls on this site</h3>
      <p>
        On your first visit you can choose which categories of cookies to
        allow. You can change your choice at any time by clearing site data in
        your browser, or by emailing{" "}
        <a href="mailto:privacy@uare.ai">privacy@uare.ai</a>.
      </p>

      <h3>Browser settings</h3>
      <p>
        Most browsers let you refuse new cookies, delete existing cookies, or
        be notified when a new cookie is set. Refer to your browser&rsquo;s
        help documentation. Disabling cookies entirely will impact the
        functionality of most websites, including ours.
      </p>

      <h3>Do Not Track</h3>
      <p>
        Some browsers include a &ldquo;Do Not Track&rdquo; signal. There is
        currently no industry standard for how sites should respond to this
        signal, so we do not change our behavior based on it. We honor opt-out
        choices made through our consent controls and applicable
        privacy-rights requests.
      </p>

      <h3>Region-specific rights</h3>
      <p>
        Residents of certain jurisdictions (including the EEA, UK,
        Switzerland, California, and other U.S. states with comprehensive
        privacy laws) have additional rights over their personal data. See the{" "}
        <Link href="/privacy-policy">Privacy Policy</Link> for details on how
        to exercise those rights.
      </p>

      <h2>Changes to this notice</h2>
      <p>
        We may update this Cookie Notice from time to time. We will update the
        revision date at the top of this page and, where appropriate, notify
        you through the Services or by email.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about cookies or this notice? Email{" "}
        <a href="mailto:privacy@uare.ai">privacy@uare.ai</a>, or write to
        Uare.ai, 2625 Middlefield Rd, Palo Alto, CA 94306, Attn: Legal.
      </p>
    </LegalPage>
  );
};

export default CookieNoticePage;
