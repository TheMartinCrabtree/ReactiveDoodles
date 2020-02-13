
import React, {useContext, useEffect} from 'react';
import Store, { Context } from './Store';

import NavBar from './components/Navbar';
import ViewController from './components/ViewController';


const Homepage=(props)=>{
    // const [ state, dispatch ] = useContext(Context);

    

    return(
        <Store >
            <h4>This is the homepage component</h4>
            <NavBar />
            <ViewController />

        </Store>
    );
}

export default Homepage;