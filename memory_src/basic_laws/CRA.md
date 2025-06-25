# CRA (Cyber Resilience Act)

## 1. Executive Summary for Product Owners

**The Bottom Line:** The CRA makes manufacturers responsible for the security of their "products with digital elements" throughout their entire lifecycle. Think of it as "security by design and by default" becoming law. You will be required to build secure products, provide security updates for a reasonable period, and be transparent about vulnerabilities. This directly impacts your development roadmap, support policies, and communication strategies.

## 2. What It Covers (The Details)

The CRA aims to ensure that hardware and software products are more secure from the moment they are placed on the market.

*   **Secure by Design:** Manufacturers must design, develop, and produce products in line with essential cybersecurity requirements. This includes delivering products with a secure default configuration.
*   **Vulnerability Handling Obligation:** This is a major shift. Manufacturers must have a structured process to handle vulnerabilities effectively *after* the product is sold.
    *   You must report actively exploited vulnerabilities to ENISA (the EU Agency for Cybersecurity) within 24 hours.
    *   You must provide security updates to users in a timely manner, free of charge.
*   **Transparency:** Manufacturers must provide clear and understandable security information to users. This includes:
    *   A **Software Bill of Materials (SBOM)**, which is a list of all software components in your product.
    *   The period during which users can expect to receive security updates (the "support period").
*   **CE Marking:** Products compliant with the CRA will carry a CE mark, indicating they are fit for sale in the EU market.

## 3. Who Does It Apply To? (The Scope)

The CRA applies to all "products with digital elements" made available on the EU market. This is incredibly broad.

*   **What is a "product with digital elements"?** Any software or hardware product and its remote data processing solutions that are connected, directly or indirectly, to another device or network.
*   **Examples:**
    *   Software: Operating systems, mobile apps, desktop applications, video games.
    *   Hardware: Smart speakers, connected thermostats (IoT), routers, smart TVs.
*   **Exclusions:** Some specific areas already covered by other laws (like medical devices or automotive) may be exempt. Open-source software developed on a non-commercial basis is also generally excluded.

## 4. Key Obligations & Requirements

*   **Security Risk Assessment:** You must conduct and document a cybersecurity risk assessment for your product.
*   **Provide an SBOM:** Be prepared to generate and provide a list of all your software dependencies.
*   **Define a Support Lifecycle:** You must decide and communicate how long you will provide security patches (e.g., 5 years from date of purchase).
*   **Establish a Vulnerability Disclosure Policy (VDP):** Create a clear, public channel for security researchers to report vulnerabilities to you.
*   **Fast Reporting:** Build a process to quickly identify and report exploited vulnerabilities to authorities.

## 5. Actionable Questions for Your Team

*   **Lifecycle Planning:** "For this product, what is a reasonable support period for security updates? How does this align with our business model?"
*   **Dependencies (SBOM):** "What tool are we using to generate an SBOM? Do we have a process to regularly review our dependencies for known vulnerabilities?"
*   **Roadmap:** "Have we allocated engineering time in future sprints for patching vulnerabilities found after release? This is no longer optional."
*   **Security Team:** "What is our process for receiving a vulnerability report? Who triages it? How do we meet the 24-hour reporting deadline for serious exploits?"
*   **Documentation:** "Where in our user documentation will we state the security support period and provide our security contact information?"    