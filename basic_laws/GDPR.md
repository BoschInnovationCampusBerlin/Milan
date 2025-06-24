# GDPR (General Data Protection Regulation)

## 1. Executive Summary for Product Owners

**The Bottom Line:** If your product touches the personal data of anyone in the European Union, GDPR applies to you, regardless of where your company is based. It's not just a legal checkbox; it's a fundamental shift towards user privacy and data control. Non-compliance carries severe financial penalties (up to 4% of global annual turnover). As a PO, you must treat data privacy as a core feature, not an afterthought.

## 2. What It Covers (The Details)

GDPR governs how organizations collect, use, and store "personal data."

*   **Personal Data is Broadly Defined:** It's any information that can be used to identify a person, directly or indirectly. This includes name, email, address, IP address, location data, cookie identifiers, health information, and more.
*   **Core Principles:** The law is built on key principles you must adhere to:
    *   **Lawfulness, Fairness, and Transparency:** Be clear about what data you're collecting and why.
    *   **Purpose Limitation:** Only collect data for a specific, stated purpose.
    *   **Data Minimization:** Collect only the data you absolutely need.
    *   **Accuracy:** Keep data accurate and up-to-date.
    *   **Storage Limitation:** Don't keep data forever.
    *   **Integrity and Confidentiality:** You are responsible for securing the data (this is the security hook).
*   **User Rights are Paramount:** Users are granted enforceable rights, including:
    *   **Right to Access:** Users can ask for a copy of their data.
    *   **Right to Rectification:** Users can correct inaccurate data.
    *   **Right to Erasure (The Right to be Forgotten):** Users can request their data be deleted.
    *   **Right to Data Portability:** Users can ask for their data in a machine-readable format to move to another service.

## 3. Who Does It Apply To? (The Scope)

This regulation applies if:
*   Your organization processes the personal data of individuals residing in the EU, even if your company is located outside the EU.
*   You offer goods or services (even for free) to EU citizens.
*   You monitor the behavior of EU citizens (e.g., via analytics or tracking cookies on a website).

## 4. Key Obligations & Requirements

*   **Valid Consent:** Consent must be freely given, specific, informed, and unambiguous. No more pre-ticked boxes.
*   **Data Protection by Design & by Default:** You must build privacy and security into your products from the very beginning. This means making the most privacy-friendly options the default setting.
*   **Data Protection Impact Assessments (DPIA):** For high-risk data processing activities, you must formally assess the risks to user privacy.
*   **Breach Notification:** You must report a data breach to the supervisory authority within 72 hours of becoming aware of it.

## 5. Actionable Questions for Your Team

*   **Data Mapping:** "What specific pieces of personal data are we collecting for this feature? Do we have a complete inventory?"
*   **Justification:** "For each piece of data, why do we *need* it? Can we achieve the feature's goal with less data (Data Minimization)?"
*   **User Experience (UX):** "How does a user give consent in our UI? Is it clear and easy to understand? How can they withdraw it?"
*   **Feature Backlog:** "Do we have user stories in our backlog for 'view my data', 'export my data', and 'delete my data'? How will we implement and test these?"
*   **Security:** "If our database was breached right now, what is our exact 72-hour plan? Who makes the call? Who writes the notification?"