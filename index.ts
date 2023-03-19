import express from 'express';
import cors from 'cors';
import NoteRouter from './routes/noteRoute';
import config from './utils/config';
import { connectToDatabase } from './utils/db';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/notes', NoteRouter);

const start = async () => {
    await connectToDatabase();
    app.listen(config.PORT, '0.0.0.0', () => {
        console.log(`Server running on port: ${config.PORT}`);
    });
};

start().catch((error) => console.error(error));

export default app;

