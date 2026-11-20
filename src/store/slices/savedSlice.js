import { createSlice } from "@reduxjs/toolkit";


const savedSlice = createSlice({
    name : "saved",
    initialState : {
        items : [],
    },
    reducers : {
        //reducer functions updates the state of its slice
        toggleSaved(state, action){
            const event = action.payload;
            const existingEvent = state.items.find((e) => (e.id || e._id) === (event.id || event._id));
            if(!existingEvent) state.items.push(action.payload);
            else state.items = state.items.filter((e) => {
                return(
                    (e.id || e._id) !== (event.id || event._id)
                )
            })
        },
        removeSaved(state){

        },
        clearSaved(state){
            state.items = [];
        }
    }
});

export const {toggleSaved, removeSaved, clearSaved} = savedSlice.actions

export default savedSlice.reducer