import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Uare.ai collects, uses, and protects personal information across its website, applications, and Individual AI services.",
  alternates: { canonical: "/privacy-policy" },
};

const PrivacyPolicyPage = () => {
  return (
    <LegalPage title="Privacy Policy" lastRevised="April 29, 2026">
      <p>
        This Privacy Policy describes the privacy practices of Uare.ai, Inc.
        (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), and how we
        handle personal information collected through our website at{" "}
        <a href="https://www.uare.ai/">https://www.uare.ai/</a>, applications,
        and related services that link to this policy (the
        &ldquo;Services&rdquo;).
      </p>
      <p>
        Uare.ai enables users to create, personalize, and interact with personal
        &ldquo;Individual AI&rdquo; systems through text or voice, generate
        content, share creations, and monetize their digital selves. Users who
        create and manage Individual AIs are &ldquo;End Users.&rdquo; This
        policy applies to website visitors, registered users, End Users, guest
        users, business contacts, and other interacting individuals.
      </p>

      <h2>Personal Information We Collect</h2>

      <h3>Information You Provide</h3>
      <ul>
        <li>
          <strong>Contact information:</strong> First and last name, email
          address, phone number, mailing address.
        </li>
        <li>
          <strong>Account information:</strong> Username, password, profile
          picture, age, gender, location, account preferences and settings.
        </li>
        <li>
          <strong>Payment and transaction information:</strong> Name, payment
          card information, billing address, transaction history, payout
          information, and tax-related information (processed by payment
          service providers; we don&rsquo;t access full card data).
        </li>
        <li>
          <strong>Demographic information:</strong> Voluntarily provided
          biographical information in your profile.
        </li>
        <li>
          <strong>Visual, audio, and other user content:</strong> Photos, audio
          recordings, videos, documents, text notes, personality descriptions,
          personal memories, biographical information, avatar configurations,
          voice configurations, and other user-generated content used to create
          and customize your Individual AI.
        </li>
        <li>
          <strong>Biometric information:</strong> Voiceprints from voice samples
          and facial geometry data from images or videos (subject to{" "}
          <Link href="/biometric-notice-consent">
            Biometric Notice and Consent
          </Link>
          ).
        </li>
        <li>
          <strong>Conversation and message information:</strong> Chat messages,
          voice inputs, audio transcripts, conversation metadata, message
          attachments, AI-generated responses, vector embeddings for search and
          memory, and conversation-level settings.
        </li>
        <li>
          <strong>Communications:</strong> Messages exchanged with us regarding
          questions, feedback, or other inquiries.
        </li>
        <li>
          <strong>Marketing information:</strong> Preferences for marketing
          communications, engagement details, and marketing segmentation data.
        </li>
        <li>
          <strong>Other information:</strong> Not specifically listed but used
          as described in this policy or at time of collection.
        </li>
      </ul>
      <p>
        <strong>Third-party personal information:</strong> You&rsquo;re
        responsible for informing third parties about our data processing and
        confirming their permission.
      </p>

      <h3>Automatic Data Collection</h3>
      <p>
        We and service providers automatically log and combine information
        about you, your device, and interactions over time:
      </p>
      <ul>
        <li>
          <strong>Device data:</strong> Operating system type and version,
          manufacturer and model, browser type, screen resolution, device type,
          IP address, unique identifiers, language settings, and general
          location information.
        </li>
        <li>
          <strong>Usage data:</strong> Pages and features viewed, time spent on
          pages, previous websites visited, navigation paths, activity
          information, access times, duration, and engagement with
          communications.
        </li>
      </ul>

      <h3>Data Collection Tools</h3>
      <ul>
        <li>
          <strong>Local storage technologies:</strong> HTML5 and similar
          technologies providing cookie-equivalent functionality with larger
          data storage capacity.
        </li>
        <li>
          <strong>Web beacons:</strong> Pixel tags or clear GIFs tracking
          webpage access, email opens, and content viewing.
        </li>
      </ul>
      <p>
        See <Link href="/cookie-notice">Cookie Notice</Link> for additional
        information.
      </p>

      <h3>Information From Other Sources</h3>
      <ul>
        <li>
          <strong>Third-party login information:</strong> Data from linked or
          connected third-party services, authorized through your privacy
          settings.
        </li>
        <li>
          <strong>Social media:</strong> Information from our pages on
          LinkedIn, Instagram, and other platforms through your visits or
          interactions.
        </li>
        <li>
          <strong>Other Uare.ai users:</strong> Personal information received
          from other users (e.g., when interacting with public Individual AIs).
        </li>
        <li>
          <strong>Other sources:</strong> Information from marketing partners,
          publicly available sources, and data providers.
        </li>
      </ul>

      <h3>Information From Connected Services</h3>
      <p>
        If you authorize your Individual AI to connect to third-party services
        (Connected Services)&mdash;such as email, calendar, messaging, document
        storage, productivity, CRM, payments, or social media&mdash;we may
        receive limited personal information through the Model Context Protocol
        and integration partner Composio, Inc.
      </p>
      <p>
        <strong>Connected Service Data</strong> includes:
      </p>
      <ul>
        <li>
          Content you instruct your Individual AI to access, read, send, or
          modify (emails, calendar events, chat messages, documents, contact
          lists, customer records, social media posts).
        </li>
        <li>
          Associated metadata (senders, recipients, timestamps, subject lines,
          file names, channel names, labels).
        </li>
        <li>
          Connection metadata identifying authorized Connected Services and
          granted OAuth scopes.
        </li>
      </ul>

      <h3>How We Handle Connected Service Data</h3>
      <p>
        Connected Service Data is processed ephemerally per user interaction,
        truncated at 10KB per call, and not persisted in long-term storage,
        knowledge graphs, or used for AI model training. OAuth credentials and
        access tokens are held by Composio as our authorized sub-processor;
        Uare.ai doesn&rsquo;t directly store OAuth tokens.
      </p>
      <p>
        <strong>Third-party data subjects:</strong> Connected Service content
        may include personal information about third parties. You&rsquo;re
        responsible for ensuring a lawful basis for sharing such information
        and compliance with applicable privacy laws and Connected Service
        terms.
      </p>
      <p>
        <strong>Disconnecting a Connected Service:</strong> You may disconnect
        at any time through account settings, signaling Composio to revoke
        authorization. You may also revoke directly at the third-party
        provider.
      </p>
      <div className="legal-callout">
        Important &mdash; Account deletion limitation: Account deletion
        doesn&rsquo;t automatically revoke Connected Services OAuth
        authorizations. To fully revoke, you must disconnect through account
        settings before deletion, or revoke authorization directly with the
        third-party provider or Composio. (Automatic revocation on account
        deletion is in development.)
      </div>

      <h2>How We Use Personal Information</h2>

      <h3>To Provide Our Services</h3>
      <p>
        We process personal information as necessary to perform our contract
        with you:
      </p>
      <ul>
        <li>
          Creating, hosting, and operating your Individual AI, including
          processing uploaded content for knowledge, personality, communication
          style, avatar, and voice generation.
        </li>
        <li>
          Facilitating conversations between you and your Individual AI,
          between End Users and public Individual AIs, and communicating
          regarding your account.
        </li>
        <li>
          Generating AI-powered content (text, images, audio, video), serving
          personalized content feeds, and recommending Individual AIs or
          content.
        </li>
        <li>
          Analyzing Service usage to evaluate, maintain, and improve the
          Services.
        </li>
      </ul>

      <h3>For Sensitive Information</h3>
      <p>
        When creating or enhancing your Individual AI or communicating with
        public ones, you may provide sensitive information (health data,
        religion/beliefs, racial/ethnic origin, etc.). We process sensitive
        information only where permitted by law: with explicit consent, for
        substantial public interest reasons, or to comply with legal
        obligations.
      </p>

      <h3>For Research, Development, Benchmarking, and Improvement</h3>
      <p>
        Relying on legitimate business interests, we analyze and improve our
        Services:
      </p>
      <ul>
        <li>
          Service-usage insights identify trends and expand business
          activities.
        </li>
        <li>
          We don&rsquo;t use your private data, voice, likeness, or Individual
          AI content to train foundational or shared AI models.
        </li>
        <li>
          We only process data to train your private, per-user model and
          embeddings powering your Individual AI.
        </li>
        <li>
          We may create aggregated, anonymized, or de-identified statistics for
          analytics, forecasting, and strategic planning.
        </li>
      </ul>

      <h3>For Marketing and Advertising</h3>
      <p>
        Based on consent or legitimate business interests, we process your
        personal information for marketing:
      </p>
      <ul>
        <li>
          <strong>Email:</strong> Direct marketing emails about promotions,
          offers, and events (based on legitimate interest or consent where
          required). Opt out as described below.
        </li>
        <li>
          <strong>Interest-based advertising:</strong> Advertising partners
          display ads across the web using cookies and similar technologies to
          track interactions and serve personalized ads. We may share user
          information with these companies to facilitate interest-based
          advertising. Learn more about limiting interest-based advertising
          below.
        </li>
      </ul>

      <h3>For Surveys and Reviews</h3>
      <p>
        Using legitimate interests, we process survey and review information to
        understand satisfaction, improve Services, and monitor quality.
      </p>

      <h3>For Supplier and Partner Relationships</h3>
      <p>
        For suppliers, partners, or representatives, we process information as
        necessary to perform contracts or manage business relationships using
        legitimate interests.
      </p>

      <h3>For Compliance and Protection</h3>
      <p>
        Relying on legal compliance obligations and legitimate interests in
        protecting rights, we process information to:
      </p>
      <ul>
        <li>Comply with legal and regulatory requirements.</li>
        <li>Enforce terms and conditions.</li>
        <li>Initiate, defend, or resolve legal claims or disputes.</li>
        <li>Protect Services security and integrity.</li>
        <li>
          Identify, investigate, and deter fraudulent, harmful, unauthorized,
          unethical, or illegal activity.
        </li>
      </ul>

      <h2>How We Disclose Personal Information</h2>

      <h3>Other End Users</h3>
      <p>
        According to your Individual AI settings, we make information available
        to other users. If your Individual AI is public, End Users may interact
        with it and view profile information. You control uploaded information;
        exercise care in what you share.
      </p>

      <h3>Affiliates</h3>
      <p>
        We may share personal information with affiliates (entities
        controlling, controlled by, or under common control with Uare.ai).
      </p>

      <h3>Service Providers</h3>
      <p>
        Companies and individuals providing services or helping us operate the
        Services or business (hosting, IT, customer support, email delivery,
        advertising, analytics).
      </p>

      <h3>Professional Advisors</h3>
      <p>
        Lawyers, auditors, bankers, and insurers providing professional
        services as necessary.
      </p>

      <h3>Authorities and Others</h3>
      <p>
        Law enforcement, government authorities, and private parties as we
        believe in good faith necessary or appropriate for compliance and
        protection purposes.
      </p>

      <h3>Business Transferees</h3>
      <p>
        Acquirers and participants in business transactions (or negotiations)
        involving corporate divestiture, merger, consolidation, acquisition,
        reorganization, sale, or disposition of business/assets/equity
        interests (including bankruptcy proceedings).
      </p>

      <h3>Your Instruction or Permission</h3>
      <p>
        Other third parties where you give permission during your relationship
        with us.
      </p>

      <h2>International Data Transfers</h2>
      <p>
        You provide personal information directly to us in the United States.
        We may transfer personal information to affiliates and service
        providers in the United States and other jurisdictions, which may not
        provide equivalent protections as your home country&rsquo;s data
        protection laws.
      </p>
      <p>
        For cross-border transfers, we implement relevant safeguards to afford
        adequate protection and comply with applicable data protection laws,
        relying on contractual protections. Contact us (see &ldquo;How to
        Contact Us&rdquo;) for more information.
      </p>

      <h2>Your Privacy Rights and Choices</h2>

      <h3>Access or Update Your Information</h3>
      <p>
        If registered, you may review and update certain personal information
        in your account profile by logging in.
      </p>

      <h3>Opt Out of Marketing Communications</h3>
      <p>
        You may opt out of marketing emails and texts by following
        opt-out/unsubscribe instructions in our communications or contacting us
        (see &ldquo;How to Contact Us&rdquo;). You may continue receiving
        Services-related and non-marketing communications.
      </p>

      <h3>Personal Information Requests</h3>
      <p>
        Depending on your location and Service interaction nature, you may
        request:
      </p>
      <ul>
        <li>
          <strong>Information</strong> about how we&rsquo;ve collected and used
          personal information (provided in this Privacy Policy).
        </li>
        <li>
          <strong>Access</strong> to a copy of collected personal information;
          where applicable, <strong>portability</strong> (in portable,
          machine-readable, readily usable format to you or another designated
          third party).
        </li>
        <li>
          <strong>Correction</strong> of inaccurate or outdated personal
          information.
        </li>
        <li>
          <strong>Deletion</strong> of information we no longer need.
        </li>
        <li>
          <strong>Object</strong> to processing where we rely on legitimate
          business interest.
        </li>
        <li>
          <strong>Additional rights</strong> including{" "}
          <strong>restricting</strong> our use of personal information and{" "}
          <strong>withdrawing consent</strong> where applicable (doesn&rsquo;t
          affect prior usage).
        </li>
        <li>
          <strong>Appeal</strong> our denial of requests.
        </li>
      </ul>
      <p>
        Email or write as provided in &ldquo;How to Contact Us.&rdquo; We may
        request identifying information to confirm your identity. Depending on
        jurisdiction, you may designate an authorized agent. You&rsquo;re
        entitled to exercise these rights free from discrimination.
      </p>

      <h3>Limits on Privacy Rights and Choices</h3>
      <p>
        In some cases, choices are limited where fulfilling requests would
        impair others&rsquo; rights, your requested service, or our legal
        compliance/enforcement ability. Contact us (see &ldquo;How to Contact
        Us&rdquo;) if unsatisfied.
      </p>

      <h3>Right to Complain</h3>
      <p>
        You may lodge a complaint with your country&rsquo;s data protection
        regulator regarding our handling or processing of your personal
        information.
      </p>

      <h3>Right Not to Share Personal Information</h3>
      <p>
        Where we must collect or need information to provide services,
        refusing to provide it may prevent service delivery. We&rsquo;ll
        indicate what&rsquo;s necessary at collection or through appropriate
        means.
      </p>

      <h2>Other Sites and Services</h2>
      <p>
        Our Services may contain links to third-party websites and online
        services. Our content may be integrated into non-affiliated web pages.
        These links and integrations don&rsquo;t constitute endorsement or
        affiliation representation. We don&rsquo;t control third-party
        operations and aren&rsquo;t responsible for their actions. This Privacy
        Policy doesn&rsquo;t apply to third-party sites or services.
      </p>

      <h2>Security</h2>
      <p>
        We use reasonable organizational, technical, and administrative
        measures against unauthorized access, misuse, loss, disclosure,
        alteration, and destruction. Internet data transmission cannot be
        guaranteed completely secure; while we protect personal information, we
        cannot guarantee security.
      </p>

      <h2>Retention of Personal Information</h2>
      <p>
        We retain personal information only as long as necessary to fulfill
        purposes described in this policy, including providing Services and
        where we have legitimate business need (legal/regulatory requirements,
        terms enforcement/violation prevention, legal claim defense).
      </p>
      <p>
        Determining appropriate retention considers personal information
        amount, nature, and sensitivity; unauthorized use/disclosure risk;
        purpose achievement; and applicable legal/regulatory requirements.
        Biometric information is retained per our{" "}
        <Link href="/biometric-notice-consent">
          Biometric Notice and Consent
        </Link>
        .
      </p>

      <h2>Children&rsquo;s Privacy</h2>
      <p>
        Our Services aren&rsquo;t intended for users under 18. If we learn
        we&rsquo;ve collected personal information from children under 13
        without required parental/guardian consent, we&rsquo;ll delete it.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We reserve modification rights. We&rsquo;ll update the date and post
        changes. Material changes will be communicated to you.
      </p>

      <h2>How to Contact Us</h2>

      <h3>Contact Us</h3>
      <p>
        For questions, comments, privacy practice inquiries, or to exercise
        personal information rights, email{" "}
        <a href="mailto:privacy@uare.ai">privacy@uare.ai</a>.
      </p>

      <h3>EU and UK Representatives</h3>
      <p>We&rsquo;ve appointed:</p>
      <ul>
        <li>
          <strong>European Data Protection Office (EDPO):</strong> Avenue Huart
          Hamoir 71, 1030 Brussels, Belgium (EU representative).
        </li>
        <li>
          <strong>EDPO UK Ltd:</strong> Unit 33, Waterside, Schooner Court,
          44&ndash;48 Wharf Road, London, N1 7UX, United Kingdom (UK
          representative).
        </li>
      </ul>
      <p>
        <strong>GDPR matters</strong> (Article 27): Contact EDPO using their
        online form at{" "}
        <a href="https://edpo.com/gdpr-data-request/">
          edpo.com/gdpr-data-request
        </a>{" "}
        or write to Avenue Huart Hamoir 71, 1030 Brussels, Belgium.
      </p>
      <p>
        <strong>UK GDPR matters</strong> (Article 27): Contact EDPO UK using
        their online form at{" "}
        <a href="https://edpo.com/uk-gdpr-data-request/">
          edpo.com/uk-gdpr-data-request
        </a>{" "}
        or write to Unit 33, Waterside, Schooner Court, 44&ndash;48 Wharf
        Road, London, N1 7UX, United Kingdom.
      </p>
    </LegalPage>
  );
};

export default PrivacyPolicyPage;
