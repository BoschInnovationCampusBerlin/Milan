// with creditial

import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { AIProjectClient } from '@azure/ai-projects';
import { ClientSecretCredential } from '@azure/identity';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Use ClientSecretCredential for authentication
const credential = new ClientSecretCredential(
  process.env.AZURE_TENANT_ID!,
  process.env.AZURE_CLIENT_ID!,
  process.env.AZURE_CLIENT_SECRET!
);

// ✅ Azure AI Project client
const project = new AIProjectClient(
  process.env.AZURE_AGENT_PROJECT_URL!,
  credential
);

app.post('/api/chat/ask', async (req: Request, res: Response): Promise<void> => {
  const { message } = req.body;
  console.log('📩 Incoming message:', message);

  if (!message) {
    console.warn('⚠️ Missing message in request');
    res.status(400).json({ error: 'Missing message' });
    return;
  }

  try {
    console.log('🔍 Getting agent...');
    const agent = await project.agents.getAgent(process.env.AZURE_AGENT_ID!);
    console.log('✅ Agent retrieved:', agent.name);

    console.log('🧵 Creating thread...');
    const thread = await project.agents.threads.create();
    console.log('✅ Thread created:', thread.id);

    console.log('💬 Sending user message...');
    const userMsg = await project.agents.messages.create(thread.id, 'user', message);
    console.log('✅ User message sent:', userMsg.id);

    console.log('🚦 Creating agent run...');
    let run = await project.agents.runs.create(thread.id, agent.id);
    console.log('⏳ Waiting for run to complete...');

    while (run.status === 'queued' || run.status === 'in_progress') {
      await new Promise(resolve => setTimeout(resolve, 1000));
      run = await project.agents.runs.get(thread.id, run.id);
      console.log('🔄 Run status:', run.status);
    }

    if (run.status === 'failed') {
      console.error('❌ Run failed:', run.lastError);
      res.status(500).json({ error: 'Agent run failed', detail: run.lastError });
      return;
    }

    console.log('✅ Run completed. Retrieving messages...');
    const messages = await project.agents.messages.list(thread.id, { order: 'asc' });

    for await (const m of messages) {
      const content = m.content.find(c => c.type === 'text' && 'text' in c);
      if (content && m.role === 'assistant') {
        console.log('🧠 Assistant replied:', content.text.value);
        res.json({ reply: content.text.value });
        return;
      }
    }

    console.warn('⚠️ No assistant reply found');
    res.status(500).json({ error: 'No valid assistant reply received.' });

  } catch (error) {
    console.error('🔥 Caught error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});






// import express, { Request, Response } from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import { AIProjectClient } from '@azure/ai-projects';
// import { DefaultAzureCredential } from '@azure/identity';

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const project = new AIProjectClient(
//   process.env.AZURE_AGENT_PROJECT_URL!,
//   new DefaultAzureCredential()
// );

// app.post('/api/chat/ask', async (req: Request, res: Response): Promise<void> => {
//   const { message } = req.body;
//   console.log('📩 Incoming message:', message);

//   if (!message) {
//     console.warn('⚠️ Missing message in request');
//     res.status(400).json({ error: 'Missing message' });
//     return;
//   }

//   try {
//     console.log('🔍 Getting agent...');
//     const agent = await project.agents.getAgent(process.env.AZURE_AGENT_ID!);
//     console.log('✅ Agent retrieved:', agent.name);

//     console.log('🧵 Creating thread...');
//     const thread = await project.agents.threads.create();
//     console.log('✅ Thread created:', thread.id);

//     console.log('💬 Sending user message...');
//     const userMsg = await project.agents.messages.create(thread.id, 'user', message);
//     console.log('✅ User message sent:', userMsg.id);

//     console.log('🚦 Creating agent run...');
//     let run = await project.agents.runs.create(thread.id, agent.id);
//     console.log('⏳ Waiting for run to complete...');

//     while (run.status === 'queued' || run.status === 'in_progress') {
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       run = await project.agents.runs.get(thread.id, run.id);
//       console.log('🔄 Run status:', run.status);
//     }

//     if (run.status === 'failed') {
//       console.error('❌ Run failed:', run.lastError);
//       res.status(500).json({ error: 'Agent run failed', detail: run.lastError });
//       return;
//     }

//     console.log('✅ Run completed. Retrieving messages...');
//     const messages = await project.agents.messages.list(thread.id, { order: 'asc' });

//     for await (const m of messages) {
//       const content = m.content.find(c => c.type === 'text' && 'text' in c);
//       if (content && m.role === 'assistant') {
//         console.log('🧠 Assistant replied:', content.text.value);
//         res.json({ reply: content.text.value });
//         return;
//       }
//     }

//     console.warn('⚠️ No assistant reply found');
//     res.status(500).json({ error: 'No valid assistant reply received.' });

//   } catch (error) {
//     console.error('🔥 Caught error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.listen(3000, () => {
//   console.log('🚀 Server running on http://localhost:3000');
// });



// import express, { Request, Response } from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post('/api/chat/ask', async (req: Request, res: Response): Promise<void> => {
//   res.json({ message: 'It works!' });
// });

// app.listen(3000, () => {
//   console.log('Server running');
// });

