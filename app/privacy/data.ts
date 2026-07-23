import { LucideIcon, Search, FolderOpen, Settings, Handshake, Scale, Cookie, ShieldCheck } from "lucide-react";

export interface Section {
  heading: string;
  body: string[];
}

export interface Tab {
  id: string;
  label: string;
  icon: LucideIcon;
  intro: string;
  sections: Section[];
}

export const LAST_UPDATED = "21 July 2026";
export const EFFECTIVE_DATE = "21 July 2026";
export const PLATFORM_NAME = "Chavania";
export const COMPANY = "Chavania Inc.";
export const CONTACT_EMAIL = "privacy@chavania.com";
export const JURISDICTION = "Republic of Kenya";

export const TABS: Tab[] = [
  /* OVERVIEW */
  {
    id: "overview",
    label: "Overview",
    icon: Search,
    intro:
      "This Privacy Policy explains how Chavania Inc. collects, uses, stores, and protects your personal data when you use the Chavania platform. We are committed to transparency and to handling your data with respect. Please read this policy carefully alongside our Terms of Service.",
    sections: [
      {
        heading: "1. Who We Are",
        body: [
          "Chavania Inc. ('Chavania', 'we', 'us', or 'our') is a company incorporated under the laws of the Republic of Kenya. We operate the Chavania e-commerce marketplace, accessible via our website, mobile applications, and associated APIs.",
          "For the purposes of data protection law, Chavania Inc. is the data controller of personal data collected through the platform. Where we process data on behalf of merchants, we act as a data processor.",
          "Our designated Data Protection Officer (DPO) can be contacted at privacy@chavania.com or at our registered office address.",
        ],
      },
      {
        heading: "2. Scope of This Policy",
        body: [
          "This policy applies to all personal data collected from users of the Chavania platform, including buyers, sellers, administrators, visitors, and any other individuals whose data we process.",
          "It covers data collected through: our website and mobile apps, account registration, purchases and sales activity, customer support interactions, marketing communications, cookies and tracking technologies, and third-party integrations.",
          "This policy does not apply to third-party websites or services that may be linked from the platform. We encourage you to review the privacy policies of any third parties you interact with.",
        ],
      },
      {
        heading: "3. Legal Bases for Processing",
        body: [
          "We process your personal data on the following legal bases: (a) Contract - processing necessary to fulfil our agreement with you, such as creating your account, processing orders, and handling payments; (b) Legal obligation - processing required to comply with Kenyan law, including the Data Protection Act 2019, tax legislation, and anti-money-laundering regulations; (c) Legitimate interests - processing for fraud prevention, platform security, product improvement, and analytics where these interests are not overridden by your rights; (d) Consent - processing for marketing communications and optional analytics, where you have freely given explicit consent.",
          "Where we rely on consent, you may withdraw it at any time without affecting the lawfulness of processing carried out before withdrawal.",
        ],
      },
      {
        heading: "4. Automated Decision-Making",
        body: [
          "We use automated systems for certain decisions, including: fraud detection and order risk scoring, personalised product recommendations, seller performance scoring, and account suspension triggers based on policy violations.",
          "Where an automated decision has a significant legal or similarly significant effect on you, you have the right to request human review, express your point of view, and contest the decision. Contact privacy@chavania.com to exercise this right.",
          "Our automated systems are regularly audited for bias and accuracy. We do not use personal data to make automated decisions related to protected characteristics such as race, religion, gender, or disability.",
        ],
      },
      {
        heading: "5. Changes to This Policy",
        body: [
          "We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or platform features. The 'Last Updated' date at the top of this page will be revised whenever changes are made.",
          "For material changes, we will notify you by email or by displaying a prominent notice on the platform at least 14 days before the changes take effect.",
          "Your continued use of the platform after the effective date of any update constitutes acceptance of the revised policy. If you do not agree with the changes, you may close your account.",
        ],
      },
    ],
  },

  /* DATA WE COLLECT */
  {
    id: "collection",
    label: "Data We Collect",
    icon: FolderOpen,
    intro:
      "We collect personal data to provide and improve the Chavania platform. We collect only what is necessary and relevant for the purposes described in this policy. Below is a full account of the categories of data we collect and how we obtain them.",
    sections: [
      {
        heading: "1. Account & Identity Data",
        body: [
          "When you register on Chavania we collect: your full name, email address, phone number, date of birth (for age verification), password (stored in hashed form), and profile photo if provided.",
          "For sellers we additionally collect: business name, business type, physical business address, national ID or passport number, Kenya Revenue Authority PIN, and business registration certificate number.",
          "This data is collected directly from you at registration and updated when you modify your account settings.",
        ],
      },
      {
        heading: "2. Transaction & Financial Data",
        body: [
          "When you make or receive payments we collect: order details, transaction amounts and currencies, payment method type (e.g. M-Pesa, Visa), masked card or payment reference numbers, billing address, and payout bank account or M-Pesa number (for sellers).",
          "We do not store full card numbers, CVV codes, M-Pesa PINs, or other sensitive authentication credentials. Payment processing is handled by PCI-DSS compliant third-party processors.",
          "Transaction records are retained for a minimum of 7 years to comply with Kenyan tax and financial regulations.",
        ],
      },
      {
        heading: "3. Usage & Behavioural Data",
        body: [
          "As you interact with the platform we automatically collect: pages and products viewed, search queries, items added to cart or wishlist, time spent on pages, click-through patterns, and features used.",
          "We also collect device and technical data including: IP address, device type and model, operating system and version, browser type and version, screen resolution, and time zone.",
          "This data is used to personalise your experience, improve platform performance, and detect fraudulent or abusive behaviour.",
        ],
      },
      {
        heading: "4. Communications Data",
        body: [
          "We retain records of messages exchanged between buyers and sellers through the Chavania messaging system, as well as communications between users and our customer support team.",
          "If you contact us by email, phone, or live chat we may record and retain those interactions for quality assurance, dispute resolution, and training purposes.",
          "We collect data about your email engagement (open rates, click-throughs) for marketing communications you have opted into.",
        ],
      },
      {
        heading: "5. User-Generated Content",
        body: [
          "Content you voluntarily submit to the platform - including product reviews, ratings, store descriptions, product images, and profile information - is collected and stored by us.",
          "Such content may be publicly visible to other users and is subject to the content licences set out in our Terms of Service.",
        ],
      },
      {
        heading: "6. Data from Third Parties",
        body: [
          "We may receive data about you from third parties including: payment processors (transaction status, fraud signals), identity verification services (KYC results), logistics partners (delivery status and address verification), social login providers (name and email if you sign in via Google or Apple), and advertising platforms (conversion data if you clicked an ad before visiting Chavania).",
          "We combine this data with information we already hold to provide a coherent, secure, and personalised service.",
        ],
      },
    ],
  },

  /* HOW WE USE YOUR DATA */
  {
    id: "usage",
    label: "How We Use It",
    icon: Settings,
    intro:
      "We use the personal data we collect strictly for legitimate, defined purposes. We do not sell your personal data to third parties. The sections below describe each purpose and the legal basis that applies.",
    sections: [
      {
        heading: "1. Providing the Platform",
        body: [
          "We use your data to create and manage your account, process and fulfil orders, facilitate payments, provide customer support, and operate all core platform features. This processing is necessary to perform our contract with you.",
          "Without this processing we would be unable to provide the Chavania service. You cannot opt out of this processing while maintaining an active account.",
        ],
      },
      {
        heading: "2. Safety, Security & Fraud Prevention",
        body: [
          "We use account, transaction, and behavioural data to detect, investigate, and prevent fraudulent transactions, account takeovers, spam, abuse, and other malicious activity. This is a legitimate interest processing purpose.",
          "We may share relevant data with law enforcement, payment networks, or other platforms where required by law or to prevent serious harm.",
          "IP addresses and device fingerprints are used to flag suspicious login attempts and geographic anomalies.",
        ],
      },
      {
        heading: "3. Personalisation & Recommendations",
        body: [
          "We use your browsing history, search queries, purchase history, and wishlist data to personalise product recommendations, search results, and promotional content shown to you on the platform.",
          "This processing is based on our legitimate interest in improving your experience. You can reduce personalisation by adjusting your privacy settings or clearing your browsing data.",
        ],
      },
      {
        heading: "4. Marketing Communications",
        body: [
          "With your consent, we may send you promotional emails, SMS messages, or push notifications about products, offers, and platform updates. You may opt out of these communications at any time via the unsubscribe link in emails, SMS reply STOP, or your account notification settings.",
          "We may use your purchase and browsing history to tailor marketing messages to your interests. We do not send marketing communications to minors.",
          "Opting out of marketing does not affect transactional communications such as order confirmations, shipping updates, or security alerts.",
        ],
      },
      {
        heading: "5. Analytics & Platform Improvement",
        body: [
          "We use aggregated and pseudonymised usage data to analyse platform performance, understand how users interact with features, and identify areas for improvement. This includes A/B testing, funnel analysis, and error monitoring.",
          "Where possible we use aggregated, non-identifiable data for analytics. Individual-level analysis is limited to what is strictly necessary.",
        ],
      },
      {
        heading: "6. Legal & Regulatory Compliance",
        body: [
          "We process personal data to comply with our legal obligations under Kenyan law and any other applicable jurisdiction, including the Data Protection Act 2019, the Tax Procedures Act, anti-money-laundering regulations, and court orders.",
          "We may also process data to establish, exercise, or defend legal claims.",
        ],
      },
    ],
  },

  /* SHARING & DISCLOSURE */
  {
    id: "sharing",
    label: "Sharing & Disclosure",
    icon: Handshake,
    intro:
      "We do not sell, rent, or trade your personal data. We share it only as described below, with appropriate safeguards in place. We require all third parties to respect the security of your data and to treat it in accordance with applicable law.",
    sections: [
      {
        heading: "1. Buyers & Sellers",
        body: [
          "When you place an order, we share your delivery name, delivery address, and order details with the relevant seller to fulfil the order. Sellers do not receive your payment details.",
          "When a seller dispatches an order, we share their store name and, where applicable, their support contact with you. We do not share sellers' personal identity details with buyers beyond what is necessary.",
          "Buyer and seller communications are mediated through the Chavania messaging system. Direct personal contact details are not shared between buyers and sellers.",
        ],
      },
      {
        heading: "2. Service Providers & Processors",
        body: [
          "We share data with carefully vetted third-party service providers who process it on our behalf, including: cloud hosting providers (data storage and infrastructure), payment processors (transaction processing), logistics partners (order fulfilment and tracking), identity verification providers (KYC), email and SMS delivery services, analytics providers, and customer support software.",
          "All processors are bound by data processing agreements that restrict them from using your data for any purpose beyond providing services to us.",
          "A current list of our sub-processors is available upon request at privacy@chavania.com.",
        ],
      },
      {
        heading: "3. Business Transfers",
        body: [
          "In the event of a merger, acquisition, asset sale, or restructuring of Chavania Inc., your personal data may be transferred to the acquiring entity as part of that transaction. We will notify you via email or platform notice before your data is transferred and becomes subject to a different privacy policy.",
          "You may object to such a transfer; however, exercising this right may result in account closure if the transfer is essential to the continued operation of the platform.",
        ],
      },
      {
        heading: "4. Legal Disclosures",
        body: [
          "We may disclose your personal data to government bodies, law enforcement agencies, courts, or regulators where we are required to do so by law, where necessary to comply with a legal process, or where we believe in good faith that disclosure is necessary to prevent imminent harm or illegal activity.",
          "Where legally permissible, we will notify you of any such request before complying.",
        ],
      },
      {
        heading: "5. International Transfers",
        body: [
          "Some of our service providers are located outside Kenya. Where we transfer personal data internationally, we ensure appropriate safeguards are in place, such as standard contractual clauses approved by the Office of the Data Protection Commissioner (ODPC), adequacy decisions, or other mechanisms recognised under Kenyan data protection law.",
          "By using the platform you acknowledge that your data may be transferred to and processed in countries with different data protection standards than your home country.",
        ],
      },
    ],
  },

  /* YOUR RIGHTS */
  {
    id: "rights",
    label: "Your Rights",
    icon: Scale,
    intro:
      "Under the Kenya Data Protection Act 2019 and, where applicable, the EU General Data Protection Regulation, you have a number of important rights regarding your personal data. We are committed to facilitating the exercise of these rights promptly and without undue obstacles.",
    sections: [
      {
        heading: "1. Right of Access",
        body: [
          "You have the right to request a copy of the personal data we hold about you, together with information about how we use it, who we share it with, and how long we retain it.",
          "Submit access requests to privacy@chavania.com with the subject line 'Data Access Request'. We will respond within 30 days. Complex requests may take up to 60 days, in which case we will notify you of the extension.",
        ],
      },
      {
        heading: "2. Right to Rectification",
        body: [
          "If any personal data we hold about you is inaccurate or incomplete, you have the right to have it corrected. Most account information can be updated directly through your account settings. For data you cannot update yourself, contact privacy@chavania.com.",
        ],
      },
      {
        heading: "3. Right to Erasure",
        body: [
          "You may request the deletion of your personal data where: (a) the data is no longer necessary for the purposes for which it was collected; (b) you withdraw consent and there is no other legal basis for processing; (c) you object to processing and there are no overriding legitimate grounds; or (d) the data has been unlawfully processed.",
          "We may be unable to erase certain data where we have a legal obligation to retain it (e.g., financial records required for tax purposes) or where it is necessary for legal claims. We will inform you of any such limitations.",
          "Account deletion requests result in the erasure of your personal profile data within 30 days. Anonymised, aggregated transaction records may be retained for analytical and regulatory purposes.",
        ],
      },
      {
        heading: "4. Right to Restriction",
        body: [
          "You may request that we restrict processing of your personal data in certain circumstances, such as while a rectification request is pending, if you contest the legal basis for processing, or if you need us to retain data for a legal claim even though we no longer require it.",
          "During restriction, we will only store your data and will not process it for any other purpose without your consent or for legal claims.",
        ],
      },
      {
        heading: "5. Right to Data Portability",
        body: [
          "Where processing is based on your consent or contract performance and is carried out by automated means, you have the right to receive your personal data in a structured, commonly used, machine-readable format (e.g. JSON or CSV), and to transmit that data to another data controller.",
          "Submit portability requests to privacy@chavania.com. We will provide the export within 30 days.",
        ],
      },
      {
        heading: "6. Right to Object",
        body: [
          "You have the right to object to processing of your personal data where we rely on legitimate interests as our legal basis. We will cease processing unless we can demonstrate compelling legitimate grounds that override your interests, or processing is necessary for legal claims.",
          "You have an unconditional right to object to processing for direct marketing purposes. We will stop immediately upon receipt of your objection.",
        ],
      },
      {
        heading: "7. Lodging a Complaint",
        body: [
          "If you believe we have not handled your personal data in accordance with applicable law, you have the right to lodge a complaint with the Office of the Data Protection Commissioner (ODPC) in Kenya, or the relevant supervisory authority in your country of residence.",
          "We would, however, appreciate the opportunity to address your concerns first. Please contact our DPO at privacy@chavania.com before escalating to a supervisory authority.",
        ],
      },
    ],
  },

  /* COOKIES */
  {
    id: "cookies",
    label: "Cookies",
    icon: Cookie,
    intro:
      "Chavania uses cookies and similar tracking technologies to operate the platform, remember your preferences, analyse usage, and deliver relevant advertising. This section explains what cookies we use, why we use them, and how you can control them.",
    sections: [
      {
        heading: "1. What Are Cookies?",
        body: [
          "Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work, or work more efficiently, and to provide information to the website owner.",
          "We also use similar technologies such as web beacons, pixel tags, local storage, and session storage, which function in comparable ways and are referred to collectively as 'cookies' in this section.",
        ],
      },
      {
        heading: "2. Cookies We Use",
        body: [
          "Strictly necessary cookies: These are essential for the platform to function. They include session cookies that maintain your login state, cart data, and security tokens. These cookies cannot be disabled.",
          "Functional cookies: These remember your preferences such as language, currency, and recently viewed products to improve your experience. You may disable these but some platform features may be affected.",
          "Analytics cookies: We use tools such as internal analytics systems to understand how users navigate the platform, which features are popular, and where errors occur. This data is aggregated and pseudonymised where possible.",
          "Marketing cookies: With your consent, we use third-party advertising cookies to serve you relevant ads on other platforms and to measure the effectiveness of our marketing campaigns. These are only placed with your explicit consent.",
        ],
      },
      {
        heading: "3. Cookie Consent & Control",
        body: [
          "When you first visit Chavania you will be presented with a cookie consent banner. You can accept all cookies, reject optional cookies, or customise your preferences by category.",
          "You can update your cookie preferences at any time via the 'Cookie Settings' link in the website footer.",
          "You may also control cookies through your browser settings. Instructions for the most common browsers are available on their respective support pages. Note that blocking all cookies may impair your ability to use the platform.",
        ],
      },
      {
        heading: "4. Third-Party Cookies",
        body: [
          "Some cookies on the platform are set by third-party services we use, such as payment processors, analytics providers, and social media platforms. These third parties have their own privacy policies governing their use of cookie data.",
          "We do not control third-party cookies and recommend reviewing the privacy policies of any third parties whose cookies are present on the platform.",
        ],
      },
      {
        heading: "5. Cookie Retention",
        body: [
          "Session cookies are deleted when you close your browser. Persistent cookies remain on your device for a set period, which varies by cookie. Marketing and analytics cookies typically expire between 30 days and 2 years.",
          "A full list of the cookies we use, including their names, purposes, and expiry periods, is available in our Cookie Declaration, accessible via the Cookie Settings panel.",
        ],
      },
    ],
  },

  /* DATA SECURITY & RETENTION */
  {
    id: "security",
    label: "Security & Retention",
    icon: ShieldCheck,
    intro:
      "Protecting your personal data is a core responsibility. We implement robust technical and organisational measures to safeguard your information against unauthorised access, loss, destruction, or alteration. We also apply strict retention policies to ensure data is not kept longer than necessary.",
    sections: [
      {
        heading: "1. Security Measures",
        body: [
          "We protect your data using: TLS/HTTPS encryption for all data in transit, AES-256 encryption for sensitive data at rest, multi-factor authentication for all internal system access, role-based access controls and least-privilege principles, regular security audits and penetration testing, intrusion detection and monitoring systems, and physical security controls at our data centre facilities.",
          "Our payment processing infrastructure is PCI-DSS Level 1 certified. We do not store raw card data or payment credentials on our servers.",
        ],
      },
      {
        heading: "2. Data Breach Response",
        body: [
          "In the event of a personal data breach that is likely to result in a risk to your rights and freedoms, we will notify the Office of the Data Protection Commissioner within 72 hours of becoming aware of the breach.",
          "Where the breach is likely to result in a high risk to you, we will also notify you directly without undue delay, describing the nature of the breach, the data likely affected, likely consequences, and the measures we are taking to address it.",
          "We maintain a data breach response plan and conduct regular exercises to test our preparedness.",
        ],
      },
      {
        heading: "3. Retention Periods",
        body: [
          "We retain personal data for as long as necessary for the purposes described in this policy, or as required by applicable law. Our general retention guidelines are: active account data - retained for the duration of your account; transaction records - 7 years from the transaction date (tax compliance); customer support communications - 3 years from case closure; marketing data - until consent is withdrawn or 2 years of inactivity, whichever is sooner; security logs - 12 months.",
          "After the applicable retention period, data is securely deleted or anonymised. Anonymised data may be retained indefinitely for statistical and analytical purposes.",
        ],
      },
      {
        heading: "4. Your Role in Security",
        body: [
          "While we take significant measures to protect your data, you also play an important role. We recommend: using a strong, unique password for your Chavania account; enabling two-factor authentication (2FA) in your account security settings; logging out of your account when using shared or public devices; reporting any suspected unauthorised account access to security@chavania.com immediately.",
          "Chavania will never ask for your password, M-Pesa PIN, or full payment details via email, phone, or chat. Be cautious of phishing attempts.",
        ],
      },
    ],
  },
];
