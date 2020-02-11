import React, { useEffect } from 'react';

const Login=(props)=>{
    useEffect(()=>{
        localStorage.setItem('username', "Martin");
    },
    [])

    return(
        <section>
            <h4>Please login:</h4>
            <button id="login" onClick={()=>props.setLoginVerified(true)} >Login</button>
        </section>
    );
}

export default Login;