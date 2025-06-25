# 🛡️ [Company/Product Name] – Security Assessment Report (Template)

## 1. Executive Summary
_Provide a concise overview of the assessment, key findings, and overall security posture. Mention frameworks used (e.g., NIST, OWASP)._ 

---

## 2. Scope
_List the systems, components, and environments included and excluded from this assessment._
- Included:
  - [e.g., Web application, APIs, Cloud infrastructure]
- Excluded:
  - [e.g., Internal HR systems, Non-production environments]

---

## 3. System Description
_Describe the architecture and main components. Use a table if helpful._

| Component      | Description                                  |
|---------------|----------------------------------------------|
| [Web App]     | [e.g., React frontend, interacts with APIs]   |
| [API Gateway] | [e.g., Exposes REST endpoints]                |
| [Auth Service]| [e.g., Identity provider, RBAC]               |
| ...           | ...                                          |

---

## 4. Threat Model
_Identify threats using a framework (e.g., STRIDE). List threats, affected components, and mitigations._

| Category   | Example Threat           | Affected Component | Mitigation                  |
|------------|-------------------------|--------------------|-----------------------------|
| Spoofing   | [e.g., Fake webhooks]   | [API Gateway]      | [HMAC signature validation] |
| Tampering  | [e.g., Param injection] | [Backend APIs]     | [Input validation, WAF]     |
| ...        | ...                     | ...                | ...                         |

---

## 5. Risk Assessment
_List and rate risks by likelihood, impact, and status._

| # | Risk Description                | Likelihood | Impact | Level     | Status           |
|---|---------------------------------|------------|--------|-----------|------------------|
| 1 | [e.g., Public S3 bucket access] | High       | High   | Critical  | Open             |
| 2 | [e.g., Missing MFA for admin]   | High       | High   | Critical  | Planned          |
| ... | ...                           | ...        | ...    | ...       | ...              |

---

## 6. Security Evaluation
_Evaluate key security domains. Use status icons and comments._

| Domain                | Status                | Comments                                 |
|-----------------------|-----------------------|------------------------------------------|
| IAM                   | [✅/⚠️/❌]            | [e.g., RBAC in place, MFA pending]       |
| Data Protection       | [✅/⚠️/❌]            | [e.g., AES-256, S3 policy audit needed]  |
| Logging & Monitoring  | [✅/⚠️/❌]            | [e.g., Lacks log centralization]         |
| ...                   | ...                   | ...                                      |

---

## 7. Compliance Mapping
_Map controls to frameworks (NIST, SOC 2, PCI DSS, ISO 27001, etc.)._

| Control Area         | Maturity | Notes                                 |
|---------------------|----------|---------------------------------------|
| NIST 800-53 (MOD)   | [e.g., 80%] | [e.g., Logging, IAM gaps]           |
| SOC 2 (Security)    | [e.g., 75%] | [e.g., Partial log coverage]        |
| PCI DSS (Subset)    | [e.g., 70%] | [e.g., S3 access, MFA gaps]         |
| ISO 27001           | [e.g., 60%] | [e.g., Policy automation pending]   |

---

## 8. Recommendations
_Provide prioritized, actionable recommendations. Group by short-term, mid-term, long-term._

### 🔒 Short-Term (Next 2 Weeks)
- [e.g., Block public S3 access (Critical)]
- [e.g., Enforce MFA for admin accounts]

### 🔁 Mid-Term (30-60 Days)
- [e.g., Centralize logs, conduct IR drill]

### 📘 Long-Term (Quarterly Goals)
- [e.g., Full ISO 27001 alignment, Zero Trust]

---

## 9. Task List (Actionable Gaps)
_See SECURITY_TASKS.md for a structured, updatable task list._

---

## 10. Review and Sign-Off
| Reviewer         | Role               | Date         |
|------------------|--------------------|--------------|
| [Name]           | [e.g., Product Owner] | [YYYY-MM-DD]|
| ...              | ...                | ...          |

---

## Appendix
- System Description
- Threat Model
- Risk Register
- Security Evaluation
- Compliance Checklist (optional) 