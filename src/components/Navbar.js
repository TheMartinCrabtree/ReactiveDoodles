import React, { useContext, useEffect } from 'react';
import { Context } from '../Store';

const NavBar=(props)=>{
    // get saved user info from local storage
    const currentUsername = localStorage.getItem('username') ? localStorage.getItem('username') : "";
    console.log("username: ", currentUsername)
    
    const [state, dispatch] = useContext(Context);
    
    useEffect(()=>{
        dispatch({type:'UPDATE_NAME', payload: currentUsername})
    }, []);

    return(
        <nav>
            <h4>Welcome: { state.username } </h4>
        </nav>
    );
};

export default NavBar;