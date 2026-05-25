import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./Contact/Contact.Slice";
import aboutSlice from "./About/About.Slice";

export const store = configureStore({
    reducer: {
        contact: contactSlice,
        about: aboutSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;