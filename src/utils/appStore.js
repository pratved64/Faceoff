import { configureStore } from "@reduxjs/toolkit";
import faceReducer from "./faceSlice";

const appStore = configureStore({
    reducer: {
        face: faceReducer,
    },
});

export default appStore;