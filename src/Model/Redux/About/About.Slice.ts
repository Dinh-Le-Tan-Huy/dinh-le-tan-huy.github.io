import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AboutState {
    highlightedId: string | null;
}

const initialState: AboutState = {
    highlightedId: null,
};

const aboutSlice = createSlice({
    name: "about",
    initialState,
    reducers: {
        setHighlightedId: (state, action: PayloadAction<string | null>) => {
            state.highlightedId = action.payload;
        },
    },
});

export const { setHighlightedId } = aboutSlice.actions;
export default aboutSlice.reducer;
