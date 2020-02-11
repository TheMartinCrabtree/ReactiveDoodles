
import React, {useContext, useEffect} from 'react';
import Store, { Context } from './Store';

import Navbar from './components/Navbar';


const Homepage=()=>{
    const currentUsername = localStorage.getItem('username');

    // get saved user info from local storage
    

    return(
        <Store >
            <h4>This is the homepage component</h4>
            <Navbar />

        </Store>
    );
}

export default Homepage;