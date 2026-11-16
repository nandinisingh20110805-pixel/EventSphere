import { configureStore } from "@reduxjs/toolkit";
import savedSliceReducer from './slices/savedSlice'

export const store = configureStore({
    reducer : {
        saved : savedSliceReducer
    },
});