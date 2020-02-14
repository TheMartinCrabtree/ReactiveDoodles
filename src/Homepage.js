
import React, {useContext, useEffect} from 'react';
import Store, { Context } from './Store';

import InterfaceWrapper from './components/InterfaceWrapper';


const Homepage=(props)=>{
    

    return(
        <Store >
           <InterfaceWrapper  />
        </Store>
    );
}

export default Homepage;