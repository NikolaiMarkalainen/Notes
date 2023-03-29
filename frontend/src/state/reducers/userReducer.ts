import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { allUsers, saveUser } from "../../services/userService";
import { User, UserState, UserCreation, status } from "./reducerTypes";

const initialState: UserState = {
    users: [],
    status: status.idle,
    error: null
};

export const fetchUsers = createAsyncThunk('users/fetch', async (thunkAPI) => {
    const response = await allUsers();
    return response;
});

export const saveNewUser = createAsyncThunk('users/save', async ( newUser: User, thunkAPI ) => {
    const response = await saveUser(newUser);
    return response;
});

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
    extraReducers:(builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })
        builder.addCase(saveNewUser.fulfilled, (state, action) => {
            state.users.push(action.payload);
        })
    }
})

export default userSlice;
