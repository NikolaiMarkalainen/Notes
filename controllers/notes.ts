import { Request, Response } from "express";
import { Router } from "express";
const { Note, User } = require('../models/index');

// wrong import of note causes docker to not launch
// server reset error

export const NoteRouter = Router();


NoteRouter.get('/', async (_req: Request, res: Response) => {
    const notes = await Note.findAll({
        attributes: {exclude: ['userId'] },
        include: {
            model: User,
            attributes: ['username']
        }
    })
    if(notes) res.json(notes);
})


