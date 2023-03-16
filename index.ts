import express  from 'express';
import { Request } from 'express';
import cors  from 'cors';
import {NoteRouter} from './services/noteService';
import { TeamRouter } from './services/teamService';
import { UserRouter } from './services/userService';
import config from './utils/config';
import {connectToDatabase} from './utils/db';
const app = express();
app.use(express.json());
// unsafe methodology of cors requires Request from express to run without ambiguity
app.use(cors<Request>());

app.use('/api/notes', NoteRouter);
app.use('/api/teams', TeamRouter);
app.use('/api/users', UserRouter);


const start = async () => {
    await connectToDatabase();
    app.listen(config.PORT, '0.0.0.0', () => {
        console.log(`Server running on port: ${config.PORT}`);
    });
};

start().catch((error) => console.error(error));

export default app;

