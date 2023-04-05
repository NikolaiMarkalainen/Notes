import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { status, NoteState, NoteCreation, Note } from "../../types/types"

const initialState: NoteState = {
    notes: [],
    status: status.idle,
    error: null,
};

export const noteSlice = createSlice({
    name:'Notes',   
    initialState,
    reducers:{
        noteAdded: (state, action: PayloadAction<NoteCreation>) =>{
            const {title, author, content, userId, teamId} = action.payload;
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
});

export default noteSlice;