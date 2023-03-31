import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotificationContent } from "../../types";

const initialState: NotificationContent = {
    message: ''
}


export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers:{
        setMessage(state, action: PayloadAction<string>){
            state.message = action.payload;
        },
        clearMessage(state){
            return initialState;
        },
    },
});

export const {setMessage, clearMessage} = notificationSlice.actions;

export default notificationSlice.reducer;

