# Milan - AI-Based Security Assessment Service
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
- [Solution](#solution)
- [Vision](#vision)
- [Competitor Comparison Table](#competitor-comparison-table)
- [Target Market](#target-market)
- [System Architecture](#system-architecture)
- [UX Scenario](#ux-scenario)
- [UI Structure](#ui-structure)
- [Sample Conversational Prompts](#sample-conversational-prompts)
- [Business Model](#business-model)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [MVP Features](#mvp-features)
- [Division of Roles](#division-of-roles)

## Intro
- As cyber threats rapidly increase, security requirements are tightening across industries.  
- Even early-stage startups are increasingly being asked by partners and clients to provide **`security certifications`**.
- A comprehensive security assessment platform that enables automated analysis<br>
  and generation of security reports for digital products and applications.

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

## Solution

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

## Scalability and Applicability

### Scalability

- **Modular AI Architecture:** Easily extendable with new features or AI models without disrupting the existing system.
- **Adaptive Conversational Workflows:** Dynamically handles increasing complexity and diverse project requirements.
- **Efficient Data Management:** Utilizes structured knowledge files and vector search for fast, context-aware responses.
- **Cloud Integration:** Built on scalable Azure services to support growing numbers of users and expanding data loads.

### Applicability

- **Customizable Task Flows:** Tailors assessments to various system types, including SaaS, internal applications, and IoT devices.
- **Flexible Report Templates:** Supports multiple security standards and certifications for broad compliance needs.
- **User-Adaptive Interface:** Designed to serve both technical experts and non-technical users effectively.
- **Continuous Risk Tracking:** Enables ongoing security monitoring and compliance updates for sustained protection.

### Dynamic Context Updating

- Continuously updates its understanding with the latest:
  - Company-specific details and project changes
  - Relevant external regulations and compliance standards
  - Industry best practices and evolving threat landscapes

- Enables flexible, personalized, and up-to-date assessments and recommendations.

---

This design ensures the platform can scale smoothly while remaining highly adaptable to a wide range of security assessment needs.

## Agentic AI Implementation
- **Autonomy and Goal Orientation**
  The AI independently drives the assessment process—from initiating security scans and asking targeted questions to generating prioritized action plans—without requiring continuous human input.
- **Adaptability and Learning**
  By maintaining and continuously updating conversation context—including company details, project info, relevant regulations, and best practices—and incorporating user feedback, the AI refines its recommendations and adapts to diverse security scenarios.
- **Complex Problem Solving**
  The system breaks down multi-layered security challenges into manageable tasks, performs dynamic risk analysis, and synthesizes comprehensive reports with actionable steps, going beyond simple rule-based checks.
- **Contextual Understanding and Proactivity**
  Our AI tracks risk histories, recognizes changes over time, anticipates potential threats, and proactively reminds users to reassess or update their security posture regularly.
- **Interaction Skills**
  Through a conversational interface, the AI communicates clearly and effectively, guiding both technical and non-technical users, facilitating knowledge transfer, and providing continuous support tailored to the user’s expertise.

---

## System Architecture

```
[ User ]
   │
   ├── 1. Chat input (questions, document requests, etc.)
   └── 2. File upload (.md, .docx, etc. security documents)

   ↓

[ UI (Frontend) ]
   │
   ├── 1. Chat Interface
   ├── 2. File Upload
   └── 3. File system <Local Storage>

   ↓

[ AI Agent (Backend) ]

 ┌─────────────────────────────────────────────┐
 │               Orchestration Layer           │
 -----------------------------------------------
 │  ├─ Instruction (.md file)                  │
 │  │                                          │
 │  ├─ Memory (conversation context, user info)│
 │  │                                          │
 │  ├─ DB (.md format for cyber security)      │
 │  │  ├─ Knowledge Files                      │
 │  │  ├─ Task Files                           │
 │  │  └─ Output Template                      │
 │  │                                          │
 │  └─ Model Board (Azure AI)                  │
 │     ├─ 1. Search Stack                      │
 │     │     ├─ Azure Cognitive Search         │
 │     │     │   └─ Vector search (Embedding)  │
 │     │     └─ Foundary                       │ 
 │     │         ├─ Semantic Search            │
 │     │         └─ Knowledge Injection        │
 │     │                                       │
 │     └─ 2. LLM                               │
 │           └─ GPT-4.1 (Azure OpenAI)         │
 └─────────────────────────────────────────────┘

                      ↓

 ┌─────────────────────────────────────────────┐
 │                  Tool Layer                 │
 -----------------------------------------------
 │  ├─ File Parser (PDF/DOCX to text)          │
 │  └─ PDF Generator (Markdown → PDF)          │
 └─────────────────────────────────────────────┘

   ↓

[ Document Generation Engine ]
   └─ Template-based `.md` → Final PDF output
    └─ Contents
      └─ Scope
      └─ Summary
      └─ Description
      └─ Threat Model
      └─ Risk Assessment
      └─ Security evaluation
      └─ Recommendations
      └─ Etc.

   ↓

[ UI (Frontend) ]
   │
   ├── 1. PDF Output display on chat
   └── 2. Option: Download file


```

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

## Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components built on Radix UI
- **React Router DOM** - Client-side routing
- **TanStack Query** - Data fetching and state management
- **React Hook Form** - Form state management with validation
- **Zod** - Schema validation
- **Lucide React** - Beautiful icons
- **Recharts** - Data visualization components

### Azure Integration (Available)
- **@azure/ai-language-text** - Text analytics and language understanding
- **@azure/identity** - Azure authentication
- **@azure/openai** - Azure OpenAI service integration

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **Component Tagger** - Development component identification

---

## Project Structure
```
Milan/
├── frontend/                          # React frontend application
│   ├── src/
│   │   ├── components/                # Reusable UI components
│   │   │   ├── ChatInterface.tsx      # AI chat interface
│   │   │   ├── FileExplorer.tsx       # Document viewer/explorer
│   │   │   ├── FileUpload.tsx         # File upload functionality
│   │   │   ├── OutputList.tsx         # Report listing component
│   │   │   └── ui/                    # shadcn/ui components
│   │   ├── pages/                     # Application pages
│   │   ├── hooks/                     # Custom React hooks
│   │   └── lib/                       # Utility functions
│   ├── azure-agent-implementation-guide.md # Azure Agent documentation
│   └── package.json                   # Dependencies and scripts
├── basic_laws/                        # EU compliance documentation
│   ├── AI_ACT.md                      # EU AI Act
│   ├── GDPR.md                        # General Data Protection Regulation
│   ├── NIS2.md                        # Network and Information Security
│   └── ...                           # Other compliance frameworks
├── Web/                               # Web security documentation
│   └── SecurityAssessment.md          # Sample security assessment
├── PROMPTS.md                         # AI agent prompts and instructions
└── REPORT_STRUCT.md                   # Security report template structure
```

---

## MVP Features

1. **Real-time Azure AI Chat**
   - Direct integration with Azure OpenAI models
   - Persistent conversation threads
   - Context-aware responses

2. **Security-Focused AI Assistant**
   - Specialized in security assessment topics
   - Understands security report formats
   - Provides actionable recommendations

3. **Seamless Fallback**
   - Graceful degradation to simulated responses if Azure services are unavailable
   - Error handling and user feedback

4. **Document Context Integration**
   - Agent can reference currently viewed security reports
   - Provides specific insights based on selected documents

---

## Division of Roles

| Name      | Role |
|-----------|---|
| Taekeun   | Project Management, UX |
| Hongbae   | Frontend, UI |
| Alicia    | Backend |
| Alejandro | Backend (AI) |
| Ankur     | Database security |