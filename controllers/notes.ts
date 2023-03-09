import { Request, Response } from "express";
import { Router } from "express";

export const Noterouter = Router();
const Note = require('../models/notes');

Noterouter.get('/', async (_req: Request, res: Response) => {
    const notes = await Note.findAll({})
    if(notes) res.json(notes);
})

Noterouter.get('/hello', async (_req: Request, res: Response) => {
    res.json('hello');
})

