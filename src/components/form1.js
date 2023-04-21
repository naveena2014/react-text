import React from "react";
import { useDispatch } from "react-redux";
import { useRef} from "react";

import { Link, useNavigate } from "react-router-dom";


 
function Form1(){
const form1Ref=useRef();
const dispatch=useDispatch();

const navigate = useNavigate();

const handleClick=(e)=>{
    e.preventDefault();
    const data={
        firstname:form1Ref.current.firstname.value,
        lastname:form1Ref.current.lastname.value
    }
    dispatch(form1Ref(data));
    navigate("subscribe")
}




return(
    <div className="form1">
<form useRef={form1Ref}>
    <label htmlFor="firstname">first-name
        <input id="firstname" type="text" name="lastname"/>
    </label>
    <label htmlFor="lastname">last-name
        <input id="lastname" type="text" name="lastname"/>
    </label>
    <button onClick={()=> handleClick()}>sumit</button>
<Link to="/form2" ><button>submit</button></Link>
</form>
    </div>
)
}
export default Form1;












