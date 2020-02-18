import React, { useState, useEffect } from 'react';
import './App.css';


const Login=(props)=>{
    // add check to see if user already has login information in localStorage
    const [usernameInput, setUsernameInput] = useState("");
    let [loginError, setLoginError ] = useState(false);

    const handleLogin=()=>{
        // add actual auth/validation
        console.log("attempting to logging in", usernameInput)

        if(usernameInput){
            console.log("logging in")
            localStorage.setItem('username', usernameInput);
            setLoginError(false)
            return props.setLoginVerified(true); 
        }else{
            return setLoginError(true);
        }

    }

    const handleLoginErrors=()=>{
        console.log("checking for login error")
        if(loginError){
            return <div>Please enter valid login credentials.</div>
        }
    }


    return(
        <section className="LoginController-container" >
            <div className="View-primary" >
                <div >
                    <h4>Please login:</h4>
                    <form className="LoginController-container-item">
                        <label >
                            Username:
                            <input type="text" value={usernameInput} onChange={(event)=>setUsernameInput(event.target.value)} />
                        </label>
                        { handleLoginErrors()  }
                        <button id="login" onClick={ handleLogin } >Login</button>
                    </form>
                </div>

                <div className="LoginController-container-item" > 
                    don't have an account? <button> Sign Up </button>
                </div>
            </div>
        </section>
    );
}

export default Login;