import { Request, Response } from "express";
import { Router } from "express";
const { Note, User } = require('../models/index');
export const NoteRouter = Router();

// wrong import of note causes docker to not launch
// server reset error


NoteRouter.get('/', async (_req: Request, res: Response) => {
    const notes = await Note.findAll({
        attributes: {exclude: ['userId'] },
        include: {
            model: User,
            attributes: ['username']
        }
    });
    if(notes) res.json(notes);
});

NoteRouter.post('/', async (req: Request, res: Response) => {
    const note = await Note.create(req.body);
    if(note) res.json(note);
    else throw Error('Bad data');
});

NoteRouter.put('/:id', async (req: Request, res: Response) => {
    const note = await Note.findByPk(req.params.id);
    if(note){
        note.content = req.body.content;
        note.title = req.body.title;
        note.author = req.body.author;
        await note.save();
        res.json(note);
    } else throw Error('Not found');
});

NoteRouter.delete('/', async (req: Request, res: Response) => {
    const note = await Note.findByPk(req.params.id);
    if(note){
        await note.destroy();
        res.status(201).end();
    } else throw Error('Not found');
});

NoteRouter.get('/:id', async (req: Request, res: Response) => {
    const note = await Note.findByPk(req.params.id);
    if(note) res.json(note);
    else throw Error('Not found');
});


