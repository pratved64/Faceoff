import { createSlice } from "@reduxjs/toolkit";

const faceSlice = createSlice({
    name: "face",
    initialState: "w",
    reducers: {
        changeGen: (state, action) => {
            return action.payload;
        },
    },
});

export const { changeGen } = faceSlice.actions;

export default faceSlice.reducer;