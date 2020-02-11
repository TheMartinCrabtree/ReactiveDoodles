import React from 'react';

const Login=(props)=>{


    return(
        <section>
            <h4>Please login:</h4>
            <button id="login" onClick={props.setLoginVerfied(true)} >Login</button>
        </section>
    );
}

export default Login;