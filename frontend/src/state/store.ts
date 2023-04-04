import { configureStore } from "@reduxjs/toolkit";
import {userSlice, noteSlice, teamSlice, notificationSlice } from "./index";
import { Api } from "./index";
import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

const store = configureStore({
    reducer: {
        users: userSlice.reducer,
        teams: teamSlice.reducer,
        notes: noteSlice.reducer,
        notification: notificationSlice.reducer,
        [Api.reducerPath]: Api.reducer,
    },
    middleware: (curryGetDefaultMiddleware) => curryGetDefaultMiddleware().concat(Api.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch