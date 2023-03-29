import axios from "axios";
const baseUrl = '/api/notes';
import { NoteSchema } from "../types";
export const AllNotes = async (): Promise<NoteSchema[]> => {
    const request = await axios.get(baseUrl);
    return request.data
}