import express from "express";
import noteService from '../services/noteService';
import toNewNoteEntry from "../utils/noteUtils";
const router = express.Router();
router.get('/', (_req, res) => {
    res.send(noteService.getNotes());
});
router.get('/:id', (req, res) => {
    noteService.findById(Number(req.params.id)).then(note => {
        if (!note)
            throw Error('Not found');
        res.send(note);
    }).catch(error => {
        console.error(error);
        res.status(500).send('Server side error');
    });
});
router.post('/', (req, res) => {
    const newNote = toNewNoteEntry(req.body);
    const addedNote = noteService.createNotes(newNote);
    res.json(addedNote);
});
router.delete('/:id', (req, res) => {
    noteService.removeNote(Number(req.params.id)).then((note) => {
        res.send(note);
    }).catch((error) => res.send(error));
});
router.put('/:id', (req, res) => {
    const newNote = toNewNoteEntry(req.body);
    const addedNote = noteService.updateNote(Number(req.params.id), newNote);
    res.json(addedNote);
});
export default router;
//# sourceMappingURL=noteRoute.js.map