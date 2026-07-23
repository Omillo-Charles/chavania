import { LucideIcon, ShieldCheck, KeyRound, CreditCard, Search, CircleCheck } from "lucide-react";

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
export const CONTACT_EMAIL = "security@chavania.com";
export const JURISDICTION = "Republic of Kenya";

export const TABS: Tab[] = [
  /* PLATFORM SECURITY */
  {
    id: "platform",
    label: "Platform Security",
    icon: ShieldCheck,
    intro:
      "Chavania is built with security as a foundational principle, not an afterthought. This section describes the technical and operational measures we employ to protect the platform, your data, and every transaction processed on Chavania.",
    sections: [
      {
        heading: "1. Encryption",
        body: [
          "All data transmitted between your device and the Chavania platform is encrypted using TLS 1.2 or higher. We enforce HTTPS across every page, API endpoint, and service - plain HTTP connections are automatically redirected.",
          "Sensitive data at rest - including personal identifiers, financial records, and hashed credentials - is encrypted using AES-256. Database encryption keys are managed through a dedicated key management service with strict rotation schedules.",
          "Passwords are never stored in plain text. We use bcrypt with a high work factor for password hashing, ensuring that even in the event of a database exposure, raw passwords cannot be recovered.",
        ],
      },
      {
        heading: "2. Infrastructure Security",
        body: [
          "The Chavania platform runs on cloud infrastructure hosted in ISO 27001-certified data centres. Physical access to server facilities is restricted to authorised personnel and protected by multi-factor authentication, CCTV, and security guards.",
          "Our network is segmented using virtual private clouds (VPCs) with strict firewall rules, limiting exposure of internal services to the public internet. Database servers are not directly accessible from the internet.",
          "We use Web Application Firewall (WAF) technology to detect and block common attack vectors including SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).",
          "Distributed Denial of Service (DDoS) mitigation is applied at the network edge to protect platform availability during attack attempts.",
        ],
      },
      {
        heading: "3. Access Controls",
        body: [
          "Access to internal systems follows the principle of least privilege - every team member and service account is granted only the minimum permissions required to perform their role. Access rights are reviewed quarterly and revoked immediately upon role change or departure.",
          "All internal system access requires multi-factor authentication (MFA). Privileged access to production systems requires an additional layer of approval and is logged in a tamper-evident audit trail.",
          "Administrative actions on the platform - such as account suspension, payout adjustments, or data exports - are logged with the acting user's identity, timestamp, and IP address. Logs are retained for a minimum of 12 months.",
        ],
      },
      {
        heading: "4. Security Monitoring & Incident Response",
        body: [
          "We operate a 24/7 security monitoring programme using automated intrusion detection systems (IDS) and a Security Information and Event Management (SIEM) platform. Alerts are triaged by our security team around the clock.",
          "Our Incident Response Plan (IRP) defines clear procedures for containing, investigating, and remediating security incidents. We conduct tabletop exercises and simulated breach drills at least twice a year.",
          "In the event of a confirmed security incident affecting user data, we will notify affected users and the Office of the Data Protection Commissioner (ODPC) within the timeframes required by the Kenya Data Protection Act 2019 - typically within 72 hours of becoming aware of a breach.",
        ],
      },
      {
        heading: "5. Secure Development",
        body: [
          "Security is integrated into our software development lifecycle (SDLC). All code changes are reviewed by at least one additional engineer before merging. Security-sensitive changes - such as authentication flows and payment processing - undergo a dedicated security review.",
          "We perform automated static analysis (SAST) and dependency vulnerability scanning on every code build. Known vulnerable dependencies are patched or updated as part of our standard release process.",
          "Our engineers receive mandatory annual security training covering topics such as OWASP Top 10, secure coding practices, phishing awareness, and incident reporting procedures.",
        ],
      },
    ],
  },

  /* ACCOUNT SECURITY */
  {
    id: "account",
    label: "Account Security",
    icon: KeyRound,
    intro:
      "Your Chavania account is your key to the platform. We provide robust tools to help you keep it secure, and we apply behind-the-scenes protections to detect and block unauthorised access attempts.",
    sections: [
      {
        heading: "1. Password Requirements",
        body: [
          "Chavania requires passwords to meet a minimum strength threshold: at least 8 characters, including a mix of uppercase and lowercase letters, numbers, and special characters. A real-time strength indicator guides you during account creation and password changes.",
          "We check new passwords against known data breach databases (using a k-anonymity model that does not expose your full password) and reject credentials that have appeared in previous breaches.",
          "Passwords are never transmitted in plain text. All password reset flows use time-limited, single-use tokens delivered to your registered email address.",
        ],
      },
      {
        heading: "2. Two-Factor Authentication (2FA)",
        body: [
          "We strongly recommend enabling two-factor authentication on your Chavania account. 2FA adds a second layer of verification - in addition to your password - before access is granted.",
          "Supported 2FA methods include: authenticator app (TOTP - compatible with Google Authenticator, Authy, and similar apps), SMS one-time passcode (OTP) to your registered phone number, and email OTP as a fallback.",
          "Seller accounts processing above a defined monthly transaction threshold are required to have 2FA enabled. Chavania may enforce 2FA for all accounts in future.",
          "Backup recovery codes are provided when you set up 2FA. Store these in a secure location - they allow account recovery if you lose access to your 2FA device.",
        ],
      },
      {
        heading: "3. Login Monitoring",
        body: [
          "Every login to your account is recorded with device type, browser, IP address, approximate location, and timestamp. You can review your recent login history in your account security settings.",
          "If we detect a login from an unrecognised device or an unusual location - for example, a country you have never logged in from - we will send an alert to your registered email address and may require additional verification before granting access.",
          "Repeated failed login attempts trigger a temporary lockout to prevent brute-force attacks. After multiple lockouts we may require identity re-verification before unlocking the account.",
        ],
      },
      {
        heading: "4. Active Session Management",
        body: [
          "You can view and manage all active sessions on your account from Settings > Security > Active Sessions. Each session shows the device, browser, location, and last-active time.",
          "You can terminate any individual session or sign out of all devices at once. We recommend doing this if you have used a public or shared computer, or if you suspect unauthorised access.",
          "Sessions expire automatically after 30 days of inactivity. High-risk actions - such as changing your password, adding a new payout method, or modifying 2FA settings - require re-authentication even within an active session.",
        ],
      },
      {
        heading: "5. Account Takeover Prevention",
        body: [
          "Chavania employs machine learning models that analyse login and account activity patterns in real time to detect account takeover (ATO) attempts. Anomalous behaviour - such as sudden changes to payout details, bulk order placements from a new device, or rapid profile edits - triggers additional verification.",
          "We will never ask you for your password, 2FA code, or full payment details via email, SMS, phone call, or chat. Any communication claiming to be from Chavania and requesting these details is fraudulent. Report it immediately to security@chavania.com.",
          "Email address changes require confirmation from both the old and new email addresses, preventing attackers who have gained temporary access from locking you out.",
        ],
      },
    ],
  },

  /* PAYMENT SECURITY */
  {
    id: "payments",
    label: "Payment Security",
    icon: CreditCard,
    intro:
      "Every transaction on Chavania is processed through secure, certified payment infrastructure. We take extensive measures to protect your financial data and to prevent payment fraud.",
    sections: [
      {
        heading: "1. PCI-DSS Compliance",
        body: [
          "Chavania's payment processing infrastructure is compliant with the Payment Card Industry Data Security Standard (PCI-DSS) Level 1 - the highest level of certification available. This means our payment systems are independently audited annually to verify that they meet strict security controls.",
          "We do not store, process, or transmit raw card numbers, CVV codes, or card expiry dates on our own servers. These details are tokenised and handled exclusively by our certified payment processors.",
          "All payment forms use iframe embeds or redirect flows provided by our payment partners, meaning your sensitive card data is entered directly into the payment processor's environment and never touches the Chavania application layer.",
        ],
      },
      {
        heading: "2. Fraud Detection",
        body: [
          "Every transaction on Chavania is analysed in real time by our fraud detection system, which evaluates hundreds of signals - including device fingerprint, transaction velocity, billing address consistency, IP reputation, and historical behaviour - to assign a risk score.",
          "High-risk transactions may be automatically declined, placed on hold pending review, or subject to additional verification such as 3D Secure (3DS2) authentication.",
          "Our fraud models are continuously retrained on new data and reviewed by our fraud operations team. False positives - legitimate transactions flagged as suspicious - can be reviewed by contacting security@chavania.com.",
        ],
      },
      {
        heading: "3. M-Pesa Security",
        body: [
          "M-Pesa payments on Chavania are processed through Safaricom's official Daraja API. Chavania does not have access to your M-Pesa PIN at any point in the transaction flow.",
          "All M-Pesa STK push requests are initiated by Chavania's registered shortcode. You should only approve M-Pesa payment prompts that you have explicitly initiated on the Chavania platform. If you receive an unsolicited STK push appearing to be from Chavania, decline it and report it to security@chavania.com.",
          "M-Pesa transaction reference numbers are stored against your order and are available in your order history for dispute resolution.",
        ],
      },
      {
        heading: "4. Buyer Protection",
        body: [
          "Chavania holds payment funds in escrow until you confirm receipt of your order or until the platform's automatic release window expires. This means sellers do not receive funds for orders that are disputed or undelivered.",
          "If you did not authorise a charge that appears on your payment statement, contact security@chavania.com immediately. We will investigate and, where the charge is confirmed as unauthorised, initiate a refund in accordance with our Buyer Protection programme.",
          "Chavania will never initiate payment requests outside of the standard checkout flow. Do not make payments to individuals claiming to represent Chavania via personal M-Pesa numbers or external bank accounts.",
        ],
      },
    ],
  },

  /* RESPONSIBLE DISCLOSURE */
  {
    id: "disclosure",
    label: "Responsible Disclosure",
    icon: Search,
    intro:
      "We welcome and value reports from security researchers who identify vulnerabilities in the Chavania platform. Our responsible disclosure programme outlines how to report findings safely, what we ask of researchers, and what you can expect from us in return.",
    sections: [
      {
        heading: "1. Reporting a Vulnerability",
        body: [
          "If you discover a security vulnerability in the Chavania platform, please report it to us as soon as possible at security@chavania.com. Encrypt your report using our PGP public key, available at chavania.com/security/pgp.asc.",
          "Please include in your report: a description of the vulnerability and its potential impact, the URL, endpoint, or component affected, step-by-step reproduction instructions, any proof-of-concept code or screenshots (do not include real user data), and your contact details for follow-up.",
          "We will acknowledge your report within 2 business days and provide a more detailed response - including our assessment and expected remediation timeline - within 10 business days.",
        ],
      },
      {
        heading: "2. Scope",
        body: [
          "In scope for responsible disclosure: the Chavania web application (chavania.com and subdomains), Chavania mobile applications (iOS and Android), public-facing APIs, and authentication and session management systems.",
          "Out of scope: third-party services and infrastructure not under Chavania's direct control, social engineering attacks targeting Chavania staff or users, physical security of Chavania facilities, denial-of-service attacks, and findings from automated scanners without a demonstrated exploitable impact.",
          "We ask that you do not test against accounts that do not belong to you, do not access, modify, or delete user data, and do not disrupt the availability or performance of the platform during your research.",
        ],
      },
      {
        heading: "3. Our Commitments to Researchers",
        body: [
          "We will not pursue legal action against researchers who discover and report vulnerabilities in good faith and in accordance with this policy.",
          "We will work with you to understand and validate your finding, keep you informed of our remediation progress, and credit you publicly (with your permission) in our Security Hall of Fame once the vulnerability is fixed.",
          "For significant, verified vulnerabilities we offer a monetary bounty. Bounty amounts are assessed on a case-by-case basis according to severity (CVSS score), exploitability, and potential impact. Details are provided upon report triage.",
        ],
      },
      {
        heading: "4. Coordinated Disclosure",
        body: [
          "We ask that you give us a reasonable time - typically 90 days - to investigate and remediate a reported vulnerability before publicly disclosing details of the finding. This is consistent with industry-standard coordinated disclosure practices.",
          "If a vulnerability is actively being exploited in the wild, we may request an expedited timeline. We will communicate transparently about our remediation progress and will not ask you to keep a vulnerability secret indefinitely.",
          "We reserve the right to decline a bounty or deviate from the above commitments if a researcher acts in bad faith, breaches this policy, or causes harm to the platform or its users.",
        ],
      },
    ],
  },

  /* USER BEST PRACTICES */
  {
    id: "best-practices",
    label: "Staying Safe",
    icon: CircleCheck,
    intro:
      "Platform security is a shared responsibility. While we invest heavily in protecting the Chavania infrastructure, there are practical steps you can take to significantly reduce your personal risk. This section outlines the most important ones.",
    sections: [
      {
        heading: "1. Protect Your Account",
        body: [
          "Use a strong, unique password for your Chavania account - one that you do not use on any other website or app. A password manager (such as Bitwarden, 1Password, or the one built into your browser) can generate and store strong passwords for you.",
          "Enable two-factor authentication (2FA) in Settings > Security. Even if your password is compromised, 2FA prevents an attacker from accessing your account.",
          "Never share your password, 2FA codes, or backup recovery codes with anyone - including people claiming to work for Chavania. Our support team will never ask for these.",
        ],
      },
      {
        heading: "2. Recognise Phishing & Scams",
        body: [
          "Phishing attacks impersonate Chavania via email, SMS, or phone to trick you into revealing credentials or making payments. Red flags include: messages asking for your password or OTP, urgent threats that your account will be closed unless you act immediately, links to domains that are not chavania.com (check carefully for typos like 'chavan1a.com' or 'chavania-support.net'), and requests to make payments outside the platform.",
          "Chavania will never ask you to pay via personal M-Pesa numbers, WhatsApp, or external bank transfers not generated through our checkout. All legitimate payment requests come through the standard checkout flow.",
          "If you receive a suspicious message claiming to be from Chavania, do not click any links. Forward it to security@chavania.com and delete it.",
        ],
      },
      {
        heading: "3. Safe Buying & Selling",
        body: [
          "Always communicate with buyers and sellers through the Chavania messaging platform. Requests to move communication to WhatsApp, Telegram, or personal email are a common precursor to fraud.",
          "Be wary of deals that seem too good to be true - unusually low prices on high-value items (electronics, luxury goods) are a common lure for scams. Check seller ratings, reviews, and account age before purchasing.",
          "Never send advance payments outside the Chavania platform, regardless of the reason given. Chavania's escrow system protects your payment until your order is delivered.",
          "As a seller, do not dispatch orders based on payment screenshots or unverified claims of payment. Confirm funds are reflected in your Chavania dashboard before shipping.",
        ],
      },
      {
        heading: "4. Device & Network Safety",
        body: [
          "Keep your device's operating system, browser, and apps updated. Security patches in updates close vulnerabilities that attackers exploit.",
          "Avoid logging into your Chavania account on public or shared computers. If you must, use your browser's private/incognito mode and sign out completely when done. Also consider terminating the session from Settings > Security > Active Sessions afterwards.",
          "Be cautious when using public Wi-Fi networks. Avoid accessing your Chavania account or making payments over unsecured public networks. A VPN can add a layer of encryption if you must use public Wi-Fi.",
          "If your device is lost or stolen, immediately sign out of all sessions via Settings > Security > Active Sessions, and change your password and 2FA settings from another device.",
        ],
      },
      {
        heading: "5. Reporting Suspicious Activity",
        body: [
          "If you notice anything unusual on your account - unexpected orders, changes to your profile, unfamiliar active sessions, or transactions you did not initiate - contact us immediately at security@chavania.com or through the in-app support chat.",
          "To report a suspicious listing, message, or user on the platform, use the 'Report' button available on all listings and user profiles. Reports are reviewed by our Trust & Safety team, typically within 24 hours.",
          "Your reports help us protect the entire Chavania community. We take every report seriously and, where appropriate, will take action including removing listings, suspending accounts, and notifying law enforcement.",
        ],
      },
    ],
  },
];
