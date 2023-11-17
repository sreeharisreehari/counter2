import { createSlice } from "@reduxjs/toolkit";

const counterslice=createSlice({
    // A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

// The reducer argument is passed to createReducer().
    name:'counterApp',
    initialState:{
        value:0
    },
     // actions are created inside this reducers key as objects
    reducers:{
        // logics to update state
        // function to increment number
        increment:(state,action)=>{
            state.value += action.payload
        },
        // function to decrement number
        decrement:(state,action)=>{
            state.value-= action.payload
        },
        // function to reset
        reset:(state)=>{
            state.value=0
        }

       
    }
})
// action is required by component in order to update state

export const{increment,decrement,reset}=counterslice.actions
// reducer is required to store to change the value
export default counterslice.reducer
