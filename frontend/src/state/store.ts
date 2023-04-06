import { configureStore } from "@reduxjs/toolkit";
import {userSlice, noteSlice, teamSlice, notificationSlice, LoggedUserSlice } from "./index";
import { Api, NoteApi } from "./index";

const store = configureStore({
    reducer: {
        users: userSlice.reducer,
        teams: teamSlice.reducer,
        notes: noteSlice.reducer,
        notification: notificationSlice.reducer,
        login: LoggedUserSlice.reducer,
        [Api.reducerPath]: Api.reducer,
        [NoteApi.reducerPath]: Api.reducer,
    },
    middleware: (curryGetDefaultMiddleware) => curryGetDefaultMiddleware().concat(Api.middleware),
    
});



export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch