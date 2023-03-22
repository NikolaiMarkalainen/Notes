
import { Note } from "../models/index";
import { NewNoteEntry, NoteAttributes } from "../types";

const getNotes = async  (): Promise <NoteAttributes[]> => {
    const notes = await Note.findAll();
    console.log(notes.map((note) => note.toJSON()));
    return notes.map((note) => note.toJSON());
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
    console.log(originalNote.userId, userId);
    if(originalNote.userId !== userId) throw Error('Missing user authorization');
    const deletedNote =  await Note.destroy({where: { id }});
    return deletedNote;
};

const updateNote = async (id: number, updateNote: NoteAttributes, userId: number): Promise<NoteAttributes | null> => {
    const note = await Note.findByPk(id);
    if(!note) throw new Error('Not found');
    if(note.userId !== userId) throw Error('Missing user authorization');
    await note.update(updateNote);
    return note;
};

 export default {
    createNotes, findById, getNotes, removeNote, updateNote
};