
import React, {useContext, useEffect} from 'react';
import Store, { Context } from './Store';

import InterfaceWrapper from './components/InterfaceWrapper';


const Homepage=(props)=>{
    

    return(
        <Store >
            <h4>This is the homepage component</h4>
            <InterfaceWrapper  />

        </Store>
    );
}

export default Homepage;