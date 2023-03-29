import axios from "axios";
const baseUrl = '/api/notes';
import { NoteSchema, PostNote } from "../types";


export const allNotes = async (): Promise<NoteSchema[]> => {
    const request = await axios.get(baseUrl);
    return request.data
}

export const saveNote = async ( newNote: PostNote ): Promise<NoteSchema> => {
    const response = await axios.post(baseUrl, newNote);
    return response.data
};