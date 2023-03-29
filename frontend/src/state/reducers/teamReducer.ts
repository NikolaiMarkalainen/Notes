import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { allTeams, saveTeam } from "../../services/teamService";
import { status, TeamState, TeamCreation, Team } from "./reducerTypes";


const initialState: TeamState = {
    teams: [],
    status: status.idle,
    error: null
};

export const fetchTeams = createAsyncThunk('teams/fetch', async (thunkAPI) => {
    const response = await allTeams();
    return response;
});

export const saveNewTeams = createAsyncThunk('teams/save', async ( newTeam: Team, thunkApi ) => {
    const response = await saveTeam(newTeam);
    return response;
})

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
    extraReducers:(builder) => {
        builder.addCase(fetchTeams.fulfilled, (state, action) => {
            state.teams = action.payload;
        })
        builder.addCase(saveNewTeams.fulfilled, (state, action) => {
            state.teams.push(action.payload);
        })
    }
})

export default teamSlice;