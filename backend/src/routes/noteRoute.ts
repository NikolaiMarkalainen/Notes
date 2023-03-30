import express from "express";
import noteService from '../services/noteService';
import { RequestHandler } from "express";
import toNewNoteEntry from "../utils/noteUtils";
import { NewNoteEntry, NoteAttributes, SearchRequest, PaginationRequest } from "../types";
import  {searchMiddleware, tokenExtractor}from "../utils/middleware";
import { AuthenticatedRequest} from "../types";
const router = express.Router();

// async has to be labeled as RequestHandler to function properly in requests

router.get('/', searchMiddleware (['userId', 'teamId','author','content','title']), (async (req, res) => {
    const notes = await noteService.getNotes(req as SearchRequest);
    if(notes)res.send(notes);
    else throw Error('Not found');
}) as RequestHandler);


router.get('/pagination', (async (req: PaginationRequest, res) => {
    const {page}  = req.query;
    const notes = await noteService.getPaginatedNotes(Number(page));
    if(notes) res.send(notes);
    else throw Error('Not found');
})  as RequestHandler);

router.post('/', tokenExtractor, (async (req : AuthenticatedRequest, res) => {
    const validUser: NewNoteEntry = {
        ...req.body as NewNoteEntry,
        userId: req.user.id
    };
    const newNote = toNewNoteEntry(validUser);
    const addedNote = await noteService.createNotes(newNote);
    if (addedNote) res.json(addedNote);
    else throw Error('Bad data');
}) as RequestHandler);


router.get('/:id', (async (req,res) => {
    const note = await noteService.findById(Number(req.params.id));
    if(note) res.send(note);
    else throw Error('Not found');
}) as RequestHandler );


router.delete('/:id', tokenExtractor, (async (req: AuthenticatedRequest , _res) => {
    const deleted = await noteService.removeNote(Number(req.params.id), Number(req.user.id));
    if(deleted) throw Error('Deleted');
    else throw Error('Not found');
}) as RequestHandler );

router.put('/:id', tokenExtractor, (async (req: AuthenticatedRequest, res) => {
    const validUser: NewNoteEntry = {
        ...req.body as NewNoteEntry,
        userId: req.user.id
    };
    const newNote = toNewNoteEntry(validUser) as NoteAttributes;
    const addedNote = await noteService.updateNote(Number(req.params.id), newNote);
    if (addedNote) res.json(addedNote);
    else throw Error('Bad data');
}) as RequestHandler );


export default router;