# Product Liability Directive (85/374/EEC) - The Current Law in Force

## 1. Executive Summary for Product Owners

**The Bottom Line:** This is the product liability law that is **currently active and enforceable in the EU today**. It establishes "strict liability" (or "responsabilidad objetiva"), meaning a manufacturer can be held liable for damage caused by a defective product **even if they were not negligent or at fault**. While it was written for physical goods, courts have increasingly applied its principles to software, especially when it's integrated into hardware. A critical bug that causes physical harm can be considered a "defect" under this law.

## 2. What It Covers (The Core Concepts)

This directive harmonized product liability law across the EU. Its core concepts are:

*   **Product:** Originally defined as all movables (tangible items), even if incorporated into another movable or into an immovable. It also includes electricity.
    *   **Relevance for Software:** While "software" is not explicitly mentioned, legal interpretation has often included it, particularly when it is sold on a physical medium (like a CD-ROM in the past) or, more importantly, when it is **embedded in and essential for a physical product** (e.g., the software running a car's brakes, a medical device, or a smart thermostat).
*   **Producer:** The manufacturer of a finished product, the producer of any raw material, or the manufacturer of a component part. It also includes anyone who puts their name or trademark on the product (white-labeling) and any person who imports a product into the EU.
*   **Defect:** This is the most critical concept. A product is defective when it **does not provide the safety which a person is entitled to expect**, taking all circumstances into account, including:
    *   The presentation of the product (marketing, instructions).
    *   The use to which it could reasonably be expected that the product would be put.
    *   The time when the product was put into circulation.
*   **Damage:** The law primarily covers:
    *   Damage caused by death or by personal injuries.
    *   Damage to, or destruction of, any item of property **other than the defective product itself**, provided the item is of a type ordinarily intended for private use or consumption.
    *   **Important Limitation:** This directive generally does **not** cover pure economic loss or the loss of data itself. This is one of the key weaknesses the *new proposal* aims to fix.

## 3. Who Does It Apply To? (The Scope)

It applies to **producers and importers** who place a product on the market within the European Economic Area.

## 4. Key Principles & Obligations

*   **Strict Liability (No-Fault):** The injured person does not need to prove fault or negligence on the part of the producer. They only need to prove:
    1.  The damage occurred.
    2.  The product was defective.
    3.  A causal link between the defect and the damage.
*   **Defenses:** A producer can avoid liability if they can prove certain things, for example, that they did not put the product into circulation, or that the defect did not exist at the time it was put into circulation.

## 5. Actionable Questions for Your Team (Today's Risk)

*   **Safety Expectations:** "Based on our marketing and user manuals, what level of safety is a user 'entitled to expect' from our product?"
*   **Hardware Integration:** "If our software is embedded in a physical device (IoT, automotive, etc.), what is the worst-case physical harm a bug could cause?"
*   **Testing for Safety:** "Is our QA process only testing if the product *works*, or is it also testing for failure modes that could be *unsafe*?"
*   **Reasonable Use:** "Have we considered and tested for foreseeable misuse of our product that could lead to an unsafe condition?"
*   **Legal Review:** "Has our legal team reviewed our product from the perspective of the *current* 1985 directive, especially if it controls physical hardware?"