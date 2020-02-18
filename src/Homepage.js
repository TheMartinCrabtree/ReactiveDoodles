
import React, {useContext, useEffect} from 'react';
import Store, { Context } from './Store';

import InterfaceWrapper from './components/InterfaceWrapper';


const Homepage=(props)=>{
    

    return(
        <Store >
           <InterfaceWrapper logout={props.logout}  />
        </Store>
    );
}

export default Homepage;