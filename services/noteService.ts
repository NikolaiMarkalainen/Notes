
import { Note } from "../models";
import { NewNoteEntry, NoteAttributes } from "../types";

const notes: NoteAttributes[] = [];

const getNotes = ():  NoteAttributes[] => {
    return notes;
};

const findById = async (id: number): Promise<NoteAttributes | null> => {
    const notes = await Note.findByPk(id);
    return notes;
};


const createNotes = async (entry: NewNoteEntry): Promise<NewNoteEntry> => {
    const note = await Note.create(entry);
    return note;
};

const removeNote = async (id: number): Promise<number> => {
    const deletedNote =  await Note.destroy({where: { id }});
    return deletedNote;
};

const updateNote = async (id: number, updateNote: NoteAttributes): Promise<NoteAttributes | null> => {
    const note = await Note.findByPk(id);
    if(!note) throw new Error('Not found');

    await note.update(updateNote);
    return note;
};

 export default {
    createNotes, findById, getNotes, removeNote, updateNote
};
/*
// wrong import of note causes docker to not launch
// server reset error


NoteRouter.get('/', async (_req: Request, res: Response): Promise<void> => {
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


*/