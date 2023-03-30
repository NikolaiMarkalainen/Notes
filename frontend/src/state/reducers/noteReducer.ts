import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { allNotes, saveNote } from "../../services/noteService";
import { status, NoteState, NoteCreation, Note } from "./reducerTypes";


const initialState: NoteState = {
    notes: [],
    status: status.idle,
    error: null
};

export const fetchNotes = createAsyncThunk('notes/fetch', async (thunkAPI) => {
    const response = await allNotes();
    return response;
});

export const saveNewNotes = createAsyncThunk('notes/save', async ( newNote: Note, thunkApi ) => {
    const response = await saveNote(newNote);
    return response;
})

export const noteSlice = createSlice({
    name:'Notes',
    initialState,
    reducers:{
        teamAdded: (state, action: PayloadAction<NoteCreation>) =>{
            const {title, author, content, id, userId, teamId} = action.payload;
            state.notes.push({
                title,
                author,
                content,
                userId,
                teamId: teamId ?? null,
                id: state.notes.length + 1,
            });
        },
    },
    extraReducers:(builder) => {
        builder.addCase(fetchNotes.fulfilled, (state, action) => {
            state.notes = action.payload;
        })
        builder.addCase(saveNewNotes.fulfilled, (state, action) => {
            state.notes.push(action.payload);
        })
    }
})

export default noteSlice;