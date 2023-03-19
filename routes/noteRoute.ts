import express from "express";
import noteService from '../services/noteService';
import { RequestHandler } from "express";
import toNewNoteEntry from "../utils/noteUtils";
import { NoteAttributes } from "../types";
const router = express.Router();

// async has to be labeled as RequestHandler to function properly in requests

router.get('/', (async (_req, res) => {
    const notes = await noteService.getNotes();
    res.send(notes);
}) as RequestHandler);

router.get('/:id', (req,res) => {
    noteService.findById(Number(req.params.id)).then(
        note => {
            if(!note) throw Error('Not found');
            res.send(note);
        }).catch(error => {
            console.error(error);
            res.status(500).send('Server side error');
        });
});

router.post('/', (req,res) => {
    const newNote = toNewNoteEntry(req.body);
    console.log(newNote);
    const addedNote = noteService.createNotes(newNote);
    res.json(addedNote);
});

router.delete('/:id', (req, res) => {
    noteService.removeNote(Number(req.params.id)).then(
        () => {
            res.status(204).send('Deleted successfuly');
        }).catch((error) => res.send(error));
});

router.put('/:id', (req, res) => {
    const newNote = toNewNoteEntry(req.body) as NoteAttributes;
    const addedNote = noteService.updateNote(Number(req.params.id), newNote);
    res.json(addedNote);
});


export default router;