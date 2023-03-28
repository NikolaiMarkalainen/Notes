var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import cors from 'cors';
import NoteRouter from './routes/noteRoute.js';
import config from './utils/config.js';
import { connectToDatabase } from './utils/db.js';
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/notes', NoteRouter);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    yield connectToDatabase();
    app.listen(config.PORT, '0.0.0.0', () => {
        console.log(`Server running on port: ${config.PORT}`);
    });
});
start().catch((error) => console.error(error));
export default app;
//# sourceMappingURL=index.js.map