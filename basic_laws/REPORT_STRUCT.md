# Security Assessment Report

## 1. Summary
- Project: CoolApp
- Stack: Node.js, MongoDB, JWT
- Scope: Public API + Auth

## 2. Findings
- ❌ No server-side input validation
- ❌ JWT tokens use `none` algorithm
- ✅ HTTPS enforced

## 3. Compliance Insights
- GDPR likely applies (personal data)
- ePrivacy Directive applies (cookies used)

## 4. Recommendations
- Replace JWT `none` with RS256
- Add rate limiting to public endpoints
- Implement server-side validation

## 5. Follow-Up Actions
- Schedule external pen test pre-launch
- Perform DPIA (Data Protection Impact Assessment)
- Add Terms & Privacy Policy to product site