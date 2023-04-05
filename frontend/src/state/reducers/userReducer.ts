import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState, UserCreation, status, ListResponse } from "../../types/types"

const initialState: UserState = {
    users: [],
    status: status.idle,
    error: null,
};


export const userSlice = createSlice({
    name:'Users',
    initialState,
    reducers:{
        userAdded: (state, action: PayloadAction<UserCreation> ) => {
                const {admin, name, username, password, teamId} = action.payload;
                state.users.push({
                    name,
                    username,
                    password,
                    admin: admin !== undefined ? admin : false,
                    teamId: teamId ?? null,
                    id: state.users.length + 1,
                });
            },
    },
})

export default userSlice;
