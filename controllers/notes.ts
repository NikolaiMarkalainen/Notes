import { Request, Response } from "express";

const router = require('express').Router();
const { Note }= require('../models/notes');

router.get('/', async (_req: Request, res: Response) => {
    const notes = await Note.findAll()
    if(notes) res.json(notes);
})

router.get('/hello', async (_req: Request, res: Response) => {
    res.json('hello');
})


module.exports = router;