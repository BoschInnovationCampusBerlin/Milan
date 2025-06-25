import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();
const router = express.Router();

router.post('/ask', async (req: Request, res: Response) => {
  const { message } = req.body;

  try {
    const response = await axios.post<{
      choices: { message: { content: string } }[];
    }>(
      `${process.env.AZURE_OPENAI_ENDPOINT}/openai/deployments/${process.env.AZURE_DEPLOYMENT_NAME}/chat/completions?api-version=2024-03-01-preview`,
      {
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant that explains security reports.'
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.7
      },
      {
        headers: {
          'api-key': process.env.AZURE_OPENAI_API_KEY!,
          'Content-Type': 'application/json'
        }
      }
    );

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (err: unknown) {
    console.error('[Assistant Error]', err);
    res.status(500).json({ message: 'Assistant failed to respond.' });
  }
});

export default router;
