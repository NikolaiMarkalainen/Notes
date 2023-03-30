import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { status, TeamState, TeamCreation, Team } from "../../types"


const initialState: TeamState = {
    teams: [],
    status: status.idle,
    error: null
};


export const teamSlice = createSlice({
    name:'Teams',
    initialState,
    reducers:{
        teamAdded: (state, action: PayloadAction<TeamCreation>) =>{
            const {name} = action.payload;
            state.teams.push({
                name,
                id: state.teams.length + 1,
            });
        },
    },
});

export default teamSlice;