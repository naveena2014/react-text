import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const form2Slice=createSlice({
    name:"formSlice2",
    initialState:{
status:"pending",
value:[],
error:null
    },
    reducers:{
        addForm :(state,action)=>{
            state.value = action.payload
        }
    },
 
 
})

export const {addForm} = form2Slice.actions

export default form2Slice