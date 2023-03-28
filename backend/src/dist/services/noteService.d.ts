import { NewNoteEntry, NoteAttributes } from "../types";
declare const _default: {
    createNotes: (entry: NewNoteEntry) => Promise<NewNoteEntry>;
    findById: (id: number) => Promise<NoteAttributes | null>;
    getNotes: () => NoteAttributes[];
    removeNote: (id: number) => Promise<number>;
    updateNote: (id: number, updateNote: NoteAttributes) => Promise<NoteAttributes | null>;
};
export default _default;
