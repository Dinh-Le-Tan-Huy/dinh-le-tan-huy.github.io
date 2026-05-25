import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ContactState } from "./Contact.Type";
import { sendContactEmail } from "./Contact.Thunk";

const initialState: ContactState = {
    name: "",
    email: "",
    message: "",
    status: 'idle',
    error: null
};

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        updateField: (state, action: PayloadAction<{ field: keyof ContactState; value: string }>) => {
            const { field, value } = action.payload;
            if (field in state) {
                (state as any)[field] = value;
            }
        },
        resetForm: (state) => {
            state.name = "";
            state.email = "";
            state.message = "";
            state.status = 'idle';
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendContactEmail.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(sendContactEmail.fulfilled, (state) => {
                state.status = 'success';
                state.name = "";
                state.email = "";
                state.message = "";
            })
            .addCase(sendContactEmail.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
    }
})

export const { updateField, resetForm } = contactSlice.actions;
export default contactSlice.reducer;