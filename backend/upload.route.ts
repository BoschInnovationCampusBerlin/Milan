// import express, { Request, Response } from 'express';
// import { AIProjectClient } from '@azure/ai-projects';
// import { DefaultAzureCredential } from '@azure/identity';
// import dotenv from 'dotenv';

// dotenv.config();
// const router = express.Router();

// const project = new AIProjectClient(
//   process.env.AZURE_AGENT_PROJECT_URL!,
//   new DefaultAzureCredential()
// );

// router.post('/ask', async (req: Request, res: Response) => {
//   const { message } = req.body;

//   try {
//     const agent = await project.agents.getAgent(process.env.AZURE_AGENT_ID!);
//     const thread = await project.agents.threads.create();
//     await project.agents.messages.create(thread.id, 'user', message);

//     let run = await project.agents.runs.create(thread.id, agent.id);

//     while (run.status === 'queued' || run.status === 'in_progress') {
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       run = await project.agents.runs.get(thread.id, run.id);
//     }

//     const messages = await project.agents.messages.list(thread.id, { order: 'asc' });

//     for await (const m of messages) {
//       const content = m.content.find(c => c.type === 'text' && 'text' in c);
//       if (content) {
//         return res.json({ reply: content.text.value });
//       }
//     }

//     res.status(500).json({ message: 'Agent351 returned no valid response.' });
//   } catch (error) {
//     console.error('[Agent351 Error]', error);
//     res.status(500).json({ message: 'Assistant failed to respond.' });
//   }
// });


// export default router;
