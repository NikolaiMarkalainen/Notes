import express from "express";
import noteService from '../services/noteService';
import toNewNoteEntry from "../utils/noteUtils";

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(noteService.getNotes());
});

router.get('/:id', (req,res) => {
    const note = noteService.findById(Number(req.params.id));
    if(!note) throw Error('Not found');
    res.send(note);
});

router.post('/', (req,res) => {
    const newNote = toNewNoteEntry(req.body);
    const addedNote = noteService.createNotes(newNote);
    res.json(addedNote);
});

router.delete('/:id', async (req, res): Promise<number> => {
    const note = await noteService.removeNote(Number(req.params.id));
    if(note > 0 ){
        res.status(204).send();
        return note;
    } else{
        res.status(404).send('Note not found');
        return 0;
    }
});

router.put('/:id', (req, res) => {
    const newNote = toNewNoteEntry(req.body);
    const addedNote = noteService.addNote(newNote);
    res.json(addedNote);
});


export default router;