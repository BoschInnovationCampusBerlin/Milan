import express from 'express';
import uploadRoute from './upload.route';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors()); // allow frontend to connect
app.use(express.json());

app.use('/upload', uploadRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
