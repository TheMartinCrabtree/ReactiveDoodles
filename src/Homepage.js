
import React, {useContext, useEffect} from 'react';
import Store, { Context } from './Store';

import Navbar from './components/Navbar';
import NavBar from './components/Navbar';


const Homepage=(props)=>{
    

    return(
        <Store >
            <h4>This is the homepage component</h4>
            <NavBar />
            

        </Store>
    );
}

export default Homepage;