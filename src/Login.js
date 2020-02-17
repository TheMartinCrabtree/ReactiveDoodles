import React, { useState, useEffect } from 'react';
import './App.css';

const Login=(props)=>{
    // add check to see if user already has login information in localStorage
    const [usernameInput, setUsernameInput] = useState("");

    const handleLogin=()=>{
        // add actual auth/validation
        console.log("attempting to logging in", usernameInput)

        if(usernameInput){
            console.log("logging in")
            localStorage.setItem('username', usernameInput);
            return props.setLoginVerified(true); 
        }
    }


    return(
        <section className="LoginController-container" >
            <div className="View-landingpage" >
                <h4>Please login:</h4>
                <form>
                    <label >
                        Username:
                        <input type="text" value={usernameInput} onChange={(event)=>setUsernameInput(event.target.value)} />
                    </label>
                </form>
                <button id="login" onClick={ handleLogin } >Login</button>

                <div> 
                    sign up
                </div>
            </div>
        </section>
    );
}

export default Login;