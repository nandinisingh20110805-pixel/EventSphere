import { createSlice } from "@reduxjs/toolkit";


const savedSlice = createSlice({
    name : "saved",
    initialState : {
        name : "Nandini",
    },
    reducers : {
        //reducer functions updates the state of its slice
        toggleSaved(state, action){
            console.log(action);
            // state.name = "Wakatoshi"
            state.name = action.payload
            // console.log("Ho rha hai");
            // console.log(state);
        },
        removeSaved(state){

        },
        clearSaved(state){

        }
    }
});

export const {toggleSaved, removeSaved, clearSaved} = savedSlice.actions

export default savedSlice.reducer