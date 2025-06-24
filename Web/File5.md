# Web Application Controls
{
  "controls": [
    {
      "description": "Requirements in this area define how (wildcard) certificates must be handled.",
      "title": "Certificate Handling",
    },
    {
      "description": "The requirements in this area define how public/private keys or tokens must be handled.",
      "title": "Cryptographic Key Management",
    },
    {
      "description": "Access to IT Systems, applications, and information must be secured by appropriate and mature authentication procedures. This applies likewise to users accessing IT Systems and IT System accessing other IT Systems.",
      "title": Authentication Methods",
      
    },
    {
      "description": "Technical and shared accounts are special types of accounts with a dedicated purpose. Their management and usage needs seperate requirements according to the special risks.",
      "title": "Management of User Identities",
    },
    {
      "description": "Authentication secrets, like passwords, PINs, and keys, are used to prove the identity of users and are an important line of defense to avoid unauthorized access.",
      "title": "Management of Authentication Secrets",
    },
    {
      "description": "Access from the Internet includes additional, very critical risks. These need to be mitigated by according measures.",
      "title": "Authentication for Access from the Internet",
    },
    {
      "description": "Upload and download functions must be implemented in a secure way.",
      "title": "Secure File Upload and Download",
    },
    {
      "description": "Coding must follow secure coding guidelines.",
      "title": "Secure Coding Guidelines",
    },
    {
      "description": "An important step in securing a web application is the appropriate use of HTTP. Configuration hardening measures can significantly improve the security posture of a web application.",
      "title": "Secure HTTP Configuration",
    },
    {
      "description": "The information system checks the validity of syntax and semantics of the supplied input data.",
      "title": "Information Input Validation",
    },
    {
      "description": "Static code analysis has to be conducted for the available uncompiled or unbuilt code in order to identify security vulnerabilities. The static code analysis must be performed by a party with expert knowledge of assessment. Findings must be fixed according to their prioritization.",
      "title": "Static Code Analysis",
    },
    {
      "description": "All IT Owners and developers of IT Systems must assist in handling of information or cybersecurity incidents for the IT Systems under their responsibility.",
      "title": "Incident Response",
    },
    {
      "description": "The organization must define a process to take into account lessons learned from the handling of cybersecurity incidents.",
      "title": "Lessons Learned from Cybersecurity Incidents",
    },
    {
      "description": "All IT Owners, Product-responsibles and Developers of IT Systems or Bosch Products must report information or cybersecurity incidents to .",
      "title": "Incident Reporting",
    },
    {
      "description": "Preparation is essential to handle information- and cybersecurity incidents. Based on the , this control focuses on the processes and activities which must be planned and integrated with contingency and continuity plans (supported by the IT Owner of the IT System).",
      "title": "Incident Preparation",
    },
    {
      "description": "Asset management is a prerequisite for several other security controls, e.g., security patch management, vulnerability management, and incident response.",
      "title": "Asset Management",
    },
    {
      "description": "A vulnerability scan must be performed on a regular basis and has the aim to identify remaining vulnerabilties and associated risks in the IT System taking already implemented mitigating measures such as separation into account. Findings must be assessed and treated.",
      "title": "Vulnerability Scanning",
    },
    {
      "description": "Validate the fulfillment of the cybersecurity requirements.",
      "title": "Technical Compliance Review",
    },
    {
      "description": "Penetration tests, or pentests, are authorized simulated attacks conducted by skilled security professionals to identify vulnerabilities in an organization\u0027s IT Systems, networks, IT applications, or products. Furthermore, pentests can also help to test cybersecurity controls, assess risks, validate compliance, and improve incident response.",
      "title": "Penetration Testing",
    },
    {
      "description": "Interactive access to the IT System must be terminated in case of user absence.",
      "title": "Session Termination",
    },
    {
      "description": "Segmentation must prevent unauthorised access to IT Systems within a segment by restricting allowed communication accordingly.",
      "title": "Network Segment Transistion",
    },
    {
      "description": "The communication between Bosch networks and external, and therefore potentially untrusted networks, must be secured on the application layer.",
      "title": "Protection of the Application Layer",
    },
    {
      "description": "Bosch networks must be segmented to minimize the possible attack surface and isolate attacks. The transition to external networks, like the Internet or partner networks, must be secured via the network perimeter.",
      "title": "Segregation in Networks",
    },
    {
      "description": "Network traffic must be protected against unauthorised access and modification during transport. In insecure network environments, suitable measures must be implemented to ensure the protection of network communication during transmission.",
      "title": "Traffic Flow Policy",
    },
    {
      "description": "This control describes the (Distributed) Denial of Service protection for internet facing network access points, services, and applications at the network perimeter.",
      "title": "Denial of Service Protection",
    },
    {
      "description": "Network infrastructure consists of network devices (IT Systems like router, switches, firewalls, etc.) and the interconnecting network circuits. Based on the network infrastructure, networks are implemented as logical communication domains. The network infrastructure is thus a centrally provided, shared IT System. In addition to the already defined requirements for the protection of IT Systems, further protective measures derived from the shared infrastructure are necessary.",
      "title": "Network Infrastructure Protection",
    },
    {
      "description": "Log data that records security-relevant events in IT systems (including cloud services) must be created, stored, protected and support an investigation for unusual behavior.",
      "title": "Security Event Logging",
    },
    {
      "description": "Security-relevant software updates are a foundation of secure IT operations.",
      "title": "Security Patch Management",
    },
    {
      "description": "This control focuses on general requirements regarding the management of technical vulnerabilities.",
      "title": "Vulnerability Management",
    },
    {
      "description": "The installation of software must follow processes to maintain control over installed software, and to prevent introducing new security vulnerabilities. Installation of software from unknown, untrusted sources is not allowed. The corresponding IT Owner is responsible for the secure operation of the software which was installed by him.",
      "title": "Software Installation",
    },
    {
      "description": "The field of cryptography has achieved solid maturity during the last decade, but it remains a field of active research. Care has been taken to identify a robust set of \u0022best-in-class\u0022-labelled cryptographic algorithms, key lengths, and protocol parameters which is expected to provide excellent assurance for the foreseeable future. However, the larger set of \u0022interoperability\u0022-labelled variants necessarily needs to trade interoperability aspects against security at least to some extent. For this reason, it is expected that the list of allowed \u0022interoperability\u0022-labelled variants will be further narrowed down in future releases of this document. Due to this fact, requirements in this area will be reviewed at least every 2 years.",
      "title": "Cryptographic Mechanisms: Algorithms, Key Lengths, and Protocols",
    }
  ],
  "count": 31
}