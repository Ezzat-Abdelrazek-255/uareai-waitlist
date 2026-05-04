import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The agreement governing access to and use of Uare.ai's website, mobile apps, and Individual AI services, including arbitration and dispute resolution terms.",
  alternates: { canonical: "/terms-of-service" },
};

const TermsOfServicePage = () => {
  return (
    <LegalPage title="Terms of Service" lastRevised="April 29, 2026">
      <h2>Acceptance of These Terms of Service</h2>
      <p>
        Uare.ai, Inc. (&ldquo;Uare.ai,&rdquo; &ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides services through:
      </p>
      <ul>
        <li>
          Website: <a href="https://www.uare.ai/">https://www.uare.ai/</a>
        </li>
        <li>
          Mobile applications and related technologies (&ldquo;Mobile
          Apps&rdquo;)
        </li>
        <li>Collectively referred to as the &ldquo;Service&rdquo;</li>
      </ul>
      <p>
        All access and use requires acceptance of these Terms of Service. By
        accessing, browsing, or using the Service, you acknowledge agreement to
        be bound by these terms.
      </p>

      <h3>Right to Modify Terms</h3>
      <p>
        Uare.ai reserves the right to change or modify these Terms of Service
        at any time. Changes will be posted on this page with an updated
        revision date. Material changes will be communicated through:
      </p>
      <ul>
        <li>Service user interface</li>
        <li>Pop-up notices</li>
        <li>Email</li>
        <li>Other reasonable means</li>
      </ul>
      <p>
        Continued use after changes become effective constitutes acceptance.
        Users should periodically review the current Terms.
      </p>

      <div className="legal-callout">
        Please read these Terms of Service carefully, as they contain an
        agreement to arbitrate and other important information regarding your
        legal rights, remedies, and obligations. The agreement to arbitrate
        requires (with limited exception) that you submit claims you have
        against us to binding and final arbitration, and further (1) you will
        only be permitted to pursue claims against Uare.ai on an individual
        basis, not as a plaintiff or class member in any class or
        representative action or proceeding, (2) you will only be permitted to
        seek relief (including monetary, injunctive, and declaratory relief) on
        an individual basis, and (3) you may not be able to have any claims you
        have against us resolved by a jury or in a court of law.
      </div>

      <h3>Privacy</h3>
      <p>
        Uare.ai respects user privacy. See the{" "}
        <Link href="/privacy-policy">Privacy Policy</Link> for details. By
        using the Service, users consent to collection, use, and disclosure of
        personal data as outlined in the Privacy Policy.
      </p>

      <h3>Additional Terms</h3>
      <p>
        Additional terms may apply to specific features and are incorporated by
        reference into these Terms of Service.
      </p>

      <h2>Access and Use of the Service</h2>

      <h3>Service Description</h3>
      <p>The Service allows users to:</p>
      <ul>
        <li>
          Capture voice, likeness, memories, personality traits, values, and
          experiences.
        </li>
        <li>
          Create, train, customize, evolve, and interact with personalized AI
          models.
        </li>
        <li>
          Create &ldquo;Digital Twins&rdquo; (avatars, voice clones, or
          synthetic representations).
        </li>
        <li>
          Publish and make Digital Twins available for third parties to
          discover and interact with.
        </li>
        <li>
          Generate content through private sharing, curated marketplaces, or
          other platform features.
        </li>
      </ul>
      <p>
        Users who publish Digital Twins are referenced as
        &ldquo;Professionals.&rdquo;
      </p>

      <h3>Your Registration Obligations</h3>
      <p>
        Registration may be required to access certain Service features. Users
        must:
      </p>
      <ul>
        <li>
          Provide true, accurate, current, and complete information as
          prompted.
        </li>
        <li>Maintain accurate registration data.</li>
      </ul>
      <p>
        <strong>Age Restrictions:</strong>
      </p>
      <ul>
        <li>Under 18: Not authorized as a Professional.</li>
        <li>
          Under 18 (non-Professional use): May use only with express
          parental/guardian consent.
        </li>
        <li>Under 13: Not authorized to use the Service in any capacity.</li>
      </ul>
      <p>
        <strong>EEA, Switzerland, and UK Users:</strong> Users must be at least
        the minimum age to consent to data processing under their
        country&rsquo;s laws. Below that age, parental/legal guardian consent
        is required.
      </p>
      <p>Uare.ai may:</p>
      <ul>
        <li>Deny access or terminate accounts for age/consent violations.</li>
        <li>
          Request information to verify age or parental authorization.
        </li>
      </ul>

      <h3>Member Account, Password, and Security</h3>
      <p>Users are responsible for:</p>
      <ul>
        <li>Maintaining password and account confidentiality.</li>
        <li>All activities occurring under their password or account.</li>
        <li>
          Immediately notifying Uare.ai of unauthorized access or security
          breaches.
        </li>
        <li>Logging out at the end of each session.</li>
      </ul>
      <p>
        Uare.ai and its affiliates are not liable for losses from failure to
        comply with these obligations.
      </p>

      <h3>Modifications to Service</h3>
      <p>Uare.ai reserves the right to:</p>
      <ul>
        <li>
          Modify or discontinue the Service (or any part) temporarily or
          permanently.
        </li>
        <li>Provide notice or operate without notice.</li>
      </ul>
      <p>
        Uare.ai and its affiliates are not liable for modifications,
        suspensions, or discontinuances.
      </p>

      <h3>General Practices Regarding Use and Storage</h3>
      <ul>
        <li>
          Uare.ai may establish limits on Service use, including data
          retention periods and storage space.
        </li>
        <li>
          Uare.ai has no responsibility for data deletion or failure to store
          content.
        </li>
        <li>
          Accounts inactive for extended periods may be terminated.
        </li>
        <li>
          Uare.ai reserves the right to change these practices at any time,
          with or without notice.
        </li>
      </ul>

      <h2>Digital Twins</h2>

      <h3>Creation of Digital Twins</h3>
      <p>Professionals may create Digital Twins only of:</p>
      <ol>
        <li>Themselves, or</li>
        <li>Individuals who have provided explicit, informed consent.</li>
      </ol>
      <p>
        <strong>Prohibited Activities:</strong>
      </p>
      <ul>
        <li>Creating unauthorized Digital Twins.</li>
        <li>
          Creating deepfakes or synthetic likenesses without explicit consent.
        </li>
      </ul>
      <p>
        <strong>Representation and Warranties:</strong> By creating or
        publishing a Digital Twin, users represent and warrant:
      </p>
      <ul>
        <li>They are the individual depicted, OR</li>
        <li>
          They have obtained all necessary rights, licenses, and explicit
          consents.
        </li>
        <li>They have retained documentation of consent.</li>
        <li>
          Upon request, they will promptly provide reasonable proof of
          authorization.
        </li>
      </ul>
      <p>
        <strong>Consequences of Violation:</strong>
      </p>
      <ul>
        <li>Material breach of Terms of Service.</li>
        <li>Account suspension or termination.</li>
        <li>Digital Twin removal.</li>
        <li>
          Access to Service or specific Digital Twin may be disabled.
        </li>
      </ul>

      <h2>Conditions of Access and Use</h2>

      <h3>User Conduct</h3>
      <p>
        Users are solely responsible for all content they make available to
        Uare.ai through uploading, posting, publishing, transmitting, or
        displaying (&ldquo;User Content&rdquo;), including video, images,
        information, data, text, software, music, sound, photographs, graphics,
        messages, code, and other materials.
      </p>
      <p>
        <strong>For Professionals:</strong> Content provided to train Digital
        Twins constitutes User Content.
      </p>
      <p>
        <strong>Prohibited Content and Activities:</strong> Uare.ai reserves
        the right to investigate and take appropriate legal action, including
        removing offending content, suspending or terminating violators&rsquo;
        accounts, and reporting to law enforcement.
      </p>
      <p>Users agree not to use the Service to:</p>
      <ol>
        <li>
          Upload content that infringes intellectual property or proprietary
          rights; the user lacks the right to upload under law or contractual
          relationships; contains viruses, malware, or code designed to disrupt
          functionality; poses privacy or security risks; constitutes
          unsolicited advertising, spam, chain letters, pyramid schemes,
          contests, or sweepstakes; is unlawful, harmful, threatening, abusive,
          harassing, tortious, violent, defamatory, vulgar, obscene,
          pornographic, libelous, invasive of privacy, hateful, discriminatory,
          or otherwise objectionable; or restricts or inhibits others from
          using the Service or exposes Uare.ai to harm or liability.
        </li>
        <li>
          Interfere with or disrupt the Service, servers, or connected
          networks.
        </li>
        <li>
          Violate applicable local, state, national, or international law or
          regulations with legal force.
        </li>
        <li>
          Incite, encourage, or facilitate self-harm or suicide; discriminate
          against protected characteristics; or commit fraud or illegal
          activity.
        </li>
        <li>
          Impersonate any person or entity; bypass identity or consent
          safeguards; or misrepresent affiliation.
        </li>
        <li>Solicit personal information from anyone under 18.</li>
        <li>
          Harvest email addresses or contact information for unsolicited
          communications.
        </li>
        <li>
          Advertise or offer to sell/buy goods or services for unauthorized
          business purposes.
        </li>
        <li>
          Further criminal activity or provide instructional information about
          illegal activities.
        </li>
        <li>
          Obtain or attempt to access content through unauthorized means.
        </li>
        <li>
          Circumvent, remove, alter, deactivate, degrade, or thwart safety,
          content, or technical protections; geographic restrictions; or use
          VPNs to bypass restrictions.
        </li>
        <li>
          Scrape, crawl, harvest, index, or systematically extract data or
          content (including Digital Twins, Output, Service Content, or user
          personas) by automated or manual means.
        </li>
        <li>
          Reverse engineer, decompile, disassemble, translate, or attempt to
          discover source code, underlying models, model weights, architecture,
          prompts, training data, or non-public APIs.
        </li>
        <li>
          Probe, test, or attempt to circumvent rate limits, authentication
          measures, access controls, or technical safeguards.
        </li>
        <li>
          Use the Service to build, train, benchmark, or improve competing
          products or models.
        </li>
        <li>
          Extract, replicate, clone, or reconstruct Digital Twins, user
          personas, or underlying AI models.
        </li>
        <li>
          Engage in data mining, robots, scraping, or similar data
          gathering/extraction methods.
        </li>
      </ol>
      <p>
        <strong>IP Address Blocking:</strong> Users blocked from accessing the
        Service agree not to circumvent blocking through IP masking, proxies,
        or VPNs.
      </p>
      <p>
        <strong>Automated Access:</strong> Must strictly comply with
        Uare.ai&rsquo;s published documentation, usage policies, and rate
        limits. Exceeding authorized rate limits or imposing unreasonable load
        is strictly prohibited.
      </p>

      <h3>Fees</h3>
      <p>
        If the Service or portion thereof is made available for a fee, users
        may be required to select a payment plan and provide credit card or
        payment instrument information. Information must be true and the user
        must be authorized to use it. Users must promptly update account
        information (billing address, card expiration, etc.) and agree to pay
        amounts specified in the payment plan according to plan terms and
        these Terms of Service.
      </p>
      <p>
        <strong>Automatic Renewal Authorization:</strong> For subscriptions
        with automatic periodic renewal, users authorize Uare.ai (through
        Payment Processor) to bill the payment instrument in advance on a
        periodic basis until account termination.
      </p>
      <p>
        <strong>Dispute Timeline:</strong> Disputes must be reported within 60
        days of the charge date (or longer as required by law).
      </p>
      <p>
        <strong>Price Changes:</strong> Uare.ai reserves the right to change
        prices. Notice will be provided through Service UI, pop-up, email, or
        other reasonable means. At least 30 days&rsquo; notice required before
        changes take effect. Continued use after a price change constitutes
        agreement to pay the new amount.
      </p>
      <p>
        <strong>Tax Responsibility:</strong> Users are responsible for all
        taxes except those based on Uare.ai&rsquo;s net income.
      </p>

      <h3>Payment Processing</h3>
      <p>
        <strong>Important Note:</strong> Uare.ai does not process payment for
        any services.
      </p>
      <p>
        Uare.ai uses third-party Payment Processors for bank account, credit
        card, or debit card payments. These services are subject to Payment
        Processor terms, conditions, privacy policies, and agreements. By
        agreeing to these Terms of Service, users also agree to be bound by
        applicable Payment Processor Agreements. Uare.ai assumes no liability
        for payments made through the Service.
      </p>
      <p>Users authorize Payment Processors to:</p>
      <ul>
        <li>Store payment methods.</li>
        <li>Continue billing after payment method expiration.</li>
        <li>Avoid payment interruptions.</li>
      </ul>

      <h3>Automatic Renewal Disclosure; Cancellation</h3>
      <ul>
        <li>
          Subscriptions automatically renew at the end of each billing period
          (monthly, annual, or as disclosed).
        </li>
        <li>
          Renewal terms, prices, and billing frequency are clearly disclosed at
          checkout and account settings.
        </li>
        <li>Cancellation is available at any time through account settings.</li>
        <li>
          Cancellation takes effect at the end of the current billing period
          (unless otherwise stated).
        </li>
        <li>
          For prepaid subscriptions cancelled before the end of the billing
          period, Uare.ai may provide pro-rated refunds for unused portions
          (or as required by law). No refunds for partial billing periods
          already used (except as required by law).
        </li>
        <li>
          If pricing or renewal terms materially change, advance notice will be
          provided per Terms of Service.
        </li>
      </ul>

      <h3>Commercial Use</h3>
      <p>
        Unless expressly authorized, users agree not to display, distribute,
        license, perform, publish, reproduce, duplicate, copy, create
        derivatives, modify, sell, resell, grant access, transfer, or exploit
        any Service portion for commercial purposes.
      </p>

      <h3>Competitors</h3>
      <p>
        Employees, contractors, agents, or affiliates of competing companies
        cannot view, access, or use the Service without express written
        permission. By accessing the Service, users represent and warrant they
        are not a competitor (or acting for one).
      </p>

      <h2>Mobile Services and Software</h2>

      <h3>Mobile Services</h3>
      <p>The Service includes:</p>
      <ul>
        <li>Ability to upload content via mobile device.</li>
        <li>Ability to browse Service/Site from mobile device.</li>
        <li>
          Access to features and content through Mobile Apps (collectively,
          &ldquo;Mobile Services&rdquo;).
        </li>
      </ul>
      <p>
        Standard charges, data rates, and fees from wireless carriers may
        apply. Downloading, installing, or using Mobile Services may be
        prohibited or restricted by carrier. Not all Mobile Services work with
        all carriers or devices.
      </p>

      <h3>Telephonic Communications Services</h3>
      <p>
        By using the Service and providing telephone numbers, users consent to
        contact by telephone (including recorded lines), automated calling or
        dialing systems, artificial voice or pre-recorded calling, text
        message, SMS, MMS, fax, or other telephonic or electronic means &mdash;
        for marketing, solicitation, informational, or other purposes, even if
        the number is on the National Do Not Call List, a state list, or
        internal lists.
      </p>
      <p>
        Users do not have to consent to marketing/solicitation calls/texts to
        purchase products/services. To opt out, users must notify Uare.ai or
        its partners directly. Users may reply &ldquo;STOP&rdquo; to cancel or
        &ldquo;HELP&rdquo; for customer support information. Carrier&rsquo;s
        standard message and data rates apply.
      </p>

      <h3>Mobile App License</h3>
      <p>
        Subject to these Terms of Service, Uare.ai grants users a limited,
        revocable, non-exclusive, non-transferable, non-sublicensable license
        to install the Mobile App on one mobile device and to use the Mobile
        App for personal use only to access the Service.
      </p>

      <h3>Ownership; Restrictions</h3>
      <p>
        Technology and software underlying the Service (including Mobile Apps,
        &ldquo;Software&rdquo;) are property of Uare.ai, affiliates, and
        licensors. Users agree not to copy, modify, create derivative works,
        reverse engineer, reverse assemble, or discover source code; sell,
        assign, sublicense, or transfer rights in the Software. All rights not
        expressly granted are reserved by Uare.ai.
      </p>

      <h3>Special Notice for International Use; Export Controls</h3>
      <p>
        Uare.ai is headquartered in the United States. Regardless of location,
        users are solely responsible for ensuring compliance with their
        specific jurisdiction&rsquo;s laws. Software and data transmission are
        subject to U.S. export controls; Software cannot be downloaded,
        exported, or re-exported in violation of U.S. export laws. Downloading,
        accessing, or using Software/Services is at user&rsquo;s sole risk.
      </p>

      <h3>Third-Party Distribution Channels</h3>
      <p>
        Uare.ai offers Software through the Apple App Store, Google Play
        Store, and other distribution channels. Users may be subject to
        Distribution Channel additional terms. These Terms of Service are
        between user and Uare.ai only &mdash; not with the Distribution
        Channel.
      </p>

      <h3>Apple-Enabled Software</h3>
      <p>
        These Terms of Service are concluded between Uare.ai and the user only
        &mdash; not with Apple Inc. (&ldquo;Apple&rdquo;). Uare.ai, not Apple,
        is solely responsible for Apple-Enabled Software and content. Users
        may not use Apple-Enabled Software in violation of or inconsistent
        with Apple Media Services Terms and Conditions. Apple has no
        obligation to provide maintenance or support for Apple-Enabled
        Software. Apple is not responsible for product warranties (express or
        implied). Apple and its subsidiaries are third-party beneficiaries of
        these Terms of Service regarding Apple-Enabled Software.
      </p>
      <p>
        <strong>Contact for Apple-Enabled Software issues:</strong>{" "}
        <a href="mailto:Info@uare.ai">Info@uare.ai</a> &middot; (949)
        370-1608 &middot; Uare.ai, 2625 Middlefield Rd, Palo Alto, CA 94306.
      </p>

      <h3>Google-Sourced Software</h3>
      <p>
        These Terms of Service are between user and Uare.ai only &mdash; not
        with Google, Inc. (&ldquo;Google&rdquo;). Use must comply with
        Google&rsquo;s then-current Google Play Terms of Service. Google is
        only a provider of Google Play. Uare.ai, not Google, is solely
        responsible for Google-Sourced Software. Google has no obligation or
        liability regarding Google-Sourced Software or these Terms of Service.
      </p>

      <h3>Open Source Software</h3>
      <p>
        Software distributed by Uare.ai may contain or be provided with open
        source software subject to its own license terms. Open source software
        license terms can be found at{" "}
        <a href="https://www.uare.ai/oss">https://www.uare.ai/oss</a>. If
        required by any license, Uare.ai makes the open source software (and
        Uare.ai&rsquo;s modifications, if any) available by written request to{" "}
        <a href="mailto:legal@uare.ai">legal@uare.ai</a>.
      </p>

      <h2>Connected Services and Agentic Actions</h2>

      <h3>Connected Services</h3>
      <p>
        The Service includes features allowing Digital Twins to connect to and
        take actions on third-party services users authorize, including email,
        calendar, messaging services; document storage, productivity tools;
        customer relationship management; social media, payments, and similar
        applications. Each is a &ldquo;Connected Service.&rdquo;
      </p>
      <p>
        Connected Service integrations are provided through the Model Context
        Protocol and Composio, Inc. (&ldquo;Composio&rdquo;). Each Connected
        Service is operated by a third party under their own terms/privacy
        policy. Uare.ai does not control any Connected Service and is not
        responsible for operation, availability, accuracy, or security. Users
        are responsible for complying with each Connected Service&rsquo;s
        terms.
      </p>

      <h3>Authorization to Act</h3>
      <p>
        When connecting a Connected Service to a Digital Twin, users authorize
        Uare.ai and the Digital Twin to access, read, send, post, schedule,
        modify, or otherwise act on data within strictly authorized OAuth
        scopes at time of connection, and instruct Uare.ai to use provided
        credentials to interact with the Connected Service on their behalf.
      </p>
      <p>
        Users may revoke any connection at any time through account settings
        or directly with the third-party service provider.
      </p>

      <h3>Limited Agency</h3>
      <p>
        Digital Twins act only within specific authorized OAuth scopes and
        only at user direction. Digital Twins are not legal agents,
        fiduciaries, attorneys-in-fact, or representatives for any purpose.
        Uare.ai does not assume agency, fiduciary, or professional duty to
        users or third parties based on Connected Service actions. Users
        remain responsible for reviewing all Digital Twin actions in Connected
        Services and the consequences of those actions.
      </p>

      <h3>OAuth Tokens Held by Composio</h3>
      <p>
        OAuth credentials and access tokens for Connected Services are held
        and managed by Composio (authorized sub-processor) and not directly
        stored by Uare.ai. When users disconnect a Connected Service through
        account settings, Uare.ai instructs Composio to revoke the underlying
        authorization. Users may also revoke directly with the third-party
        service provider.
      </p>

      <h3>Account Deletion and Connected Services</h3>
      <div className="legal-callout">
        Deleting a Uare.ai account does not automatically revoke OAuth
        authorizations for Connected Services. To fully revoke a Connected
        Service authorization, users must either disconnect through account
        settings prior to deletion, or revoke directly at the third-party
        service provider or with Composio. Uare.ai is working to enable
        automatic revocation on account deletion.
      </div>

      <h3>Prompt Injection and Untrusted Content</h3>
      <p>
        AI systems reading and acting on third-party content are susceptible
        to &ldquo;prompt injection&rdquo; attacks where malicious or
        misleading instructions are embedded in third-party content and may
        cause unintended AI actions. Prompt injection is an unsolved,
        industry-wide challenge.
      </p>
      <p>Users acknowledge and agree:</p>
      <ul>
        <li>
          Uare.ai cannot guarantee all attacks will be detected/prevented.
        </li>
        <li>Users are responsible for monitoring Digital Twin actions.</li>
        <li>
          Users should limit authorized OAuth scopes to their risk tolerance.
        </li>
        <li>
          Users should not authorize unsafe, irreversible, illegal, or
          materially consequential actions without direct review (e.g.,
          financial transactions, public communications, third-party impacts).
        </li>
      </ul>

      <h3>No Liability for Unintended Actions Caused by Third-Party Content</h3>
      <p>
        To the maximum extent permitted by applicable law, Uare.ai disclaims
        liability for Digital Twin actions in Connected Services to the extent
        those actions were caused (wholly or partly) by malicious or
        misleading third-party content, including content in messages,
        documents, calendar invites, web pages, and materials accessed through
        Connected Services. This disclaimer adds to, and does not limit,
        warranty disclaimers and liability limitations elsewhere in these
        Terms of Service.
      </p>

      <h3>Compliance with Law</h3>
      <p>
        Users agree not to use Connected Services in violation of applicable
        law, including laws governing electronic communications; anti-spam
        (CAN-SPAM Act, foreign equivalents); automated telemarketing;
        defamation, intellectual property, privacy; financial transactions;
        and impersonation. Users will not direct Digital Twins to send
        communications impersonating others or to post content or take actions
        that mislead third parties about identity/affiliation. Uare.ai may
        suspend or terminate Connected Service access if reasonably believing
        Terms of Service violations are occurring.
      </p>

      <h2>Intellectual Property Rights and AI Output</h2>

      <h3>Service Content</h3>
      <p>
        Users acknowledge the Service may contain content/features protected
        by copyright, patent, trademark, trade secret, and other proprietary
        rights and Laws. Except as expressly authorized by Uare.ai, users
        agree not to modify, copy, frame, scrape, rent, lease, loan, sell,
        distribute, or create derivative works based on the Service or Service
        Content. This does not apply to users&rsquo; own User Content
        uploaded/made available per these Terms of Service. Any Service or
        Service Content use other than as specifically authorized is strictly
        prohibited.
      </p>

      <h3>Trademarks</h3>
      <p>
        The Uare.ai name and logos are trademarks/service marks of Uare.ai.
        Other company names and logos may be trademarks of their respective
        owners. Nothing in these Terms or the Service grants, by implication,
        estoppel, or otherwise, any license or right to use Uare.ai
        Trademarks without prior written permission in each instance. All
        goodwill from Uare.ai Trademark use benefits Uare.ai exclusively.
      </p>

      <h3>Third-Party Material</h3>
      <p>
        Under no circumstances is Uare.ai or any Uare.ai Affiliate liable for
        content/materials of any third parties (including Digital Twins,
        Inputs, Outputs); errors/omissions in content; or any loss/damage from
        third-party content use. Uare.ai does not pre-screen content but has
        the right (not obligation) to refuse or remove content violating
        Terms or deemed objectionable. Users must evaluate and bear all risks
        from content use.
      </p>

      <h3>User Content</h3>
      <p>
        Users represent and warrant they own all right, title, and interest in
        User Content and own all copyrights and rights of publicity.
      </p>
      <p>
        Users grant Uare.ai and Uare.ai Affiliates, successors, and assigns a
        non-exclusive, worldwide, royalty-free, fully paid-up, transferable,
        sublicensable license (directly and indirectly through multiple tiers)
        to copy, display, upload, perform, distribute, store, modify, and use
        User Content in any form, medium, or technology now known or later
        developed for: (a) operation/provision of the Service and Digital
        Twins (including AI model training for Professionals); and (b) as set
        forth in the Privacy Policy.
      </p>
      <p>
        Users irrevocably waive claims and assertions of moral rights or
        attribution regarding User Content. Users assume all risk from User
        Content, its transmission, and its accuracy, quality, legality, and
        appropriateness.
      </p>
      <p>
        Users authorize Uare.ai and affiliates and third-party service
        providers to collect and analyze User Content and related
        data/information and derive statistical and usage data
        (collectively, &ldquo;Usage Data&rdquo;). Uare.ai and affiliates may
        use Usage Data for any purpose per applicable Law and the Privacy
        Policy.
      </p>
      <p>
        Any comments, suggestions, ideas, feedback, reviews, or information
        about the Service (&ldquo;Submissions&rdquo;) are non-confidential.
        Uare.ai and affiliates are entitled to unrestricted use and
        dissemination for any purpose, commercial or otherwise, without
        acknowledgment, attribution, or compensation.
      </p>

      <h3>Input and Output</h3>
      <p>
        By using features allowing Input (prompts or other input) to receive
        Output (Digital Twin or Service-generated output based on Input),
        users expressly consent to Uare.ai, affiliates, and service providers
        collecting/recording Input and processing Input to generate Output.
      </p>
      <p>
        Users agree not to state or suggest Output was human-generated when it
        is not. Uare.ai claims no ownership rights in Output. Users are
        responsible for all Input and Output and ensuring they do not violate
        applicable law or these Terms of Service.
      </p>
      <p>
        The Service is not intended and users agree not to use or permit third
        parties to use the Service or any Digital Twin to generate Output for:
      </p>
      <ul>
        <li>Any illegal activity.</li>
        <li>
          Child sexual abuse material or content exploiting/harming children.
        </li>
        <li>
          Hateful, harmful, discriminatory, threatening, abusive, harassing,
          defamatory, vulgar, obscene, libelous, offensive, violent, or
          otherwise objectionable content.
        </li>
        <li>Viruses or malware.</li>
        <li>High-risk physical harm activities.</li>
        <li>High-risk economic harm activities.</li>
        <li>Fraudulent or deceptive activity.</li>
        <li>
          Pornographic or adult content; adult industries or dating apps.
        </li>
        <li>Political purposes (campaigning, lobbying).</li>
        <li>
          Misleading civic participation (voting logistics) or covert political
          opinion influence.
        </li>
        <li>Privacy, publicity, or other rights violations.</li>
        <li>
          Unauthorized law practice or unqualified tailored legal advice.
        </li>
        <li>
          Model weight extraction, reverse engineering, model replication,
          voice model building/training/development, safety system
          circumvention.
        </li>
        <li>
          Unqualified tailored financial or other professional advice.
        </li>
        <li>
          Health condition diagnosis or treatment instruction; serious medical
          condition diagnostic/treatment services; life-threatening issue
          triage/management.
        </li>
        <li>High-risk decision-making.</li>
      </ul>

      <h3>Similarity of Output</h3>
      <p>
        Due to the automated content generation nature, Output may not be
        unique across users. The same or similar output may be generated for
        different users. Users may provide similar Input and receive identical
        Output. Users irrevocably release, acquit, and discharge and agree not
        to sue Uare.ai or affiliates or their employees, officers, directors,
        or representatives regarding any direct or indirect copyright,
        trademark, or other infringement; misappropriation; or rights
        violation regarding Output.
      </p>

      <h3>Output is Synthetic</h3>
      <p>
        Users acknowledge any face, voice, or human characteristic generated
        by the Service or Digital Twin is solely synthetic and not intended to
        depict a specific person. Users will not indicate to others that
        Output relates to a specific person.
      </p>

      <h3>Accuracy</h3>
      <p>
        Service or Digital Twin use may result in incorrect Output that does
        not accurately reflect real people, places, or facts, or does not
        reflect the Professional&rsquo;s views. Users agree to evaluate and
        be responsible for Output accuracy as appropriate for their use case.
      </p>

      <h3>Other Limitations</h3>
      <p>
        Users acknowledge numerous limitations due to automated generation:
        Output may contain errors or misleading information; AI systems based
        on predefined rules/algorithms lack creative thinking; AI struggles
        with language nuances (slang, idioms, cultural references); AI lacks
        emotions and conveys cold or impersonal Output; AI perpetuates
        training data biases; AI struggles with complex tasks requiring
        reasoning, judgment, and decision-making; poor or biased training data
        negatively impacts Output accuracy/quality; Output lacks the personal
        touch of human-created content.
      </p>

      <h3>AI-to-AI Interactions; Synthetic Disclosure</h3>
      <p>
        Some Service features permit Digital Twin interactions with each
        other. Such interactions are synthetic and will be labeled as
        synthetic where applicable and disclosed as synthetic per applicable
        law and Uare.ai policies. Users will not represent AI-to-AI Output as
        live human speech, endorsement, or conduct.
      </p>
      <p>
        AI-to-AI interactions are experimental and may produce unpredictable,
        inaccurate, offensive, or harmful outputs. By using or enabling
        AI-to-AI features, users assume all risk from interactions, Outputs
        reliance, transactions entered based on Outputs, and downstream
        third-party uses. To the fullest extent permitted by law, Uare.ai is
        not responsible for harm, loss, or claims from AI-to-AI interactions
        and related Outputs. Uare.ai may implement labeling, rate limits,
        monitoring, and other safeguards, and may suspend or disable features
        for safety/legal concerns. Failure to follow required disclosure or
        safety procedures for synthetic interactions is a material Terms of
        Service breach.
      </p>

      <h3>IP Complaints</h3>
      <p>
        Uare.ai respects others&rsquo; intellectual property and asks users to
        do the same. If users believe work has been copied (copyright
        infringement) or IP rights violated, they should notify Uare.ai per
        the procedure below. Uare.ai will process and investigate alleged
        infringement notices and take appropriate actions under the Digital
        Millennium Copyright Act (&ldquo;DMCA&rdquo;) and applicable IP Laws.
      </p>
      <p>
        Email copyright notices to{" "}
        <a href="mailto:legal@uare.ai">legal@uare.ai</a> with subject line
        &ldquo;DMCA Takedown Request,&rdquo; or by mail to Uare.ai, 271
        Beatrice Street, Mountain View, CA 94043, Attn: Kanoa Perman.
      </p>
      <p>To be effective, written notification must contain:</p>
      <ol>
        <li>
          Physical or electronic signature of authorized copyright/IP owner or
          representative.
        </li>
        <li>
          Identification of copyrighted work or IP claimed infringed (or
          representative list if multiple).
        </li>
        <li>
          Identification of claimed infringing content and location on Service
          with sufficient detail for finding.
        </li>
        <li>
          Notifier&rsquo;s address, telephone number, and email address.
        </li>
        <li>
          Statement that notifier has good faith belief the disputed use is
          not authorized by owner, agent, or Law.
        </li>
        <li>
          Statement that notice information is accurate and, under penalty of
          perjury, that notifier is the copyright/IP owner or authorized to
          act on their behalf.
        </li>
      </ol>

      <h3>Counter-Notice</h3>
      <p>
        If users believe removed/disabled User Content is not infringing or
        they have authorization, they may send written counter-notice
        containing:
      </p>
      <ol>
        <li>Physical or electronic signature.</li>
        <li>
          Identification of removed/disabled content and pre-removal/disabling
          location.
        </li>
        <li>
          Statement, under penalty of perjury, that content removal/disabling
          resulted from mistake or content misidentification.
        </li>
        <li>
          Name, address, telephone number, and email address; consent
          statement to Northern District of California federal court
          jurisdiction; and acceptance of service of process from the
          complaining party.
        </li>
      </ol>
      <p>
        Uare.ai will send the counter-notice copy to the original complaining
        party, noting Uare.ai may replace removed content or cease disabling
        within ten (10) business days. Unless the copyright/IP owner files a
        court action, removed content may be replaced or access restored
        within ten (10) to fourteen (14) business days or more after
        counter-notice receipt, at Uare.ai&rsquo;s sole discretion.
      </p>

      <h3>Repeat Infringer Policy</h3>
      <p>
        Per the DMCA and applicable Law, Uare.ai has adopted a repeat
        infringer account termination policy where users deemed repeat
        infringers have accounts terminated, in appropriate circumstances and
        at Uare.ai&rsquo;s sole discretion. Uare.ai may at its sole discretion
        limit Service access or terminate accounts of any users infringing
        others&rsquo; IP rights, whether or not repeat infringement exists.
      </p>

      <h2>Third-Party Services and Websites</h2>
      <p>
        The Service may provide links or access to services, sites,
        technology, and resources provided by third parties (&ldquo;Third-Party
        Services&rdquo;). Users may enable or log in via various online
        Third-Party Services. Third-Party Service access/use may be subject to
        additional terms, privacy policies, other agreements, or separate
        account creation/authentication requirements.
      </p>
      <p>
        Some Third-Party Services provide Uare.ai access to user-provided
        information, which Uare.ai uses, stores, and discloses per the Privacy
        Policy. Uare.ai has no control over Third-Party Services and is not
        responsible for accuracy, availability, reliability, completeness, or
        privacy practices. Uare.ai encourages users to review third-party
        privacy policies before use.
      </p>
      <p>
        Users, not Uare.ai or affiliates, are responsible for all Third-Party
        Service costs/charges. Uare.ai enables Third-Party Services as a
        convenience only; integration does not imply endorsement or
        recommendation. Dealings with third parties are between user and third
        party only. Uare.ai and affiliates are not responsible or liable,
        directly or indirectly, for damage or loss caused by Third-Party
        Service use or reliance.
      </p>

      <h2>Indemnification</h2>
      <p>
        To the extent permitted under applicable Law, users agree to defend,
        indemnify, and hold harmless Uare.ai and Uare.ai Affiliates and their
        respective officers, employees, directors, service providers,
        licensors, and agents (collectively, &ldquo;Uare.ai Parties&rdquo;)
        from any and all losses, damages, expenses (including reasonable
        attorneys&rsquo; fees), rights, claims, actions of any kind, and
        injury (including death) arising from or relating to user Service
        use; Digital Twin use; User Content; Input or Output; Service
        connection; these Terms of Service violation; any person&rsquo;s
        rights violation; or Digital Twin or Output creation, publication, or
        distribution.
      </p>
      <p>
        Uare.ai will provide notice of any claim, suit, or proceeding and
        reserves the right to assume exclusive defense and control of any
        matter subject to indemnification. Users agree to cooperate with
        Uare.ai&rsquo;s reasonable defense assistance requests. Users may not
        settle or compromise claims against Uare.ai Parties without written
        consent.
      </p>

      <h2>Disclaimer of Warranties</h2>
      <div className="legal-callout">
        Your use of the Service is at your sole risk. The Service is provided
        on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. The
        Uare.ai Parties expressly disclaim all warranties of any kind, whether
        express, implied or statutory, including the implied warranties of
        merchantability, fitness for a particular purpose, title, and
        non-infringement.
      </div>
      <div className="legal-callout">
        The Uare.ai Parties make no warranty that (a) the Service, any Digital
        Twins or any Output will meet your requirements; (b) the Service or
        any Digital Twins will be uninterrupted, timely, secure, or
        error-free; (c) the Output or other results that may be obtained from
        the use of the Service will be accurate or reliable; or (d) the
        quality of any Digital Twins, Output, products, services, information,
        or other material purchased or obtained by you through the Service
        will meet your expectations.
      </div>

      <h2>Limitation of Liability</h2>
      <div className="legal-callout">
        You expressly understand and agree that the Uare.ai Parties will not
        be liable for any indirect, incidental, special, consequential,
        exemplary damages, or damages for loss of profits including damages
        for loss of goodwill, use, or data or other intangible losses (even if
        the Uare.ai Parties have been advised of the possibility of such
        damages), whether based on contract, tort, negligence, strict
        liability, or otherwise, resulting from: (a) the use or the inability
        to use the Service or any Digital Twins; (b) the cost of procurement
        of substitute goods and services resulting from any goods, data,
        information, or services purchased or obtained or Input, Output or
        other messages received or transactions entered into through or from
        the Service; (c) unauthorized access to or alteration of your (or your
        Digital Twins&rsquo;) transmissions or data; (d) statements or conduct
        of any third party on the Service; or (e) any other matter relating
        to the Service or any Digital Twin.
      </div>
      <div className="legal-callout">
        In no event will the Uare.ai Parties&rsquo; total liability to you for
        all damages, losses, or causes of action exceed the amount you have
        paid Uare.ai in the last six (6) months, or, if greater, one hundred
        dollars ($100).
      </div>
      <p>
        Some jurisdictions do not allow the disclaimer or exclusion of
        certain warranties or the limitation or exclusion of liability for
        incidental or consequential damages. Accordingly, some of the above
        limitations may not apply to you or be enforceable with respect to
        you.
      </p>
      <p>
        If you are dissatisfied with any portion of the Service or with these
        Terms of Service, your sole and exclusive remedy is to discontinue use
        of the Service.
      </p>
      <p>
        <strong>New Jersey Users:</strong> The foregoing sections titled
        &ldquo;Indemnification,&rdquo; &ldquo;Disclaimer of Warranties,&rdquo;
        and &ldquo;Limitation of Liability&rdquo; are intended to be only as
        broad as is permitted under the laws of the State of New Jersey. If
        any portion of these sections is held to be invalid under New Jersey
        law, the invalidity will not affect the validity of the remaining
        portions of the applicable sections.
      </p>

      <h2>Dispute Resolution by Binding Arbitration</h2>
      <div className="legal-callout">
        Please read this section carefully as it affects your rights.
      </div>

      <h3>1. Agreement to Arbitrate</h3>
      <p>
        This Dispute Resolution by Binding Arbitration section
        (&ldquo;Arbitration Agreement&rdquo;) covers any disputes or claims
        between user and Uare.ai, whether arising from or relating to these
        Terms of Service (including alleged breach), the Service, advertising,
        or relationship/transaction aspects.
      </p>
      <p>
        Disputes will be resolved exclusively through final and binding
        arbitration rather than court, per this Arbitration Agreement&rsquo;s
        terms. Users may assert individual claims in small claims court if
        they qualify. This Arbitration Agreement does not preclude bringing
        issues to federal, state, or local agencies, which may seek relief on
        user&rsquo;s behalf if law allows.
      </p>
      <p>
        Users and Uare.ai each waive the right to jury trial and the right to
        participate in a class action. Rights will be determined by a neutral
        arbitrator, not a judge or jury. The Federal Arbitration Act governs
        this Arbitration Agreement&rsquo;s interpretation and enforcement.
      </p>

      <h3>2. Prohibition of Class and Representative Actions and Non-Individualized Relief</h3>
      <div className="legal-callout">
        You and Uare.ai agree that each of us may bring claims against the
        other only on an individual basis and not as a plaintiff or class
        member in any purported class or representative action or proceeding.
        Unless both you and Uare.ai agree otherwise, the arbitrator may not
        consolidate or join more than one person&rsquo;s or party&rsquo;s
        claims and may not otherwise preside over any form of a consolidated,
        representative, or class proceeding.
      </div>
      <div className="legal-callout">
        The arbitrator may award relief (including monetary, injunctive, and
        declaratory relief) only in favor of the individual party seeking
        relief and only to the extent necessary to provide relief necessitated
        by that party&rsquo;s individual claim(s), except that you may pursue
        a claim for and the arbitrator may award public injunctive relief
        under applicable law to the extent required for the enforceability of
        this provision.
      </div>

      <h3>3. Pre-Arbitration Dispute Resolution</h3>
      <p>
        Uare.ai is interested in amicable and efficient dispute resolution;
        most concerns can be quickly resolved by emailing customer support at{" "}
        <a href="mailto:disputes@uare.ai">disputes@uare.ai</a>.
      </p>
      <p>
        If informal efforts fail, the party intending to seek arbitration must
        first send the other a certified mail written Notice of Dispute
        (&ldquo;Notice&rdquo;). The Notice must describe the claim/dispute
        nature and basis and set forth specific relief sought. Address
        Uare.ai Notices to: Uare.ai, 2625 Middlefield Rd, Palo Alto, CA
        94306, Attn: Legal.
      </p>
      <p>
        If Uare.ai and user don&rsquo;t resolve within sixty (60) calendar
        days after Notice receipt, either party may commence arbitration.
        During arbitration, settlement offer amounts won&rsquo;t be disclosed
        to the arbitrator until after determining entitlement.
      </p>

      <h3>4. Arbitration Procedures</h3>
      <p>
        Arbitration will be conducted by a neutral arbitrator per the American
        Arbitration Association&rsquo;s (&ldquo;AAA&rdquo;) rules and
        procedures, including the AAA&rsquo;s Consumer Arbitration Rules
        (collectively, &ldquo;AAA Rules&rdquo;), as modified by this
        Arbitration Agreement. AAA information:{" "}
        <a href="https://www.adr.org">adr.org</a> /{" "}
        <a href="https://www.adr.org/consumer">adr.org/consumer</a>.
      </p>
      <p>
        If Arbitration Agreement terms and AAA Rules conflict, Arbitration
        Agreement terms control unless the arbitrator determines application
        would prevent fundamentally fair arbitration. The arbitrator must
        follow these Terms of Service provisions as a court would and decide
        all issues, including scope, enforceability, and arbitrability.
        Arbitrators can award the same damages and relief as courts can, on
        an individual basis. Decisions are enforceable in court and
        overturnable only for very limited reasons.
      </p>
      <p>
        Unless parties agree otherwise, hearings will be in a reasonably
        convenient location for both parties, considering travel ability and
        pertinent circumstances; if parties can&rsquo;t agree, AAA determines
        location.
      </p>
      <p>For $10,000 or less claims, the user may choose whether arbitration is:</p>
      <ul>
        <li>Solely document-based;</li>
        <li>By telephonic hearing; or</li>
        <li>By in-person hearing, per AAA Rules.</li>
      </ul>
      <p>
        For claims exceeding $10,000, the right to a hearing is determined per
        AAA Rules. Regardless of arbitration manner, the arbitrator must
        issue a reasoned written decision explaining essential findings and
        conclusions supporting the award.
      </p>

      <h3>5. Costs of Arbitration</h3>
      <p>
        Arbitration Fees (filing, administration, arbitrator fees) payment
        will be governed by AAA Rules. If fees are not specifically allocated
        per AAA Rules, Uare.ai and user split equally unless user demonstrates
        economic inability to pay their portion or the arbitrator determines
        the user shouldn&rsquo;t pay their portion, in which case Uare.ai
        pays the user&rsquo;s portion. If the user demonstrates arbitration
        costs are prohibitive compared to litigation costs, Uare.ai will pay
        arbitration fee amounts the arbitrator deems necessary to prevent
        cost-prohibitive arbitration. Attorneys&rsquo; fees are governed by
        AAA Rules.
      </p>

      <h3>6. Confidentiality</h3>
      <p>
        All arbitration proceeding aspects and any ruling, decision, or award
        by the arbitrator are strictly confidential for all parties&rsquo;
        benefit.
      </p>

      <h3>7. Severability</h3>
      <p>
        If a court or arbitrator decides any Arbitration Agreement term or
        provision (other than section 2) is invalid or unenforceable, the
        parties agree to replace it with a valid/enforceable term coming
        closest to expressing the invalid term&rsquo;s intention; this
        Arbitration Agreement will be enforceable as modified.
      </p>
      <p>
        If section 2 provisions are invalid or unenforceable, this
        Arbitration Agreement becomes entirely null and void, unless those
        provisions are invalid/unenforceable only for public injunctive relief
        claims. Remaining Terms of Service provisions continue applying.
      </p>

      <h3>8. Future Changes to Arbitration Agreement</h3>
      <p>
        Despite any Terms of Service provision to the contrary, Uare.ai may
        make future Arbitration Agreement changes (except Notice Address
        changes). Users may reject by sending written notice within thirty
        (30) calendar days to the Notice Address. By rejecting, users agree
        to arbitrate disputes per this Arbitration Agreement language as
        originally accepted by user.
      </p>

      <h2>Cancellation and Termination</h2>
      <p>
        Users may cancel accounts anytime through account settings within the
        Service. Upon cancellation, Service access terminates per these Terms
        of Service.
      </p>
      <p>
        Uare.ai may, in sole discretion, suspend or terminate accounts (or
        any part) or Service use; remove and discard Service content for any
        reason, including lack of use or Terms of Service violation or
        inconsistency (letter or spirit). Suspected fraudulent, abusive, or
        illegal activity grounds may result in law enforcement referral.
        Uare.ai may discontinue providing the Service or any part with or
        without notice in sole discretion at any time. Termination may be
        effective without prior notice.
      </p>
      <p>
        Subject to applicable law and Uare.ai&rsquo;s backup, archival, and
        legal compliance requirements, Uare.ai will delete or de-identify
        User Content after account cancellation. For Professionals, created
        Digital Twins will be deleted following account cancellation. Publicly
        accessible Digital Twins associated with accounts will be removed
        from public Service availability and no longer be accessible to other
        users. Despite the foregoing, Uare.ai may retain limited information
        for applicable law compliance, Terms of Service enforcement, dispute
        resolution, fraud/abuse prevention, and Service integrity and
        security maintenance.
      </p>

      <h2>User Disputes</h2>
      <p>
        Users are solely responsible for interactions with other Service
        users. Uare.ai and affiliates have no liability or responsibility for
        user-to-user disputes. Uare.ai reserves the right, but has no
        obligation, to become involved in user disputes.
      </p>

      <h2>General</h2>
      <p>
        These Terms of Service (together with incorporated terms) constitute
        the entire agreement between user and Uare.ai, govern Service access
        and use, and supersede any prior Uare.ai agreements regarding the
        Service. Users may be subject to additional terms for Third-Party
        Services, third-party content, or third-party software.
      </p>
      <p>
        These Terms of Service will be governed by California State law
        without regard to conflict of law provisions. For disputes not subject
        to arbitration, users and Uare.ai submit to the personal and
        exclusive jurisdiction of state and federal courts located within San
        Francisco, California.
      </p>
      <p>
        Uare.ai&rsquo;s failure to exercise or enforce any right or provision
        will not constitute a waiver. If a court finds any provision invalid,
        the court should endeavor to give effect to the parties&rsquo;
        intentions; other provisions remain in full force and effect. Any
        claim or cause of action arising from Service use or these Terms of
        Service must be filed within one (1) year after arising or be forever
        barred.
      </p>
      <p>
        Printed versions of these Terms of Service and electronic notices are
        admissible in judicial/administrative proceedings to the same extent
        as originally generated printed business documents. Users may not
        assign these Terms of Service without prior Uare.ai written consent;
        Uare.ai may assign or transfer these Terms of Service, in whole or in
        part, without restriction. Section titles are for convenience only
        and have no legal or contractual effect. Words &ldquo;include&rdquo;
        and &ldquo;including&rdquo; mean &ldquo;without limitation&rdquo;
        rather than terms of limitation.
      </p>
      <p>
        Notices to users may be made via email, regular mail, or Service
        display of notices or notice links.
      </p>
      <p>
        <strong>Force Majeure:</strong> Uare.ai will not be in default due to
        civil disturbances, riot, epidemic, hostilities, war, terrorist
        attack; embargo, natural disaster, acts of God, flood, fire, sabotage;
        electrical power, network access, or equipment fluctuations or
        unavailability; or other circumstances or causes beyond reasonable
        Uare.ai control.
      </p>

      <h2>Notice for California Users</h2>
      <p>
        Under California Civil Code Section 1789.3, California Service users
        are entitled to specific consumer rights notice. The Complaint
        Assistance Unit of the Division of Consumer Services of the
        California Department of Consumer Affairs may be contacted at:
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:dca@dca.ca.gov">dca@dca.ca.gov</a>
        </li>
        <li>
          <strong>Mail:</strong> Department of Consumer Affairs, Consumer
          Information Division, 1625 North Market Blvd., Suite N 112,
          Sacramento, CA 95834
        </li>
        <li>
          <strong>Telephone:</strong> (800) 952-5210 or (800) 326-2297 (TDD)
        </li>
        <li>
          <strong>Sacramento Area:</strong> (916) 445-1254 or (916) 928-1227
          (TDD)
        </li>
      </ul>
      <p>
        <strong>Uare.ai contact:</strong> Uare.ai, 2625 Middlefield Rd, Palo
        Alto, CA 94306, Attn: Legal &middot; Phone: (949) 370-1608.
      </p>

      <h2>U.S. Government Restricted Rights</h2>
      <p>
        The Service is made available to the U.S. government with
        &ldquo;RESTRICTED RIGHTS.&rdquo; U.S. government use, duplication, or
        disclosure is subject to restrictions in 48 CFR 52.227-19, 48 CFR
        252.227-7013 et seq., or successor provisions. U.S. government access
        or Service/Software use constitutes acknowledgement of Uare.ai&rsquo;s
        proprietary rights.
      </p>

      <h2>Questions, Concerns, Suggestions</h2>
      <p>
        Contact Uare.ai at <a href="mailto:info@uare.ai">info@uare.ai</a> or
        by mail to Uare.ai, 2625 Middlefield Rd, Palo Alto, CA 94306, Attn:
        Legal &mdash; to report Terms of Service violations or pose questions
        regarding these Terms of Service or the Service.
      </p>
    </LegalPage>
  );
};

export default TermsOfServicePage;
