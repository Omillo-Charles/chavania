import { LucideIcon, Cookie, ClipboardList, Link2, Settings, CalendarDays } from "lucide-react";

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
  /* WHAT ARE COOKIES */
  {
    id: "about",
    label: "About Cookies",
    icon: Cookie,
    intro:
      "This Cookie Policy explains what cookies and similar tracking technologies are, how Chavania uses them, and the choices available to you. It should be read alongside our Privacy Policy and Terms of Service.",
    sections: [
      {
        heading: "1. What Are Cookies?",
        body: [
          "Cookies are small text files placed on your device - computer, smartphone, or tablet - when you visit a website. They are widely used to make websites function correctly, work more efficiently, and to provide information to site owners.",
          "Cookies can be 'session cookies', which are deleted when you close your browser, or 'persistent cookies', which remain on your device for a defined period or until you delete them.",
          "Cookies can be set by the website you are visiting ('first-party cookies') or by third-party services embedded on that page ('third-party cookies').",
        ],
      },
      {
        heading: "2. Similar Technologies",
        body: [
          "In addition to cookies, we and our partners may use similar technologies that function in comparable ways. These include: web beacons (tiny transparent images embedded in pages or emails that register when content is viewed), pixel tags (code snippets that track user actions such as ad conversions), local storage and session storage (browser-side key-value stores used for session state and preferences), and device fingerprinting (non-cookie signals such as device type, OS, and browser configuration used for fraud detection).",
          "All of the above are referred to collectively as 'cookies' throughout this policy unless a distinction is necessary.",
        ],
      },
      {
        heading: "3. Why Cookies Matter",
        body: [
          "Without certain cookies the Chavania platform would not function at all - you would not be able to stay logged in, add items to your cart, or complete a purchase. Other cookies help us improve your experience by remembering your preferences and showing you more relevant content.",
          "Some cookies help us keep the platform safe by detecting fraudulent activity and protecting your account from unauthorised access.",
          "Where cookies involve processing your personal data, they are covered by our Privacy Policy and the Kenya Data Protection Act 2019.",
        ],
      },
    ],
  },

  /* COOKIES WE USE */
  {
    id: "types",
    label: "Cookies We Use",
    icon: ClipboardList,
    intro:
      "We group the cookies used on the Chavania platform into four categories based on their purpose. The table below describes each category, gives examples of cookies in that category, and indicates whether they require your consent.",
    sections: [
      {
        heading: "1. Strictly Necessary Cookies",
        body: [
          "These cookies are essential for the platform to operate. They enable core functionality such as page navigation, secure login, shopping cart persistence, payment session management, and CSRF protection. Without them the platform cannot function.",
          "Examples: session identifier cookie (keeps you logged in during your visit), CSRF token cookie (prevents cross-site request forgery attacks), cart-state cookie (preserves cart contents between pages), load-balancer cookie (routes your requests to the correct server).",
          "Legal basis: These cookies do not require your consent because they are strictly necessary for the delivery of the service you have requested. They cannot be disabled through our cookie banner, although you can disable them in your browser settings - doing so will break core platform functionality.",
          "Retention: Session cookies are deleted when you close your browser. Persistent strictly necessary cookies are retained for up to 30 days.",
        ],
      },
      {
        heading: "2. Functional Cookies",
        body: [
          "Functional cookies allow the platform to remember choices you make and provide enhanced, personalised features. They may be set by us or by third-party providers whose services we embed.",
          "Examples: language preference cookie (remembers your selected language), currency preference cookie (remembers your selected currency), recently-viewed products cookie (powers the 'recently viewed' widget), theme preference cookie (remembers light/dark mode), and cookie consent preference cookie (stores your cookie choices so you are not asked again).",
          "Legal basis: Functional cookies are set on the basis of your consent, except where they are strictly necessary to provide a feature you have explicitly requested (e.g., the cookie consent preference cookie itself).",
          "Retention: Functional cookies are typically retained for 90 days to 12 months depending on the feature.",
        ],
      },
      {
        heading: "3. Analytics Cookies",
        body: [
          "Analytics cookies collect information about how visitors use the platform - which pages are visited most often, where users drop off during checkout, how features are navigated, and whether error messages are encountered. This data is used in aggregate to improve the platform.",
          "Examples: page view tracking cookie (records which pages are visited and in what order), session duration cookie (measures how long users spend on the platform), A/B test assignment cookie (records which variant of a test you are seeing to ensure consistency), error rate monitoring (captures JavaScript errors and performance metrics).",
          "All analytics data is pseudonymised where possible. We do not use analytics cookies to build individual advertising profiles.",
          "Legal basis: Analytics cookies require your consent. If consent is not given, we use only aggregated, non-cookie-based statistics for platform analytics.",
          "Retention: Analytics cookies are retained for 13 months.",
        ],
      },
      {
        heading: "4. Marketing & Advertising Cookies",
        body: [
          "Marketing cookies are used to deliver advertisements relevant to your interests, limit the number of times you see an ad, and measure the effectiveness of advertising campaigns. They may track your activity across multiple websites.",
          "Examples: ad conversion cookie (records when you complete a purchase after clicking an advertisement), retargeting cookie (allows us to show Chavania ads to you on other platforms), frequency capping cookie (prevents the same ad from being shown to you too many times), social media pixel (used by platforms such as Meta and TikTok to attribute conversions).",
          "These cookies are set by our advertising partners. Each partner operates under its own privacy policy and may combine data collected on our platform with data collected elsewhere.",
          "Legal basis: Marketing cookies require your explicit consent. They are only placed after you actively opt in via the cookie consent banner.",
          "Retention: Marketing cookies are typically retained for 30 days to 2 years depending on the advertising partner.",
        ],
      },
    ],
  },

  /* THIRD-PARTY COOKIES */
  {
    id: "third-party",
    label: "Third-Party Cookies",
    icon: Link2,
    intro:
      "Some cookies on the Chavania platform are set by third-party services we use. These third parties have their own privacy and cookie policies, which we encourage you to review. We only permit third-party cookies from services that provide essential functionality or that you have consented to.",
    sections: [
      {
        heading: "1. Payment Processors",
        body: [
          "Our payment partners (including M-Pesa integration services, Visa/Mastercard processors, and bank transfer gateways) set cookies and use similar technologies to process payments securely, detect payment fraud, and comply with financial regulations.",
          "These are treated as strictly necessary because payment processing is a core platform function. Payment processor cookies do not require separate consent.",
          "Relevant policies: refer to the privacy policies of your chosen payment provider for full details of their data practices.",
        ],
      },
      {
        heading: "2. Identity Verification & KYC",
        body: [
          "Our KYC provider sets cookies during the identity verification flow for seller onboarding. These are strictly necessary for regulatory compliance and cannot be disabled during the verification process.",
          "KYC cookies are session-scoped and deleted once the verification session ends.",
        ],
      },
      {
        heading: "3. Analytics Providers",
        body: [
          "We use internal analytics infrastructure and may use selected third-party analytics tools. Any third-party analytics cookies are only placed with your consent and are subject to the analytics category in the previous section.",
          "Where third-party analytics are used, data is processed under a data processing agreement that restricts the provider from using your data for their own purposes.",
        ],
      },
      {
        heading: "4. Advertising Partners",
        body: [
          "With your consent, advertising partners such as Meta (Facebook/Instagram), Google, and TikTok may set cookies on the Chavania platform to enable retargeting and conversion tracking.",
          "These partners may combine cookie data with data they have collected from other sources. You can manage your preferences with these partners directly through their respective privacy settings.",
          "Meta: facebook.com/privacy | Google: myaccount.google.com/data-and-privacy | TikTok: tiktok.com/legal/privacy-policy",
        ],
      },
      {
        heading: "5. Customer Support Tools",
        body: [
          "Our customer support chat widget may set functional cookies to maintain chat session state and load user context (e.g., your order history) into the support interface. These are functional cookies and are placed only when you open the support chat.",
        ],
      },
    ],
  },

  /* MANAGING COOKIES */
  {
    id: "control",
    label: "Managing Cookies",
    icon: Settings,
    intro:
      "You have several ways to control the cookies placed on your device. Below we explain your options, from our in-platform consent tools to browser-level and opt-out controls. Note that disabling certain cookies may affect the functionality of the Chavania platform.",
    sections: [
      {
        heading: "1. Cookie Consent Banner",
        body: [
          "When you first visit Chavania you will be shown a cookie consent banner. You can: accept all cookies (strictly necessary, functional, analytics, and marketing), reject all optional cookies (only strictly necessary cookies will be placed), or customise your preferences by toggling individual categories on or off.",
          "Your consent choices are stored in a functional cookie and applied on every subsequent visit. You will not be asked again until your consent expires or you clear your cookies.",
          "Consent for optional cookies is valid for 12 months. After expiry you will be asked again.",
        ],
      },
      {
        heading: "2. Cookie Settings Panel",
        body: [
          "You can update your cookie preferences at any time - not just at first visit - by clicking 'Cookie Settings' in the website footer. This opens the same preference panel as the consent banner.",
          "Changes take effect immediately. If you withdraw consent for a category, any cookies in that category that were previously placed will be deleted from your device within 24 hours.",
        ],
      },
      {
        heading: "3. Browser Controls",
        body: [
          "All major browsers allow you to view, manage, block, and delete cookies through their settings. Instructions for common browsers: Chrome - Settings > Privacy and security > Cookies and other site data; Firefox - Settings > Privacy & Security > Cookies and Site Data; Safari - Preferences > Privacy > Manage Website Data; Edge - Settings > Cookies and site permissions.",
          "You can configure your browser to block all cookies, block third-party cookies only, or alert you before a cookie is placed. Note that blocking strictly necessary cookies will prevent the Chavania platform from functioning correctly.",
          "Clearing cookies from your browser will log you out of Chavania and reset your cookie consent preferences, meaning you will be shown the consent banner again on your next visit.",
        ],
      },
      {
        heading: "4. Mobile Device Controls",
        body: [
          "On iOS, you can limit ad tracking and reset your advertising identifier via Settings > Privacy & Security > Tracking and Settings > Privacy & Security > Apple Advertising.",
          "On Android, you can opt out of personalised ads and reset your advertising ID via Settings > Privacy > Ads.",
          "Mobile apps may also use device-level identifiers (such as IDFA or GAID) in addition to cookies. These can be reset or limited via the device settings described above.",
        ],
      },
      {
        heading: "5. Industry Opt-Out Tools",
        body: [
          "You can opt out of interest-based advertising from participating advertisers using the following industry tools: Your Online Choices (youronlinechoices.com) for EU/UK users; Network Advertising Initiative opt-out (optout.networkadvertising.org); Digital Advertising Alliance opt-out (optout.aboutads.info).",
          "These tools set opt-out cookies in your browser. If you clear your browser cookies you will need to opt out again.",
          "Opting out of interest-based advertising does not mean you will see fewer ads - it means the ads you see will be less relevant to your interests.",
        ],
      },
    ],
  },

  /* RETENTION & UPDATES */
  {
    id: "retention",
    label: "Retention & Updates",
    icon: CalendarDays,
    intro:
      "This section covers how long specific cookies are retained on your device and how we handle updates to this Cookie Policy.",
    sections: [
      {
        heading: "1. Cookie Retention Summary",
        body: [
          "Strictly necessary cookies: session-scoped (deleted on browser close) or up to 30 days for persistent variants such as remember-me tokens.",
          "Functional cookies: 90 days to 12 months, depending on the feature they support.",
          "Analytics cookies: up to 13 months from the date of placement.",
          "Marketing and advertising cookies: 30 days to 2 years, depending on the advertising partner and campaign type.",
          "Cookie consent preference cookie: 12 months, after which you will be asked for consent again.",
        ],
      },
      {
        heading: "2. Full Cookie Declaration",
        body: [
          "A detailed, regularly updated table of every individual cookie we use - including cookie name, provider, purpose, type, and exact expiry - is available in the Cookie Declaration, accessible via the Cookie Settings panel in the website footer.",
          "The Cookie Declaration is updated automatically when new cookies are added or existing cookies are changed, ensuring it always reflects the current state of cookie usage on the platform.",
        ],
      },
      {
        heading: "3. Updates to This Policy",
        body: [
          "We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our cookie practices. The 'Last Updated' date at the top of this page will be revised when changes are made.",
          "For material changes that affect how we use cookies or your consent choices, we will display a notice on the platform and, where necessary, ask for your consent again.",
          "We encourage you to review this policy periodically. Your continued use of the platform after any update constitutes acceptance of the revised policy.",
        ],
      },
      {
        heading: "4. Contact & Further Information",
        body: [
          "If you have any questions about our use of cookies or this Cookie Policy, please contact our Data Protection Officer at privacy@chavania.com.",
          "For questions about your personal data more broadly, refer to our Privacy Policy or submit a data subject request to privacy@chavania.com.",
          "You also have the right to lodge a complaint with the Office of the Data Protection Commissioner (ODPC) in Kenya if you believe our cookie practices do not comply with applicable law.",
        ],
      },
    ],
  },
];
