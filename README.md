# Milan - Security Assessment Platform

A comprehensive security assessment platform that enables automated analysis and generation of security reports for digital products and applications.

## 🚀 Tech Stack

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

## 📁 Project Structure

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

## 🔄 Application Workflow

### 1. File Upload & Processing
- Users upload project documentation (source code, configs, architecture files)
- Files are processed and analyzed for security characteristics
- System extracts tech stack information and identifies potential risks

### 2. Security Analysis
- Multi-agent system analyzes uploaded content
- Agents follow structured prompts defined in `PROMPTS.md`
- Analysis covers:
  - Technical vulnerabilities
  - Compliance requirements (GDPR, AI Act, NIS2, etc.)
  - Architecture security patterns
  - Best practice adherence

### 3. Report Generation
- Structured security reports generated following `REPORT_STRUCT.md` template
- Reports include:
  - Executive summary
  - Detailed findings
  - Compliance insights
  - Actionable recommendations
  - Follow-up actions

### 4. Interactive Review
- Generated reports displayed in the File Explorer
- Users can review, download, and interact with reports
- Chat interface provides AI-powered assistance for questions

## 🤖 Current AI Features

### Chat Interface
- AI-powered security assistant
- Context-aware responses based on selected reports
- Helps explain vulnerabilities and recommendations
- Provides guidance on security best practices

<<<<<<< HEAD
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
=======
<<<<<<< HEAD
### Automated Analysis
- Pattern recognition for common security issues
- Tech stack identification
- Risk assessment based on uploaded documentation
=======
## System Architecture
>>>>>>> c237a5f2

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
>>>>>>> 9218fbf7 (docs: update system architecture in README.md)

## 🎯 Future Feature: Azure Agent Integration (MVP)

### Overview
We will integrate Azure AI Agents to provide enhanced conversational AI capabilities, replacing the current simulated chat interface with a real Azure-powered agent.

### Implementation Plan

#### Phase 1: Basic Azure Agent Setup
```typescript
// New file: src/services/azureAgent.ts
import { AgentsClient } from "@azure/ai-agents";
import { DefaultAzureCredential } from "@azure/identity";

export class AzureAgentService {
  private client: AgentsClient;
  private agentId: string | null = null;
  private threadId: string | null = null;

  constructor() {
    const projectEndpoint = process.env.VITE_AZURE_PROJECT_ENDPOINT!;
    const credential = new DefaultAzureCredential();
    this.client = new AgentsClient(projectEndpoint, credential);
  }

  async initializeAgent() {
    // Create security assessment agent
    const agent = await this.client.createAgent("gpt-4o", {
      name: "Security Assessment Assistant",
      instructions: `You are a security assessment expert. Help users understand
      security reports, explain vulnerabilities, and provide actionable recommendations.
      Focus on practical, implementable security improvements.`
    });

    this.agentId = agent.id;
    return agent;
  }

  async createConversation() {
    const thread = await this.client.threads.create();
    this.threadId = thread.id;
    return thread;
  }

  async sendMessage(content: string): Promise<string> {
    if (!this.threadId || !this.agentId) {
      throw new Error("Agent or thread not initialized");
    }

    // Send user message
    await this.client.messages.create(this.threadId, "user", content);

    // Run agent and get response
    const run = await this.client.runs.createAndPoll(this.threadId, this.agentId);

    // Get the latest messages
    const messages = await this.client.messages.list(this.threadId, { order: "desc" });

    for await (const message of messages) {
      if (message.role === "assistant") {
        const textContent = message.content.find(item => item.type === "text");
        if (textContent && "text" in textContent) {
          return textContent.text.value;
        }
      }
    }

    return "I apologize, but I couldn't generate a response at this time.";
  }
}
```

#### Phase 2: Enhanced ChatInterface Component
```typescript
// Updated: src/components/ChatInterface.tsx
import React, { useState, useEffect } from 'react';
import { AzureAgentService } from '@/services/azureAgent';

const ChatInterface: React.FC<ChatInterfaceProps> = ({ selectedFile }) => {
  const [azureAgent, setAzureAgent] = useState<AzureAgentService | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeAzureAgent = async () => {
      try {
        const agent = new AzureAgentService();
        await agent.initializeAgent();
        await agent.createConversation();
        setAzureAgent(agent);
        setIsInitialized(true);
      } catch (error) {
        console.error('Failed to initialize Azure Agent:', error);
        // Fallback to simulated responses
      }
    };

    initializeAzureAgent();
  }, []);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      let response: string;

      if (azureAgent && isInitialized) {
        // Use Azure Agent
        response = await azureAgent.sendMessage(inputValue);
      } else {
        // Fallback to simulated response
        response = getBotResponse(inputValue, selectedFile);
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      // Show error message to user
    } finally {
      setIsTyping(false);
    }
  };

  // ...existing render logic
};
```

#### Phase 3: Environment Configuration
```env
# .env file (to be created)
VITE_AZURE_PROJECT_ENDPOINT=https://your-project.azure.com
VITE_AZURE_CLIENT_ID=your-client-id
VITE_AZURE_CLIENT_SECRET=your-client-secret
VITE_AZURE_TENANT_ID=your-tenant-id
```

#### Phase 4: Context-Aware Responses
```typescript
// Enhanced agent with file context
async sendMessageWithContext(content: string, fileContext?: string): Promise<string> {
  let contextualMessage = content;

  if (fileContext) {
    contextualMessage = `
    Context: User is viewing a security report with the following content:
    ${fileContext.substring(0, 1000)}...

    User question: ${content}

    Please provide a response that takes into account the specific security report context.
    `;
  }

  return this.sendMessage(contextualMessage);
}
```

### MVP Features

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

### Implementation Timeline

- **Week 1**: Azure Agent service setup and basic chat functionality
- **Week 2**: Context integration with selected files
- **Week 3**: Error handling, fallback mechanisms, and testing
- **Week 4**: Polish, documentation, and deployment preparation

### Required Dependencies
```bash
npm install @azure/ai-agents @azure/identity
```

### Benefits of Azure Agent Integration

1. **Enhanced Intelligence**: Real AI responses instead of simulated ones
2. **Consistency**: Standardized AI behavior across the platform
3. **Scalability**: Leverage Azure's robust infrastructure
4. **Security**: Enterprise-grade security and compliance
5. **Customization**: Ability to fine-tune agent behavior for security domain

## 🛠️ Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Milan/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   ```
   http://localhost:8080
   ```

## 🔒 Security Considerations

- All uploaded files are processed locally
- No sensitive data is transmitted to external services without explicit user consent
- Azure integration follows enterprise security best practices
- Environment variables used for sensitive configuration

## 📚 Documentation References

- **EU Compliance**: See `basic_laws/` directory for detailed regulation information
- **Security Standards**: NIST frameworks and security guidelines included
- **Azure AI Integration**: Complete implementation guide in `azure-agent-implementation-guide.md`

## 🤝 Contributing

1. Follow the existing code structure and TypeScript patterns
2. Ensure all new components follow the shadcn/ui design system
3. Add appropriate error handling and loading states
4. Test Azure integrations with proper fallback mechanisms

## 📄 License

This project is developed for security assessment and compliance purposes. Please ensure appropriate usage rights for all included documentation and frameworks.
