
import React from "react";

import {useRef} from "react"
import { useDispatch } from "react-redux";
import { Link ,useNavigate} from "react-router-dom";


function Form2() {
    const form2Ref =useRef();
    const dispatch=useDispatch();
    const navigate = useNavigate();
const handleClick=(e)=>{
     e.preventDefault();
    const data ={
        email:form2Ref.current.email.value,
        password:form2Ref.current.password.value,
    }
    dispatch(form2Ref(data));
    navigate("subscribe");
}

    return (
        <div className="form2">
            <form useRef={form2Ref}>
                <label htmlFor="email">email
                    <input id="email" type="email" name="email" />
                </label>
                <label htmlFor="password">password
                    <input id="password" type="password" name="password" />
                </label>
                <button onClick={()=> handleClick()}> <Link to="/">submit</Link></button>
            </form>

        </div>
    )
}
export default Form2;