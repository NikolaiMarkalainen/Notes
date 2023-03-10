import { Request, Response } from "express";
import { Router } from "express";
import  Note  from '../models/notes';

// wrong import of note causes docker to not launch
// server reset error

export const NoteRouter = Router();


NoteRouter.get('/', async (_req: Request, res: Response) => {
    const notes = await Note.findAll({})
    if(notes) res.json(notes);
})

NoteRouter.get('/hello', async (_req: Request, res: Response) => {
    res.json('hello');
})

