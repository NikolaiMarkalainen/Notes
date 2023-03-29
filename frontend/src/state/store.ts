import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userReducer";

const store = configureStore({
    reducer: {
        users: userSlice.reducer
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch