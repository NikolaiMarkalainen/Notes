import { Api } from "./apiService";
import { NotePagination, CreateNoteResponse, Note, NoteCreation } from "../../types/types";

export const NoteApi = Api.injectEndpoints({
    endpoints: (builder) => ({
        getPaginatedNotes: builder.query<NotePagination, number>({
            query: (page) => `notes/pagination?page=${page}`,
        }),
        createNote: builder.mutation<CreateNoteResponse, NoteCreation>({
            query: (note) => ({
                url: 'notes',
                method: 'POST',
                body: note,
            })
        }),
        getAllNotes: builder.query<Note, void>({
            query:() => 'notes'
        }),
    })
});

export const { 
    useGetPaginatedNotesQuery, useCreateNoteMutation, useGetAllNotesQuery,
} = NoteApi;