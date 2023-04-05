import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import NoteRouter from './src/routes/noteRoute';
import TeamRouter from './src/routes/teamRoute';
import UserRouter from './src/routes/userRoute';
import LoginRouter from './src/routes/loginRoute';
//import LoginRouter from './routes/loginRoute';
import {errorHandler}from './src/utils/middleware';
import config from './src/utils/config';
import { connectToDatabase } from './src/utils/db';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/notes', NoteRouter);
app.use('/teams', TeamRouter);
app.use('/users', UserRouter);
app.use('/', LoginRouter);
app.use(errorHandler);

const start = async () => {
    await connectToDatabase();
    app.listen(config.PORT, '0.0.0.0', () => {
        console.log(`Server running on port: ${config.PORT}`);
    });
};

start().catch((error) => console.error(error));

export default app;

