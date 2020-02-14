
import React, {useContext, useEffect} from 'react';
import Store, { Context } from './Store';

import InterfaceWrapper from './components/InterfaceWrapper';


const Homepage=(props)=>{
    

    return(
        <Store >
            <div> 
                <h4>This is the homepage component { props.children } </h4>
            </div>

            <InterfaceWrapper  />

        </Store>
    );
}

export default Homepage;