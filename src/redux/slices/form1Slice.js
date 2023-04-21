import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const form1Slice=createSlice({
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

export const {addForm} = form1Slice.actions

export default form1Slice;





