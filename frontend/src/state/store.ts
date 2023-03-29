import { configureStore } from "@reduxjs/toolkit";
import {userSlice, noteSlice, teamSlice } from "./index";

const store = configureStore({
    reducer: {
        users: userSlice.reducer,
        teams: teamSlice.reducer,
        notes: noteSlice.reducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch