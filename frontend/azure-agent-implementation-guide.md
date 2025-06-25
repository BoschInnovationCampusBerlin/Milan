# Azure Agent Implementation Guide using Azure SDK for JavaScript

## Overview

This guide provides a comprehensive walkthrough for implementing Azure agents using the Azure SDK for JavaScript. Azure agents are AI-powered assistants that can be integrated with various tools and capabilities to process user requests, access data, and perform complex tasks.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Setup and Installation](#setup-and-installation)
3. [Authentication Setup](#authentication-setup)
4. [Basic Agent Implementation](#basic-agent-implementation)
5. [Advanced Agent Features](#advanced-agent-features)
6. [Tool Integration](#tool-integration)
7. [Message Handling and Conversations](#message-handling-and-conversations)
8. [Best Practices](#best-practices)
9. [Troubleshooting](#troubleshooting)

## Prerequisites

Before starting, ensure you have:

- **Node.js** (version 14.x or later)
- **npm** or **yarn** package manager
- **Azure subscription** with appropriate permissions
- **Azure AI Projects workspace** or **Azure OpenAI resource**
- **Service Principal** for authentication (recommended for production)

## Setup and Installation

### 1. Install Required Packages

```bash
# Install Azure AI Agents and Identity packages
npm install @azure/ai-agents @azure/identity

# Optional: Install additional Azure SDK packages as needed
npm install @azure/ai-projects
```

### 2. Project Structure

Create a basic project structure:

```
azure-agent-project/
├── src/
│   ├── agents/
│   │   ├── agent-factory.ts
│   │   └── tools/
│   ├── auth/
│   │   └── credentials.ts
│   ├── utils/
│   └── index.ts
├── data/
├── .env
├── package.json
└── README.md
```

## Authentication Setup

### 1. Service Principal Authentication (Recommended)

#### Create Service Principal

```powershell
# Create a new Azure AD service principal
az ad sp create-for-rbac -n <your-application-name> --skip-assignment
```

This will return:
```json
{
  "appId": "generated-app-ID",
  "displayName": "dummy-app-name",
  "name": "http://dummy-app-name",
  "password": "random-password",
  "tenant": "tenant-ID"
}
```

#### Set Environment Variables

Create a `.env` file in your project root:

```bash
# Azure Authentication
AZURE_CLIENT_ID=<appId>
AZURE_CLIENT_SECRET=<password>
AZURE_TENANT_ID=<tenant>

# Azure AI Projects
PROJECT_ENDPOINT=<your-project-endpoint>
MODEL_DEPLOYMENT_NAME=gpt-4o

# Optional: Azure AI Search
AZURE_AI_SEARCH_CONNECTION_NAME=<connection-name>

# Optional: Bing Search
AZURE_BING_CONNECTION_ID=<connection-name>

# Optional: Fabric
FABRIC_CONNECTION_ID=<connection-name>
```

### 2. Authentication Implementation

```typescript
// src/auth/credentials.ts
import { DefaultAzureCredential, ClientSecretCredential } from "@azure/identity";

export function getCredentials() {
  // For production, use service principal
  if (process.env.AZURE_CLIENT_ID && process.env.AZURE_CLIENT_SECRET && process.env.AZURE_TENANT_ID) {
    return new ClientSecretCredential(
      process.env.AZURE_TENANT_ID,
      process.env.AZURE_CLIENT_ID,
      process.env.AZURE_CLIENT_SECRET
    );
  }

  // For development, use DefaultAzureCredential
  return new DefaultAzureCredential();
}
```

## Basic Agent Implementation

### 1. Initialize the Agents Client

```typescript
// src/index.ts
import { AgentsClient } from "@azure/ai-agents";
import { getCredentials } from "./auth/credentials";

const projectEndpoint = process.env.PROJECT_ENDPOINT || "<project endpoint>";
const modelDeploymentName = process.env.MODEL_DEPLOYMENT_NAME || "gpt-4o";
const credential = getCredentials();

const client = new AgentsClient(projectEndpoint, credential);
```

### 2. Create a Basic Agent

```typescript
// src/agents/agent-factory.ts
import { AgentsClient } from "@azure/ai-agents";

export class AgentFactory {
  constructor(private client: AgentsClient) {}

  async createBasicAgent() {
    const agent = await this.client.createAgent("gpt-4o", {
      name: "my-assistant",
      instructions: "You are a helpful assistant that can answer questions and help with various tasks."
    });

    console.log(`Created agent with ID: ${agent.id}`);
    return agent;
  }
}
```

### 3. Create and Manage Conversations

```typescript
// src/agents/conversation-manager.ts
import { AgentsClient } from "@azure/ai-agents";

export class ConversationManager {
  constructor(private client: AgentsClient) {}

  async createThread() {
    const thread = await this.client.threads.create();
    console.log(`Created thread with ID: ${thread.id}`);
    return thread;
  }

  async sendMessage(threadId: string, content: string) {
    const message = await this.client.messages.create(threadId, "user", content);
    console.log(`Created message with ID: ${message.id}`);
    return message;
  }

  async runAgent(threadId: string, agentId: string) {
    const run = await this.client.runs.createAndPoll(threadId, agentId, {
      pollingOptions: {
        intervalInMs: 2000,
      },
      onResponse: (response) => {
        console.log(`Run status: ${response.parsedBody.status}`);
      },
    });

    console.log(`Run completed with status: ${run.status}`);
    return run;
  }

  async getMessages(threadId: string) {
    const messages = await this.client.messages.list(threadId, {
      order: "asc"
    });

    const messageList = [];
    for await (const message of messages) {
      const textContent = message.content.find((item) => item.type === "text");
      if (textContent && "text" in textContent) {
        messageList.push({
          role: message.role,
          content: textContent.text.value
        });
      }
    }

    return messageList;
  }
}
```

## Advanced Agent Features

### 1. Streaming Responses

```typescript
// src/agents/streaming-agent.ts
import { AgentsClient, RunStreamEvent, MessageStreamEvent, ErrorEvent, DoneEvent } from "@azure/ai-agents";

export class StreamingAgent {
  constructor(private client: AgentsClient) {}

  async runAgentWithStreaming(threadId: string, agentId: string) {
    const streamEventMessages = await this.client.runs.create(threadId, agentId).stream();

    for await (const eventMessage of streamEventMessages) {
      switch (eventMessage.event) {
        case RunStreamEvent.ThreadRunCreated:
          console.log(`ThreadRun status: ${eventMessage.data.status}`);
          break;

        case MessageStreamEvent.ThreadMessageDelta:
          const messageDelta = eventMessage.data;
          messageDelta.delta.content.forEach((contentPart) => {
            if (contentPart.type === "text") {
              const textContent = contentPart;
              const textValue = textContent.text?.value || "No text";
              console.log(`Text delta: ${textValue}`);
            }
          });
          break;

        case RunStreamEvent.ThreadRunCompleted:
          console.log("Thread Run Completed");
          break;

        case ErrorEvent.Error:
          console.log(`Error occurred: ${eventMessage.data}`);
          break;

        case DoneEvent.Done:
          console.log("Stream completed.");
          break;
      }
    }
  }
}
```

### 2. Image Processing

```typescript
// src/agents/image-processor.ts
import { AgentsClient } from "@azure/ai-agents";
import fs from "fs";

export class ImageProcessor {
  constructor(private client: AgentsClient) {}

  private imageToBase64DataUrl(imagePath: string, mimeType: string): string {
    try {
      const imageBuffer = fs.readFileSync(imagePath);
      const base64Data = imageBuffer.toString("base64");
      return `data:${mimeType};base64,${base64Data}`;
    } catch (error) {
      console.error(`Error reading image file: ${error}`);
      throw error;
    }
  }

  async sendImageMessage(threadId: string, imagePath: string, prompt: string) {
    const imageDataUrl = this.imageToBase64DataUrl(imagePath, "image/png");

    const content = [
      {
        type: "text",
        text: prompt,
      },
      {
        type: "image_url",
        image_url: {
          url: imageDataUrl,
          detail: "high",
        },
      },
    ];

    const message = await this.client.messages.create(threadId, "user", content);
    console.log(`Created message with image content, ID: ${message.id}`);
    return message;
  }
}
```

## Tool Integration

### 1. Function Tools

```typescript
// src/agents/tools/function-tools.ts
import {
  FunctionToolDefinition,
  ToolUtility,
  RequiredToolCall,
  ToolOutput,
  AgentsClient
} from "@azure/ai-agents";

export class FunctionToolExecutor {
  private functionTools: {
    func: Function;
    definition: FunctionToolDefinition;
  }[];

  constructor() {
    this.functionTools = [
      {
        func: this.getUserFavoriteCity,
        ...ToolUtility.createFunctionTool({
          name: "getUserFavoriteCity",
          description: "Gets the user's favorite city.",
          parameters: {},
        }),
      },
      {
        func: this.getWeather,
        ...ToolUtility.createFunctionTool({
          name: "getWeather",
          description: "Gets the weather for a location.",
          parameters: {
            type: "object",
            properties: {
              location: { type: "string", description: "The city and state, e.g. Seattle, WA" },
              unit: { type: "string", enum: ["c", "f"] },
            },
          },
        }),
      },
    ];
  }

  private getUserFavoriteCity(): {} {
    return { location: "Seattle, WA" };
  }

  private getWeather(_location: string, unit: string): {} {
    return { weather: unit === "f" ? "72f" : "22c" };
  }

  public invokeTool(toolCall: RequiredToolCall & FunctionToolDefinition): ToolOutput | undefined {
    console.log(`Function tool call - ${toolCall.function.name}`);

    const args: any[] = [];
    if (toolCall.function.parameters) {
      try {
        const params = JSON.parse(toolCall.function.parameters);
        for (const key in params) {
          if (Object.prototype.hasOwnProperty.call(params, key)) {
            args.push(params[key]);
          }
        }
      } catch (error) {
        console.error(`Failed to parse parameters: ${toolCall.function.parameters}`, error);
        return undefined;
      }
    }

    const functionMap = new Map(
      this.functionTools.map((tool) => [tool.definition.function.name, tool.func]),
    );

    const result = functionMap.get(toolCall.function.name)?.(...args);

    return result
      ? {
          toolCallId: toolCall.id,
          output: JSON.stringify(result),
        }
      : {
          toolCallId: toolCall.id,
          output: JSON.stringify({
            error: `No matching tool found for function: ${toolCall.function.name}`,
          }),
        };
  }

  public getFunctionDefinitions(): FunctionToolDefinition[] {
    return this.functionTools.map((tool) => tool.definition);
  }

  async createAgentWithFunctionTools(client: AgentsClient): Promise<any> {
    const functionTools = this.getFunctionDefinitions();

    const agent = await client.createAgent("gpt-4o", {
      name: "function-agent",
      instructions: "You are a helpful assistant that can use functions to provide information.",
      tools: functionTools,
    });

    console.log(`Created agent with function tools, ID: ${agent.id}`);
    return agent;
  }
}
```

### 2. File Search Tool

```typescript
// src/agents/tools/file-search-tool.ts
import { AgentsClient, ToolUtility } from "@azure/ai-agents";
import fs from "fs";

export class FileSearchTool {
  constructor(private client: AgentsClient) {}

  async createAgentWithFileSearch(filePath: string): Promise<any> {
    // Upload file
    const localFileStream = fs.createReadStream(filePath);
    const file = await this.client.files.upload(localFileStream, "assistants", {
      fileName: "uploaded_file.txt"
    });
    console.log(`Uploaded file, ID: ${file.id}`);

    // Create vector store
    const vectorStore = await this.client.vectorStores.create({
      fileIds: [file.id],
      name: "myVectorStore"
    });
    console.log(`Created vector store, ID: ${vectorStore.id}`);

    // Create file search tool
    const fileSearchTool = ToolUtility.createFileSearchTool([vectorStore.id]);

    // Create agent with file search capability
    const agent = await this.client.createAgent("gpt-4o", {
      name: "File Search Agent",
      instructions: "You are a helpful agent that can search and retrieve information from uploaded files.",
      tools: [fileSearchTool.definition],
      toolResources: fileSearchTool.resources
    });

    console.log(`Created agent with file search, ID: ${agent.id}`);
    return { agent, vectorStore, file };
  }
}
```

### 3. Code Interpreter Tool

```typescript
// src/agents/tools/code-interpreter-tool.ts
import { AgentsClient, ToolUtility } from "@azure/ai-agents";
import fs from "fs";

export class CodeInterpreterTool {
  constructor(private client: AgentsClient) {}

  async createAgentWithCodeInterpreter(csvFilePath: string): Promise<any> {
    // Upload CSV file for analysis
    const localFileStream = fs.createReadStream(csvFilePath);
    const localFile = await this.client.files.upload(localFileStream, "assistants", {
      fileName: "data_analysis.csv",
    });
    console.log(`Uploaded file for code interpreter, ID: ${localFile.id}`);

    // Create code interpreter tool
    const codeInterpreterTool = ToolUtility.createCodeInterpreterTool([localFile.id]);

    // Create agent with code interpreter capability
    const agent = await this.client.createAgent("gpt-4o", {
      name: "Data Analysis Agent",
      instructions: "You are a data analyst that can analyze CSV files and create visualizations.",
      tools: [codeInterpreterTool.definition],
      toolResources: codeInterpreterTool.resources,
    });

    console.log(`Created agent with code interpreter, ID: ${agent.id}`);
    return { agent, file: localFile };
  }
}
```

### 4. Azure AI Search Integration

```typescript
// src/agents/tools/azure-search-tool.ts
import { AgentsClient, ToolUtility } from "@azure/ai-agents";

export class AzureSearchTool {
  constructor(private client: AgentsClient) {}

  async createAgentWithAzureSearch(): Promise<any> {
    const connectionName = process.env.AZURE_AI_SEARCH_CONNECTION_NAME || "<connection-name>";

    // Initialize Azure AI Search tool
    const azureAISearchTool = ToolUtility.createAzureAISearchTool(connectionName, "search-index", {
      queryType: "simple",
      topK: 3,
      filter: "",
      indexConnectionId: connectionName,
      indexName: "search-index",
    });

    // Create agent with Azure AI Search capability
    const agent = await this.client.createAgent("gpt-4o", {
      name: "Search Agent",
      instructions: "You are a helpful agent that can search enterprise data using Azure AI Search.",
      tools: [azureAISearchTool.definition],
      toolResources: azureAISearchTool.resources,
    });

    console.log(`Created agent with Azure AI Search, ID: ${agent.id}`);
    return agent;
  }
}
```

### 5. Multiple Tools with ToolSet

```typescript
// src/agents/tools/multi-tool-agent.ts
import { AgentsClient, ToolSet } from "@azure/ai-agents";
import fs from "fs";

export class MultiToolAgent {
  constructor(private client: AgentsClient) {}

  async createAgentWithMultipleTools(csvFilePath: string, txtFilePath: string): Promise<any> {
    // Upload file for code interpreter
    const fileStream1 = fs.createReadStream(csvFilePath);
    const codeInterpreterFile = await this.client.files.upload(fileStream1, "assistants", {
      fileName: "analysis_data.csv"
    });
    console.log(`Uploaded code interpreter file, ID: ${codeInterpreterFile.id}`);

    // Upload file for file search
    const fileStream2 = fs.createReadStream(txtFilePath);
    const fileSearchFile = await this.client.files.upload(fileStream2, "assistants", {
      fileName: "search_document.txt"
    });
    console.log(`Uploaded file search file, ID: ${fileSearchFile.id}`);

    // Create vector store for file search
    const vectorStore = await this.client.vectorStores.createAndPoll({
      fileIds: [fileSearchFile.id]
    }).pollUntilDone();

    // Create tool set with multiple tools
    const toolSet = new ToolSet();
    toolSet.addFileSearchTool([vectorStore.id]);
    toolSet.addCodeInterpreterTool([codeInterpreterFile.id]);

    // Create agent with multiple tools
    const agent = await this.client.createAgent("gpt-4o", {
      name: "Multi-Tool Agent",
      instructions: "You are a comprehensive assistant that can analyze data, search documents, and provide insights.",
      tools: toolSet.toolDefinitions,
      toolResources: toolSet.toolResources
    });

    console.log(`Created multi-tool agent, ID: ${agent.id}`);
    return { agent, vectorStore, codeInterpreterFile, fileSearchFile };
  }
}
```

## Message Handling and Conversations

### Complete Conversation Flow

```typescript
// src/agents/conversation-flow.ts
import { AgentsClient } from "@azure/ai-agents";

export class ConversationFlow {
  constructor(private client: AgentsClient) {}

  async runCompleteConversation(agentId: string, initialMessage: string) {
    try {
      // 1. Create a new thread
      const thread = await this.client.threads.create();
      console.log(`Created thread: ${thread.id}`);

      // 2. Send initial message
      await this.client.messages.create(thread.id, "user", initialMessage);
      console.log("Sent initial message");

      // 3. Run the agent and poll for completion
      const run = await this.client.runs.createAndPoll(thread.id, agentId, {
        pollingOptions: {
          intervalInMs: 2000,
        },
      });

      console.log(`Run completed with status: ${run.status}`);

      // 4. Retrieve and display messages
      const messages = await this.getConversationHistory(thread.id);

      console.log("\n--- Conversation History ---");
      messages.forEach(msg => {
        console.log(`${msg.role}: ${msg.content}`);
      });

      return { thread, messages };
    } catch (error) {
      console.error("Error in conversation flow:", error);
      throw error;
    }
  }

  private async getConversationHistory(threadId: string) {
    const messages = await this.client.messages.list(threadId, {
      order: "asc"
    });

    const messageList = [];
    for await (const message of messages) {
      const textContent = message.content.find((item) => item.type === "text");
      if (textContent && "text" in textContent) {
        messageList.push({
          role: message.role,
          content: textContent.text.value
        });
      }
    }

    return messageList;
  }
}
```

## Best Practices

### 1. Error Handling

```typescript
// src/utils/error-handler.ts
export class AgentErrorHandler {
  static async handleAgentOperation<T>(operation: () => Promise<T>): Promise<T | null> {
    try {
      return await operation();
    } catch (error) {
      console.error("Agent operation failed:", error);

      if (error instanceof Error) {
        // Handle specific error types
        if (error.message.includes("authentication")) {
          console.error("Authentication error - check credentials");
        } else if (error.message.includes("quota")) {
          console.error("Quota exceeded - check usage limits");
        } else if (error.message.includes("rate limit")) {
          console.error("Rate limit exceeded - implement retry logic");
        }
      }

      return null;
    }
  }
}
```

### 2. Resource Management

```typescript
// src/utils/resource-manager.ts
import { AgentsClient } from "@azure/ai-agents";

export class ResourceManager {
  constructor(private client: AgentsClient) {}

  async cleanupResources(resourceIds: {
    agentId?: string;
    threadId?: string;
    vectorStoreId?: string;
    fileIds?: string[];
  }) {
    try {
      // Delete agent
      if (resourceIds.agentId) {
        await this.client.deleteAgent(resourceIds.agentId);
        console.log(`Deleted agent: ${resourceIds.agentId}`);
      }

      // Delete vector store
      if (resourceIds.vectorStoreId) {
        await this.client.vectorStores.delete(resourceIds.vectorStoreId);
        console.log(`Deleted vector store: ${resourceIds.vectorStoreId}`);
      }

      // Delete files
      if (resourceIds.fileIds) {
        for (const fileId of resourceIds.fileIds) {
          await this.client.files.delete(fileId);
          console.log(`Deleted file: ${fileId}`);
        }
      }

      console.log("Resource cleanup completed");
    } catch (error) {
      console.error("Error during resource cleanup:", error);
    }
  }
}
```

### 3. Configuration Management

```typescript
// src/config/agent-config.ts
export interface AgentConfig {
  name: string;
  instructions: string;
  model: string;
  tools?: any[];
  toolResources?: any;
  maxTokens?: number;
  temperature?: number;
}

export const defaultAgentConfigs = {
  basicAssistant: {
    name: "Basic Assistant",
    instructions: "You are a helpful assistant.",
    model: "gpt-4o",
  },

  dataAnalyst: {
    name: "Data Analyst",
    instructions: "You are a data analyst specializing in CSV analysis and visualization.",
    model: "gpt-4o",
  },

  researchAgent: {
    name: "Research Agent",
    instructions: "You are a research assistant that can search documents and provide insights.",
    model: "gpt-4o",
  },
};
```

## Usage Example

### Complete Implementation Example

```typescript
// src/examples/complete-example.ts
import { AgentsClient } from "@azure/ai-agents";
import { getCredentials } from "../auth/credentials";
import { AgentFactory } from "../agents/agent-factory";
import { ConversationFlow } from "../agents/conversation-flow";
import { FunctionToolExecutor } from "../agents/tools/function-tools";
import { ResourceManager } from "../utils/resource-manager";

async function main() {
  // Initialize client
  const projectEndpoint = process.env.PROJECT_ENDPOINT!;
  const credential = getCredentials();
  const client = new AgentsClient(projectEndpoint, credential);

  // Initialize components
  const agentFactory = new AgentFactory(client);
  const conversationFlow = new ConversationFlow(client);
  const functionToolExecutor = new FunctionToolExecutor();
  const resourceManager = new ResourceManager(client);

  try {
    // Create agent with function tools
    const agent = await functionToolExecutor.createAgentWithFunctionTools(client);

    // Run conversation
    const result = await conversationFlow.runCompleteConversation(
      agent.id,
      "What's the weather like in my favorite city?"
    );

    console.log("Conversation completed successfully!");

    // Cleanup resources
    await resourceManager.cleanupResources({
      agentId: agent.id,
    });

  } catch (error) {
    console.error("Application error:", error);
  }
}

// Run the example
if (require.main === module) {
  main().catch(console.error);
}
```

## Troubleshooting

### Common Issues and Solutions

1. **Authentication Errors**
   - Verify environment variables are set correctly
   - Check service principal permissions
   - Ensure the Azure resource is properly configured

2. **API Rate Limits**
   - Implement exponential backoff
   - Add delays between requests
   - Monitor usage quotas

3. **File Upload Issues**
   - Check file size limits
   - Verify file format compatibility
   - Ensure proper file stream handling

4. **Tool Integration Problems**
   - Validate tool configurations
   - Check connection IDs and endpoints
   - Verify required permissions

### Debugging Tips

```typescript
// Enable debug logging
process.env.AZURE_LOG_LEVEL = "verbose";

// Add request/response logging
const client = new AgentsClient(projectEndpoint, credential, {
  loggingOptions: {
    enableSystemLogs: true,
    enableClientRequestIdHeader: true,
  },
});
```

## Conclusion

This guide provides a comprehensive foundation for implementing Azure agents using the Azure SDK for JavaScript. The modular approach allows you to:

- Start with basic agents and progressively add complexity
- Integrate various tools based on your requirements
- Handle conversations and streaming responses
- Implement proper error handling and resource management

For production deployments, ensure you:
- Use service principal authentication
- Implement proper error handling
- Monitor usage and costs
- Follow security best practices
- Plan for scaling and performance optimization

## Additional Resources

- [Azure AI Projects Documentation](https://docs.microsoft.com/azure/ai-studio/)
- [Azure SDK for JavaScript GitHub Repository](https://github.com/azure/azure-sdk-for-js)
- [Azure Identity Documentation](https://docs.microsoft.com/azure/developer/javascript/sdk/authentication/)
- [Azure OpenAI Service Documentation](https://docs.microsoft.com/azure/ai-services/openai/)
