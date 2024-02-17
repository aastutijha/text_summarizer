
import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { database } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";

function ForgotPassword(){
    const history = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const emalVal = e.target.email.value;
        sendPasswordResetEmail(database,emalVal).then(data=>{
            alert("Check your gmail")
            history("/")
        }).catch(err=>{
            alert(err.code)
        })
    }
    return(
        <div className="App">
            <h1>Enter your email address</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
              
                <input name="email" placeholder='Enter Your Email' /><br/><br/>
                <button>Reset</button>
            </form>
        </div>
    )
}
export default ForgotPassword;
