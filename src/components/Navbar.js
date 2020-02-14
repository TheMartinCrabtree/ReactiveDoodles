import React, { useContext } from 'react';
import {Context} from '../Store';



const NavBar=(props)=>{
    const [state, dispatch] = useContext(Context);
    
    return(
        <nav>
            <h4>Welcome: { state.username } </h4>
            <div> Home Profile Draw Gallery </div>
        </nav>
    );
};

export default NavBar;