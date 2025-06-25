# PECD (ePrivacy Directive / "Cookie Law")

## 1. Executive Summary for Product Owners

**The Bottom Line:** The ePrivacy Directive is the specific law that governs tracking technologies like cookies, as well as the confidentiality of electronic communications. While GDPR covers personal data, ePrivacy covers the act of accessing or storing information on a user's device. If your product uses cookies, pixels, or any form of tracking, or involves communications (like a chat app), you need to comply with this. The core requirement is to get user consent *before* you place any non-essential cookies or trackers.

## 2. What It Covers (The Details)

The ePrivacy Directive is older than GDPR but works alongside it. It's more specific in certain areas. An upcoming ePrivacy *Regulation* is expected to update and strengthen these rules.

*   **Confidentiality of Communications:** It protects the privacy of communications content *and* its metadata (e.g., who you called, when, and for how long). Intercepting this without consent is prohibited.
*   **Terminal Equipment (The "Cookie Rule"):** This is the most famous part. You are not allowed to store or access information on a user's "terminal equipment" (computer, smartphone, etc.) without their prior, informed consent.
    *   This covers HTTP cookies, tracking pixels, device fingerprinting, and any other technology that reads or writes data to a user's device.
*   **Exception for "Strictly Necessary" Cookies:** Consent is not required for cookies that are essential for a service explicitly requested by the user (e.g., a session cookie to keep a user logged in or a cookie to remember items in a shopping cart). Analytics cookies are generally **not** considered strictly necessary.
*   **Unsolicited Communications (Spam):** It also contains rules against sending unsolicited electronic marketing messages (e.g., email, SMS) without prior consent.

## 3. Who Does It Apply To? (The Scope)

The directive applies to:
*   Providers of public electronic communications services in the EU.
*   Any entity (a website, an app, etc.) that stores or accesses information on the devices of users located in the EU.
*   It doesn't matter where your company is located. If you are setting a cookie on the browser of a user in France, this law applies.

## 4. Key Obligations & Requirements

*   **Obtain Prior Consent:** You must get clear, affirmative consent *before* any non-essential cookies or trackers are loaded. This is why you see cookie banners that require an "Accept" click before the site fully loads.
*   **Provide Clear Information:** You must tell users what the cookies are for, who is setting them, and how long they will last. This is typically done in a Cookie Policy.
*   **Make it Easy to Withdraw Consent:** Users must be able to change their minds as easily as they gave consent.

## 5. Actionable Questions for Your Team

*   **Cookie Audit:** "Can we run a full audit of every cookie and tracker our product/website sets? Who sets them (us or a third party)? What is their purpose?"
*   **Categorization:** "Which of these cookies are 'strictly necessary'? Which are for analytics, advertising, or functional enhancements? We need to be prepared to justify this."
*   **User Experience (UX):** "How is our cookie banner implemented? Does it block non-essential scripts until the user opts in? Is it easy for a user to reject all non-essential cookies?"
*   **Third-Party Tools:** "What trackers are embedded in the third-party scripts we use (e.g., analytics suites, customer support chats, social media widgets)? Are we in control of them?"
*   **Communications Features:** "If our product has a chat or messaging feature, how are we ensuring the confidentiality of those communications and their metadata?"