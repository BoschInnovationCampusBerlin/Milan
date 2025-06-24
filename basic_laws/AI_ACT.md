# AI Act

## 1. Executive Summary for Product Owners

**The Bottom Line:** The AI Act is the EU's comprehensive law to regulate Artificial Intelligence based on risk. If your product uses AI, you must determine where it falls on a four-tier risk pyramid. "Unacceptable" AI will be banned, "High-Risk" AI will face very strict obligations, and lower-risk AI will have lighter transparency rules. **This law is now final, but its rules will become mandatory in phases between late 2024 and mid-2027. Planning and classification must start now.**

## 2. What It Covers (The Details)

The AI Act takes a risk-based approach, classifying AI systems into four categories:

*   **1. Unacceptable Risk (Banned):** AI systems seen as a clear threat to people's rights (e.g., social scoring, real-time remote biometric identification in public spaces).
*   **2. High-Risk (Strictly Regulated):** AI systems that could significantly impact a person's life or safety (e.g., in medical devices, recruitment, credit scoring).
*   **3. Limited Risk (Transparency Obligations):** Systems where users must know they are interacting with an AI (e.g., chatbots, deepfakes).
*   **4. Minimal Risk (No Obligations):** The vast majority of AI systems (e.g., spam filters, recommendation engines).

## 3. Who Does It Apply To? (The Scope)

The Act applies to:
*   **Providers** who develop and place an AI system on the EU market.
*   **Users** (deployers) of AI systems located within the EU.
*   **Providers and users** located outside the EU, if the *output* of the system is used in the EU.

## 4. Key Obligations & Requirements for High-Risk AI

If your product is classified as "High-Risk," you face significant obligations:
*   **Data Governance:** High-quality, relevant training data, tested for biases.
*   **Technical Documentation:** Extensive documentation on how the system was built.
*   **Transparency:** Users must be able to understand and interpret the system's output.
*   **Human Oversight:** The system must be designed to be overseen by humans.
*   **Accuracy, Robustness, and Cybersecurity:** The system must be resilient and secure.
*   **Conformity Assessment:** You must prove compliance before placing the product on the market.

## 5. Key Compliance Deadlines (When It Must Be Followed)

The AI Act has a staggered application timeline, starting from its official entry into force (expected around mid-2024).

*   **By early 2025 (6 months after entry into force):**
    *   The **ban on "Unacceptable Risk" AI systems** becomes fully applicable.
*   **By mid-2025 (12 months after entry into force):**
    *   The rules for **General-Purpose AI (GPAI) models** become applicable.
*   **By mid-2026 (24 months after entry into force):**
    *   Most provisions of the AI Act will apply, including obligations for **High-Risk systems** that are part of products already regulated by other EU laws (e.g., medical devices, machinery).
*   **By mid-2027 (36 months after entry into force):**
    *   The obligations for **all other "High-Risk" AI systems** become fully applicable.

## 6. Actionable Questions for Your Team

*   **Classification:** "Based on our product's use case, where does our AI feature fall on the risk pyramid? Which compliance deadline applies to us?"
*   **Data Science:** "If we are high-risk, what is our plan to meet the data governance and bias testing requirements before our deadline?"
*   **Feature Design (UX/UI):** "How can we build 'human oversight' into this feature? Should there be an approval step? An 'off' switch?"
*   **Roadmap & Cost:** "What is the true cost of building this as a 'High-Risk' AI feature? We need to budget for documentation, conformity assessments, and longer development cycles, all timed to meet our deadline."
*   **Explainability:** "Can we explain *why* our AI made a particular decision? If not, we have a major roadblock for the transparency requirement."