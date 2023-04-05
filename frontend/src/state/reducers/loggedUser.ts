import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, LoggedState } from "../../types/types";

const initialState : LoggedState = {
    user: null,
    token: '',
    isLogged: false
}

export const LoggedUserSlice = createSlice({
    name: 'Logged',
    initialState,
    reducers:{
        setLoggedState: (state, action: PayloadAction<LoggedState>) => {
            const {token, user, isLogged} = action.payload;
            if (action.payload.user !== null) {
                state.user = user;
                state.token = token;
                state.isLogged = isLogged;
            } else{
                console.log('ERROR');
            }
        },
        clearLoggedState: (state) => {
           return {...initialState};
        }
    }
});

export const {setLoggedState, clearLoggedState} = LoggedUserSlice.actions;


export default LoggedUserSlice;
