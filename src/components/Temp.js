import React, { useContext, useEffect } from 'react';
import { Context } from '../Store';

const SetUsername=(props)=>{
    const [store, dispatch] = useContext(Context);
    const currentUsername = "BOBBY";

    // useEffect(()=>{
    //     if(currentUsername){
    //         dispatch({ type: 'UPDATE_NAME', currentUsername })
    //     }
    // })

    return(
        <>  </>
    );
}

export default SetUsername;