import { configureStore } from "@reduxjs/toolkit";
import form1Slice from "./slices/form1Slice";
import form2Slice from "./slices/form2Slice";
import form3Slice from "./slices/form3Slice";

const store=configureStore({
 reducer:{
    form1:form1Slice.reducer,
    form2:form2Slice.reducer,
    form3:form3Slice.reducer
}
})
export default store;
