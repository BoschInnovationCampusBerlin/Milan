# AI-Based Security Assessment Service
![Build](https://img.shields.io/badge/build-in--progress-green)
![Test](https://img.shields.io/badge/test-AI--assisted--evaluation-green) <br>
![Language](https://img.shields.io/badge/language-TypeScript-blue)
![LLM](https://img.shields.io/badge/LLM-ChatGPT_(OpenAI)-blue)
![Version](https://img.shields.io/badge/version-0.1.0-blue) <br>
![Docs](https://img.shields.io/badge/docs-Auto_Generated-blue)
![Commit Style](https://img.shields.io/badge/commit_style-Conventional_Commits-orange)
![Code Style](https://img.shields.io/badge/code_style-TypeScript_Standard-3178C6)

## Table of Contents
- [Intro](#intro)
- [Problem](#problem)
- [Solving](#solving)
- [Vision](#vision)
- [Competitor Comparison Table](#competitor-comparision-table)
- [Target Market](#target-market)
- [Workflow](#workflow)
- [UX Scenario](#ux-scenario)
- [UI Structure](#ui-structure)
- [Sample Conversational Prompts](#sample-conversational-prompts)
- [Business Model](#business-model)
- [Division of Roles](#division-of-roles)


## Intro
- As cyber threats rapidly increase, security requirements are tightening across industries.  
- Even early-stage startups are increasingly being asked by partners and clients to provide **`security certifications`**.

---

## Problem
1. **Low Security Capability (Startups & Non-IT Teams)**
    - Limited resources (Budget, Human resource)
    - Lack of security problem-framing and communication skills
    - No internal security response system

2. **Lack of Actionable Follow-ups**
    - AI or tools may identify risks, but companies don’t know what to do next.

3. **Limitations of Existing Services**
    - One-way risk reports → user churn (exit)
    - No continuous risk tracking → forgotten after one-time use
    - No interactive or conversational support

4. **Poor UX**
    - Existing interfaces are not user-friendly for non-developers or security non-specialists.

---

## Solving

### Definition

- A conversational AI-based security assessment and reporting service.
- Designed for both experts and non-experts.
- It's actionable, interactive, and continuously supportive.

### How it works

- Risk assessment  
- Action guide generation
- Report generation
- Ongoing support through chat updates

### Competitive Advantage

| Feature | Description |
| --- | --- |
| 🗣 Conversational AI Interface | Actively guides users, answers security questions, and draws insights together |
| 📄 Visualized Risk Reports | Instant download as PDF for certification or reporting use, with AI-powered graphs |
| 🧭 Action Plan Generation | Concrete, step-by-step response plan prioritized by severity |
| 📊 Risk History Tracking | Monitors risk scores and threat changes over time |
| ⏰ Smart Reminders | Monthly email nudges (e.g., “It’s been a month, want to reassess?”) |
| 👩‍💻 Non-technical UX | Designed so even teams with no security staff or budget can easily use it |

---

## Vision

```
To become the AI security co-pilot that helps any company.
 - Regardless of size or expertise.
 - To understand, manage, and act on cyber risks confidently.
```

---

## Competitor Comparison Table

| Features / Tool              | Team `Milan`          | Security Consulting | Static Analysis Tools (SAST) |
|-----------------------------|----------------------|---------------------|-------------------------------|
| Conversational AI Assessment | ✅                   | ❌                  | ❌                            |
| Automated PDF Reports       | ✅                   | Manual              | ❌                            |
| Action Plan Recommendations | ✅                   | Not standardized    | ❌                            |
| Visualized Results          | ✅ Graph + Report     | ❌                  | Some                          |
| Risk History Tracking       | ✅                   | ❌                  | ❌                            |
| UX Simplicity               | ✅ (Non-tech friendly)| ❌                  | ❌                            |
| Cost                        | 👍🏻                  | $$$ (Very high)     | Paid licenses                 |

---

## Target Market

- Startups with no in-house security expertise `Seed ~ Series B`
    - Facing compliance pressure from clients/partners
    - Preparing for ISO 27001, ISMS certifications
- Non-IT organizations
    - Have IT systems but no security staff
    - Cannot afford expensive consulting or audits

---

## Workflow

1. Input
    - User login / ID
    - Upload relevant files (architecture, policies, etc.)

2. Security Assessment
    - AI performs analysis and threat detection

3. Conversation AI Chat
    - Interactive Q&A
    - Custom advice based on input
    - Continuous back-and-forth until user is satisfied

4. Output
    - Downloadable report (PDF) containing:
        - Scope
        - Summary
        - Description
        - Threat-model.md
        - Risk-Assessment.md
        - Security-evaluation.md
        - Mapping
        - Recommendations

---

## UX Scenario

```
1. Sign Up / Log In

   ↓

2. Start Assessment
   - Select the system type
     (Web app, SaaS, internal system)
   - Upload files / answer basic questions

   ↓

3. Conversational AI Assistant
   - Ask user questions
   - Guide direction of assessment

   ↓

4. Automated Risk Analysis

   ↓

5. Results Display
   - Overall security score and key risk areas

   ↓

6. Action Plan Suggestions
   - AI-curated, prioritized recommendations based on risk levels

   ↓

7. Report Download (PDF)

   ↓

8. Risk History Dashboard / Reminder Setup
```

---

## UI Structure

```
1. Home / Dashboard
2. Conversational AI interface
3. Assessment Results
4. Risk History Page
```

---

## Sample Conversational Prompts

### Start of Diagnosis
```
AI:
Hi! Can you briefly describe the system you'd like to assess?

USER:
We run a SaaS platform for e-commerce clients.

AI:
Got it. Does it include features like login, payments, or storing personal data?

USER:
(Uploading all relevant files and explaining any necessary context.)
```

### During Risk Evaluation
```
AI:
Is multi-factor authentication enabled?

USER:
Only for admin accounts.

AI:
We recommend enabling MFA for user accounts as well
— especially given payment data is involved.
```

### Wrapping Up
```
AI:
The assessment is complete. We found 3 major risks.
Your security score is 68/100.
Would you like to download the full report?
You can now click the "Download Report" button to get your full assessment.
```

---

## Business Model

| Subscription | Price / month | Features                                                                 |
|--------------|----------------|--------------------------------------------------------------------------|
| Free         | 0 €            | 1-time assessment, Basic report                                          |
| Pro          | 30 €           | Unlimited assessments, Full report, Action plans, Risk history          |
| Enterprise   | Custom         | Multi-user support, Certification templates, API integration            |

---

## Division of Roles

| Name      | Role |
|-----------|---|
| Taekeun   | Project Management, UX |
| Hongbae   | Frontend, UI |
| Alicia    | Backend |
| Alejandro | Backend (AI) |
| Ankur     | Database security |