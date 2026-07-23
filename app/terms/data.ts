export interface Section {
  heading: string;
  body: string[];
}

export interface Tab {
  id: string;
  label: string;
  icon: string;
  intro: string;
  sections: Section[];
}

export const LAST_UPDATED = "21 July 2026";
export const EFFECTIVE_DATE = "21 July 2026";
export const PLATFORM_NAME = "Chavania";
export const COMPANY = "Chavania Inc.";
export const CONTACT_EMAIL = "legal@chavania.com";
export const JURISDICTION = "Republic of Kenya";

export const TABS: Tab[] = [
  /* GENERAL TERMS */
  {
    id: "general",
    label: "General Terms",
    icon: "📋",
    intro:
      "These General Terms apply to every person who accesses or uses the Chavania platform in any capacity - whether you are browsing as a guest, purchasing as a buyer, selling as a merchant, or managing the platform as an administrator. By continuing to use Chavania you agree to be bound by all terms set out in this document and any policies incorporated by reference.",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        body: [
          "By accessing, registering on, or otherwise using the Chavania platform (including the website, mobile applications, APIs, and any related services), you confirm that you have read, understood, and agree to be legally bound by these Terms of Service ('Terms'), our Privacy Policy, Cookie Policy, and any other policies published on the platform from time to time.",
          "If you do not agree with any part of these Terms, you must immediately discontinue use of the platform. Continued use after any modification to the Terms constitutes acceptance of the revised Terms.",
          "These Terms form a legally binding contract between you and Chavania Inc., a company incorporated under the laws of the Republic of Kenya.",
        ],
      },
      {
        heading: "2. Eligibility",
        body: [
          "You must be at least 18 years of age, or the age of majority in your jurisdiction - whichever is higher - to create an account or complete a transaction on Chavania. By registering you represent and warrant that you meet this age requirement.",
          "Minors between 13 and 17 years may browse the platform only with verifiable parental or guardian consent. They may not register an account, complete purchases, or list products.",
          "You must have the legal capacity to enter into contracts under the laws of your jurisdiction. Persons who have previously been banned from the platform are not eligible to re-register without express written consent from Chavania.",
          "Corporate entities, partnerships, and sole proprietors using the platform must ensure that the individual accepting these Terms has authority to bind the entity.",
        ],
      },
      {
        heading: "3. Account Registration & Security",
        body: [
          "To access most platform features you are required to create an account by providing accurate, current, and complete information. You agree to keep your account information up to date at all times.",
          "You are solely responsible for maintaining the confidentiality of your login credentials and for all activities conducted under your account. Chavania will not be liable for any loss or damage arising from unauthorised use of your credentials.",
          "You must notify Chavania immediately at security@chavania.com if you suspect any unauthorised access to or use of your account.",
          "Chavania reserves the right to refuse registration, suspend, or terminate accounts at its sole discretion, including - but not limited to - situations where false information is provided or platform policies are violated.",
          "One natural person may hold only one personal account. Creating multiple accounts to circumvent platform restrictions, earn unjust benefits, or manipulate rankings is strictly prohibited.",
        ],
      },
      {
        heading: "4. Prohibited Conduct",
        body: [
          "You agree not to: (a) use the platform for any unlawful purpose or in violation of any local, national, or international law; (b) post, transmit, or distribute content that is defamatory, obscene, hateful, discriminatory, or violates the rights of any third party; (c) attempt to gain unauthorised access to any portion of the platform or its related systems; (d) interfere with or disrupt the integrity or performance of the platform; (e) use automated bots, scrapers, or other automated means to access or collect data without express written permission; (f) engage in price manipulation, fake reviews, or any other deceptive practice; (g) transmit malware, viruses, or any other harmful code.",
          "Any violation of the above may result in immediate suspension or termination of your account, removal of content, and where appropriate, reporting to law enforcement authorities.",
        ],
      },
      {
        heading: "5. Intellectual Property",
        body: [
          "All content on the Chavania platform - including but not limited to text, graphics, logos, icons, images, audio clips, software, and the compilation thereof - is the property of Chavania Inc. or its content suppliers and is protected by Kenyan and international copyright and intellectual property laws.",
          "You are granted a limited, non-exclusive, non-transferable, revocable licence to access and use the platform for its intended purposes only. This licence does not include the right to resell or make commercial use of platform content, collect and use product listings for the benefit of another merchant, make derivative works, or use data mining or similar data extraction tools.",
          "User-generated content: when you post reviews, photos, store descriptions, or other content on the platform, you grant Chavania a worldwide, royalty-free, sublicensable, and transferable licence to host, use, reproduce, modify, adapt, publish, translate, and distribute such content in connection with the platform.",
          "Any trademarks, service marks, and trade names displayed on the platform are the property of their respective owners. Nothing in these Terms grants you any right to use any trademark without prior written permission.",
        ],
      },
      {
        heading: "6. Privacy & Data Protection",
        body: [
          "Chavania is committed to protecting your personal data in accordance with the Kenya Data Protection Act 2019 and the EU General Data Protection Regulation (GDPR) where applicable. Our full Privacy Policy explains what data we collect, how we use it, and your rights in relation to it.",
          "By using the platform you consent to the collection, processing, and storage of your personal data as described in the Privacy Policy.",
          "We implement technical and organisational security measures to protect your data. However, no internet transmission or electronic storage is completely secure, and we cannot guarantee absolute security.",
          "You have the right to access, correct, delete, or port your personal data. Requests may be submitted to privacy@chavania.com.",
        ],
      },
      {
        heading: "7. Dispute Resolution",
        body: [
          "In the event of any dispute, claim, or controversy arising from or relating to these Terms or your use of the platform, you agree to first attempt to resolve the matter informally by contacting Chavania at legal@chavania.com. Chavania will endeavour to resolve disputes within 30 days.",
          "If informal resolution fails, disputes shall be submitted to binding arbitration under the Nairobi Centre for International Arbitration (NCIA) rules, conducted in Nairobi, Kenya, in the English language.",
          "Notwithstanding the above, either party may seek injunctive or other equitable relief in any court of competent jurisdiction to prevent irreparable harm.",
          "Class action lawsuits and class-wide arbitration are expressly waived to the fullest extent permitted by applicable law.",
          "These Terms are governed by the laws of the Republic of Kenya without regard to conflict of law principles.",
        ],
      },
      {
        heading: "8. Limitation of Liability",
        body: [
          "To the fullest extent permitted by applicable law, Chavania Inc., its officers, directors, employees, agents, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, goodwill, or other intangible losses, arising out of or related to your use of the platform.",
          "Chavania's total aggregate liability for all claims relating to the platform shall not exceed the greater of (a) the total fees paid by you to Chavania in the 12 months preceding the claim, or (b) KES 10,000.",
          "Chavania does not warrant that: (a) the platform will be available at all times without interruption; (b) the platform will be free of errors or viruses; (c) the results obtained from using the platform will be accurate or reliable.",
        ],
      },
      {
        heading: "9. Modifications to Terms",
        body: [
          "Chavania reserves the right to modify these Terms at any time. When changes are made, the 'Last Updated' date at the top of this page will be revised. For material changes, Chavania will provide at least 14 days' advance notice via email or a prominent platform notice.",
          "Your continued use of the platform after the effective date of any modification constitutes your acceptance of the revised Terms. If you do not agree to the changes, you must stop using the platform and may request account deletion.",
        ],
      },
      {
        heading: "10. Termination",
        body: [
          "You may terminate your account at any time by contacting support@chavania.com. Termination does not relieve you of obligations incurred prior to termination, including pending payments or outstanding disputes.",
          "Chavania may suspend or terminate your access at any time, with or without notice, for any violation of these Terms, prolonged inactivity, or at Chavania's sole discretion for any other reason deemed appropriate.",
          "Upon termination, all licences granted to you under these Terms immediately cease. Sections concerning intellectual property, limitation of liability, dispute resolution, and governing law survive termination.",
        ],
      },
    ],
  },

  /*  BUYER TERMS  */
  {
    id: "buyers",
    label: "Buyer Terms",
    icon: "🛍️",
    intro:
      "These Buyer Terms govern your activities as a purchaser on the Chavania platform. They are in addition to the General Terms and apply whenever you browse, add items to cart, place orders, or interact with sellers or their products.",
    sections: [
      {
        heading: "1. Browsing & Product Information",
        body: [
          "Product listings on Chavania are created and maintained by independent sellers. Chavania does not manufacture, stock, or independently verify the accuracy of product descriptions, images, specifications, or availability. Chavania acts solely as an intermediary marketplace.",
          "Prices displayed on the platform are in Kenyan Shillings (KES) unless explicitly stated otherwise. Prices include applicable taxes where indicated, but may exclude delivery fees which are calculated separately at checkout.",
          "Product images are for illustrative purposes. Colours, textures, and dimensions may vary slightly from what is displayed due to differences in device screens and manufacturing tolerances.",
          "Chavania reserves the right to remove or correct any product listing at any time without notice.",
        ],
      },
      {
        heading: "2. Placing Orders",
        body: [
          "By placing an order you are making a binding offer to purchase the selected products at the stated price and on the stated terms. An order is confirmed only when you receive a written order confirmation email from Chavania or the seller.",
          "You are responsible for ensuring that all order details - including delivery address, product variant, quantity, and payment method - are accurate before submitting. Errors made at the time of ordering may not be correctable after processing begins.",
          "Chavania and sellers reserve the right to refuse or cancel any order, including confirmed orders, due to product unavailability, pricing errors, suspected fraud, or inability to verify payment. You will be notified promptly and any payment received will be fully refunded.",
          "Bulk orders above platform-specified thresholds may require seller approval and may be subject to additional terms.",
        ],
      },
      {
        heading: "3. Payment",
        body: [
          "Chavania supports multiple payment methods including M-Pesa, Visa, Mastercard, bank transfers, and Chavania Wallet. By providing payment details you represent that you are authorised to use the chosen payment method.",
          "Payment is due at the time of placing an order. Orders are only processed upon successful payment confirmation. Pending payments that are not resolved within 24 hours may result in automatic order cancellation.",
          "All payment data is encrypted and processed by our PCI-DSS compliant payment processors. Chavania does not store full card numbers or M-Pesa PINs.",
          "In the event of a failed payment or chargeback initiated without valid cause, Chavania may restrict your account and pursue recovery of funds including applicable fees.",
          "Currency conversion fees, where applicable, are the responsibility of the buyer and are determined by your bank or payment provider.",
        ],
      },
      {
        heading: "4. Delivery & Fulfilment",
        body: [
          "Delivery timelines stated in product listings are estimates provided by sellers and are not guaranteed. Actual delivery times may vary depending on location, logistics partner performance, and events outside Chavania's control.",
          "You are responsible for providing an accurate and accessible delivery address. Re-delivery costs resulting from an incorrect address, missed delivery, or failure to collect from a collection point are your responsibility.",
          "Risk of loss or damage to products transfers to you upon delivery to your specified address or collection point, unless otherwise required by applicable consumer protection laws.",
          "Chavania partners with third-party logistics providers. Once a parcel is handed to the logistics provider, Chavania's direct control over delivery ceases. Tracking information will be provided where available.",
          "For international orders, you are responsible for compliance with all import regulations and for payment of applicable customs duties, taxes, and import fees.",
        ],
      },
      {
        heading: "5. Returns, Refunds & Exchanges",
        body: [
          "You have the right to return eligible products within 7 days of delivery for a full refund, provided that: (a) the product is in its original, unused condition with all original packaging and accessories; (b) you initiate the return through the Chavania platform; (c) the product is not listed as a non-returnable item.",
          "Non-returnable items include: perishable goods, digital downloads once accessed, intimate apparel, customised or personalised products, hazardous materials, and products explicitly marked as 'Final Sale'.",
          "Defective, damaged, or incorrectly supplied products may be returned for a full refund or replacement regardless of the standard returns window. You must report such issues within 48 hours of delivery with supporting photo or video evidence.",
          "Refunds are processed within 7–14 business days of receipt and inspection of the returned item. Refunds are issued to the original payment method or Chavania Wallet at your election.",
          "Chavania's Buyer Protection programme covers purchases where the product does not arrive, arrives significantly different from the listing, or arrives damaged. Disputes must be raised within 7 days of the scheduled delivery date.",
          "Return shipping costs are borne by the buyer unless the return is due to a seller error, defect, or Chavania's fulfilment error, in which case Chavania will provide a prepaid return label.",
        ],
      },
      {
        heading: "6. Reviews & Ratings",
        body: [
          "Buyers are encouraged to leave honest, fair, and factual reviews and ratings for products and sellers after completing a purchase. Reviews must be based on your genuine experience.",
          "Reviews must not contain: defamatory content, hate speech, personal attacks on individuals, competitor advertising, irrelevant content, or confidential information.",
          "Chavania reserves the right to remove reviews that violate these guidelines without notice. Systematic attempts to manipulate ratings - including purchasing fake reviews - may result in account suspension.",
          "By submitting a review you grant Chavania a perpetual, royalty-free licence to publish, adapt, and use your review for marketing and platform improvement purposes.",
        ],
      },
      {
        heading: "7. Buyer Protection & Fraud Prevention",
        body: [
          "Chavania employs machine learning and manual review processes to detect fraudulent transactions. Suspicious orders may be placed on hold pending verification.",
          "You agree not to abuse the Buyer Protection programme by making false claims, filing spurious chargebacks, or conspiring with sellers to defraud Chavania.",
          "Abuse of buyer protection mechanisms will result in permanent account suspension and may be reported to relevant law enforcement agencies.",
          "Chavania is not liable for any loss arising from your voluntary disclosure of account information or payment credentials to third parties.",
        ],
      },
      {
        heading: "8. Wishlist & Saved Items",
        body: [
          "The wishlist feature is provided as a convenience tool. Adding items to your wishlist does not reserve stock or lock in prices. Prices and availability may change at any time.",
          "Wishlist data is linked to your account and will be deleted upon account termination.",
        ],
      },
    ],
  },

  /*  SELLER TERMS  */
  {
    id: "sellers",
    label: "Seller Terms",
    icon: "🏪",
    intro:
      "These Seller Terms govern your activities as a merchant on the Chavania platform. They apply in addition to the General Terms and take effect from the moment your seller account is activated. Selling on Chavania is a privilege that comes with significant responsibilities - please read these terms carefully.",
    sections: [
      {
        heading: "1. Seller Eligibility & Onboarding",
        body: [
          "To sell on Chavania you must: (a) be 18 years of age or older; (b) hold a valid business permit or proof of legitimate trading activity where required by applicable law; (c) provide accurate business information including your name, business name, physical address, and tax identification number; (d) complete Chavania's KYC (Know Your Customer) and KYB (Know Your Business) verification process.",
          "Certain product categories require additional licences, certifications, or pre-approval from Chavania before listings can be published (e.g., pharmaceuticals, electronics, food products, firearms, financial products). Selling restricted items without prior approval is grounds for immediate account termination.",
          "Chavania reserves the right to approve or reject seller applications at its sole discretion.",
        ],
      },
      {
        heading: "2. Listings & Product Standards",
        body: [
          "You are solely responsible for the accuracy, completeness, and legality of all product listings. Each listing must include: an accurate and descriptive title, correct pricing, honest description, clear and representative images, accurate variant information (size, colour, material), and correct category classification.",
          "Prohibited listings include: counterfeit or replica goods, stolen property, products that infringe third-party intellectual property rights, illegal weapons, narcotics, adult content without proper age-gate approval, human remains or trafficking-related items, and any product banned by Kenyan law or international trade treaties.",
          "All product images must be original or properly licenced. Stock images misrepresenting your actual product are prohibited.",
          "Prices must be accurately reflected and must not be artificially inflated to simulate discounts. Price gouging during emergencies or high-demand periods is strictly prohibited.",
          "Listings may not redirect buyers away from Chavania to complete transactions. All sales must be processed through the Chavania platform.",
        ],
      },
      {
        heading: "3. Inventory & Order Management",
        body: [
          "You are responsible for maintaining accurate stock levels. Accepting orders for out-of-stock items without prompt notification to the buyer is a policy violation.",
          "Orders must be confirmed and dispatched within your stated processing time (default: 2 business days). Consistent failure to meet processing timelines will negatively impact your seller rating and may result in listing suppression.",
          "You must update order statuses in the seller dashboard promptly - marking orders as shipped with valid tracking numbers where applicable.",
          "Order cancellations initiated by the seller without buyer consent count negatively against your seller performance score. Repeated cancellations may result in account suspension.",
        ],
      },
      {
        heading: "4. Pricing, Fees & Payouts",
        body: [
          "Chavania charges sellers a commission on each completed sale. Commission rates vary by product category and are published in the current Fee Schedule, which may be updated from time to time with 30 days' notice.",
          "Additional fees may apply for: premium listing placements, promotional tools, cross-border selling, payment processing, and returns handling.",
          "Payouts are made to your registered M-Pesa number or bank account on a rolling 7-day basis after buyer confirmation of receipt (or 14 days after dispatch if no dispute is raised). Payout timelines may be extended during active disputes or regulatory reviews.",
          "Chavania reserves the right to withhold payouts where fraud is suspected, a dispute is pending resolution, or your account has outstanding obligations.",
          "All payouts are subject to applicable withholding taxes. Sellers are solely responsible for declaring and remitting their own income taxes.",
        ],
      },
      {
        heading: "5. Fulfilment & Shipping",
        body: [
          "You must ship products using reliable, trackable shipping methods. Products must be adequately packaged to prevent damage during transit.",
          "If using Chavania Logistics (chavaniaExpress), you must adhere to the logistics partner's packing guidelines and drop-off schedules.",
          "You are liable for products lost or damaged in transit if you are responsible for packaging or choosing the logistics provider. Chavania's liability in this context is limited to acting as an intermediary facilitator.",
          "You must ship to all delivery zones you have enabled in your seller settings. Selectively refusing to ship to certain regions based on discriminatory criteria is prohibited.",
          "Declared product weights and dimensions must be accurate. Discrepancies discovered during logistics processing may result in additional charges billed to your seller account.",
        ],
      },
      {
        heading: "6. Returns & Refunds (Seller Obligations)",
        body: [
          "You must honour Chavania's platform-wide return policy as a minimum standard. You may offer more generous return terms but not more restrictive ones.",
          "When a return is approved, you must accept the returned item and issue the appropriate refund through the Chavania platform within 48 hours of receiving the returned item.",
          "Sellers who consistently receive high return rates due to product quality issues, inaccurate descriptions, or poor packaging will receive performance warnings and may face listing suppression.",
          "Fraudulent returns claimed by buyers will be investigated. Sellers may appeal return decisions within 72 hours of notification through the seller resolution centre.",
        ],
      },
      {
        heading: "7. Seller Performance Standards",
        body: [
          "Chavania maintains seller performance metrics including: order defect rate (target < 1%), late dispatch rate (target < 3%), cancellation rate (target < 2.5%), and response time to buyer messages (target < 24 hours).",
          "Sellers who consistently fall below performance thresholds will be placed on a Performance Improvement Plan (PIP). Failure to improve within the specified period may result in account suspension or termination.",
          "Sellers achieving consistently high performance scores are eligible for 'Chavania Verified Seller' status, which unlocks benefits including reduced commission rates, priority listing placement, and a verified badge.",
        ],
      },
      {
        heading: "8. Seller Communication & Customer Service",
        body: [
          "You must respond to buyer messages within 24 hours during business days. Unanswered messages or automated non-substantive responses count against your response rate metric.",
          "All communication with buyers must occur through the Chavania messaging platform. Sharing personal contact information (email, phone number, WhatsApp) to divert transactions off-platform is a serious violation.",
          "You must maintain a professional, respectful, and helpful tone in all buyer interactions. Harassment, threats, or discriminatory treatment of buyers will result in immediate account suspension.",
        ],
      },
      {
        heading: "9. Intellectual Property (Seller)",
        body: [
          "You represent and warrant that you have all necessary rights, licences, and permissions to sell the products you list on Chavania and to use any images, text, or media associated with those listings.",
          "If a third party asserts that your listing infringes their intellectual property rights, Chavania may remove the listing pending investigation. Repeated IP infringement will result in account termination.",
          "Chavania respects intellectual property rights and complies with applicable IP law. If you believe content on the platform infringes your rights, submit a notice to ip@chavania.com.",
        ],
      },
      {
        heading: "10. Tax Obligations",
        body: [
          "Sellers are independently responsible for determining, collecting, reporting, and remitting all applicable taxes on their sales, including VAT, income tax, and any other levies required by Kenyan law or the laws of any other jurisdiction where you sell.",
          "Chavania may collect and remit certain taxes on your behalf where required by law. In such cases, the collected amounts will be deducted from your payout.",
          "You must provide Chavania with accurate tax information as required for regulatory compliance. Providing false tax information is grounds for immediate termination and may be reported to the Kenya Revenue Authority.",
        ],
      },
    ],
  },

  /*  ADMINISTRATOR TERMS  */
  {
    id: "administrators",
    label: "Administrator Terms",
    icon: "⚙️",
    intro:
      "These Administrator Terms apply to all individuals granted administrative access to the Chavania platform, including internal Chavania staff, contracted moderators, partner integrators, and any person with elevated system privileges. Administrator access carries the highest level of responsibility and these terms must be strictly adhered to at all times.",
    sections: [
      {
        heading: "1. Definition & Scope of Administrative Access",
        body: [
          "For the purposes of these Terms, an 'Administrator' is any individual granted access to back-end systems, moderation dashboards, seller management tools, financial data, user data, or any other privileged system component of the Chavania platform.",
          "Administrative roles include but are not limited to: platform superadmin, financial administrator, content moderator, seller account manager, logistics coordinator, compliance officer, and technical support engineer.",
          "Administrative access is granted on a role-based, least-privilege basis. Each administrator is only permitted to access systems and data necessary for their specific role. Attempting to access systems outside your defined role is a serious breach of these Terms.",
        ],
      },
      {
        heading: "2. Confidentiality",
        body: [
          "Administrators are bound by strict confidentiality obligations. All data, systems, processes, business strategies, user information, seller data, and financial records encountered in the course of your duties are strictly confidential.",
          "You may not disclose confidential information to any third party without prior written authorisation from Chavania's Chief Executive Officer or Legal Counsel.",
          "Confidentiality obligations survive the termination of your administrative access for a period of 5 years, or indefinitely in the case of trade secrets.",
          "Where applicable, administrators must also sign a separate Non-Disclosure Agreement (NDA) as a condition of access.",
        ],
      },
      {
        heading: "3. Data Handling & Privacy",
        body: [
          "Administrators with access to user personal data must comply fully with the Kenya Data Protection Act 2019, Chavania's internal Data Handling Policy, and any other applicable data protection regulations.",
          "Personal data may only be accessed for legitimate, documented business purposes. Accessing user data out of curiosity, for personal use, or for any purpose not authorised by your role is prohibited.",
          "Administrators must never share user personal data - including names, email addresses, phone numbers, payment information, or order history - with unauthorised persons inside or outside the organisation.",
          "All data access is logged and subject to regular audits. Suspicious access patterns will trigger an immediate security review.",
          "In the event of a data breach or suspected breach you are aware of, you must report it to the Data Protection Officer (dpo@chavania.com) within 1 hour of becoming aware.",
        ],
      },
      {
        heading: "4. System Security",
        body: [
          "Administrators must use strong, unique passwords and multi-factor authentication (MFA) for all administrative accounts. Password sharing between administrators is strictly prohibited.",
          "Administrative access must not be exercised from unsecured, public, or shared networks without the use of Chavania's approved VPN.",
          "Administrator devices must have up-to-date operating systems, antivirus software, and full-disk encryption enabled.",
          "Administrators must lock or log out of administrative sessions whenever leaving their workstation.",
          "Any attempt to compromise platform security - including penetration testing without written authorisation - is prohibited and will result in immediate termination and potential criminal prosecution.",
        ],
      },
      {
        heading: "5. Moderation Responsibilities",
        body: [
          "Content moderators are responsible for reviewing and acting on reports of prohibited listings, user-generated content violations, counterfeit goods, and policy breaches in accordance with Chavania's Content Moderation Policy.",
          "Moderation decisions must be based on established platform policies, not personal bias. Discriminatory moderation based on race, gender, religion, nationality, or any other protected characteristic is prohibited.",
          "Where a moderation decision is unclear, the matter must be escalated to a senior moderator or the compliance team rather than making an arbitrary decision.",
          "Moderators must document all enforcement actions taken, including the reason for the action, the evidence reviewed, and the outcome, using the moderation management system.",
          "Moderators who receive credible threats from users must immediately report the matter to the security team and must not engage with the threatening party unilaterally.",
        ],
      },
      {
        heading: "6. Financial Administration",
        body: [
          "Financial administrators with access to payout systems, fund transfers, refund processing, and fee adjustments must operate strictly within their authorisation limits.",
          "All financial adjustments above defined thresholds require dual approval. No single administrator may unilaterally process high-value payments or refunds.",
          "Administrators may not use platform systems to process transactions for personal benefit, family members, friends, or any entity in which they hold a financial interest.",
          "All financial actions are subject to real-time fraud detection systems and retrospective audit. Any discrepancy must be reported immediately.",
          "Financial misconduct - including embezzlement, manipulation of payout systems, or falsification of financial records - will result in immediate termination, criminal prosecution, and civil recovery action.",
        ],
      },
      {
        heading: "7. Seller & Buyer Dispute Management",
        body: [
          "Administrators handling disputes must review all available evidence objectively before making a determination. Determinations must be consistent with Chavania's Dispute Resolution Policy.",
          "Administrators must not accept gifts, payments, or any other benefit from buyers or sellers in exchange for favourable dispute outcomes.",
          "Dispute decisions must be communicated to all parties clearly and in writing, with an explanation of the reasoning and any available appeal process.",
          "Complex or high-value disputes (above KES 50,000) must be escalated to the senior dispute resolution team for review.",
        ],
      },
      {
        heading: "8. Conflict of Interest",
        body: [
          "Administrators must disclose any actual or potential conflict of interest to their line manager and the compliance team before taking any action that could be affected by that conflict.",
          "Examples of conflicts of interest include: managing the account of a seller who is a family member, friend, or business partner; participating in a dispute where you have a financial interest in the outcome; or using your administrative access to benefit your own commercial interests.",
          "Where a conflict is disclosed, the administrator must recuse themselves from the relevant action and it must be handled by an impartial colleague.",
        ],
      },
      {
        heading: "9. Access Termination",
        body: [
          "Upon the termination of your administrative role - whether through resignation, contract end, or dismissal - all administrative access will be revoked immediately.",
          "You must return all Chavania devices, documents, and credentials and must not retain any copies of confidential information.",
          "Post-termination, you remain bound by confidentiality obligations, non-solicitation obligations (no soliciting Chavania staff or users for 12 months), and any non-compete provisions agreed in your employment or contractor agreement.",
          "Chavania reserves the right to pursue legal action for breach of post-termination obligations.",
        ],
      },
      {
        heading: "10. Training & Compliance",
        body: [
          "All administrators must complete Chavania's onboarding compliance training before being granted system access. Annual refresher training is mandatory.",
          "Administrators must stay current with updates to platform policies, data protection laws, and security protocols.",
          "Non-compliance with training requirements will result in suspension of administrative access until requirements are met.",
          "Chavania may conduct unannounced audits, simulated phishing exercises, and access log reviews at any time to ensure ongoing compliance.",
        ],
      },
    ],
  },
];
