const express = require('express');
const cors = require('cors');
import {NoteRouter} from './controllers/notes';
import { TeamRouter } from './controllers/teams';
import { UserRouter } from './controllers/user';
const { PORT } = require('./utils/config');
const {connectToDatabase} = require('./utils/db');
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/notes', NoteRouter);
app.use('/api/teams', TeamRouter);
app.use('/api/users', UserRouter);


const start = async () => {
    await connectToDatabase();
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running on port: ${PORT}`);
    });
};

start();

export default app;

