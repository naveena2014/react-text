import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const form3Slice=createSlice({
    name:"formSlice1",
    initialState:{
status:"pending",
value:[],
error:null
    },
    reducers:{
        addForm :(state,action)=>{
            state.value = action.payload
        },
       
    },
 
 
})

export const {addForm} = form3Slice.actions

export default form3Slice;