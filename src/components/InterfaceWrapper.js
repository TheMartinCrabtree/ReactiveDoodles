import React, { useContext, useEffect } from 'react';
import { Context } from '../Store';

import NavBar from './Navbar';
import ViewController from './ViewController';


const InterfaceWrapper=(props)=>{

    // update global state with the user information that is stored in local storage
    const currentUsername = localStorage.getItem('username') ? localStorage.getItem('username') : "";
    console.log("current username", currentUsername);

    const [state, dispatch] = useContext(Context);
    
    useEffect(()=>{
        dispatch({type:'UPDATE_NAME', payload: currentUsername})
    }, []);

    return(
        <section>
            <NavBar />
            <ViewController />
        </section>
    )
}

export default InterfaceWrapper;

