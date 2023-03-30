
import { Note } from "../models/index";
import { NewNoteEntry, NoteAttributes, SearchRequest, NoteSearchParams, NotePagination } from "../types";

const getNotes = async  (req : SearchRequest): Promise <NoteAttributes[]> => {
    const where: NoteSearchParams= req.where || {};
    const notes = await Note.findAll({where});
    console.log(notes.map((note) => note.toJSON()));
    return notes.map((note) => note.toJSON());
};

const getPaginatedNotes = async( page : number ): Promise<NotePagination> =>  {
    try{
        const LIMIT = 3;
        const OFFSET = (Number(page)- 1) * LIMIT;        
        const amount = await Note.count();
        const notes = await Note.findAll({
            limit: LIMIT,
            offset: OFFSET,
        });
        const pages = Math.ceil(amount / LIMIT);
        return {notes, pages, currentPage: page, totalResults: amount};
    } catch(error){
        throw new Error('Failed to fetch pagination');
    }
};


const findById = async (id: number): Promise<NoteAttributes | null> => {
    const notes = await Note.findByPk(id);
    return notes;
};


const createNotes = async (entry: NewNoteEntry): Promise<NewNoteEntry> => {
    const note = await Note.create(entry);
    console.log(note);
    return note;
};

const removeNote = async (id: number, userId: number): Promise<number> => {
    const originalNote = await Note.findByPk(id);
    if(!originalNote) throw Error('Note not found');
    if(originalNote.userId !== userId) throw Error('Missing user authorization');
    const deletedNote =  await Note.destroy({where: { id }});
    return deletedNote;
};

const updateNote = async (id: number, updateNote: NoteAttributes): Promise<NoteAttributes | null> => {
    const note = await Note.findByPk(id);
    if(!note) throw new Error('Not found');
    if(note.userId !== id) throw Error('Missing user authorization');
    await note.update(updateNote);
    return note;
};

 export default {
    createNotes, findById, getNotes, removeNote, updateNote, getPaginatedNotes
};