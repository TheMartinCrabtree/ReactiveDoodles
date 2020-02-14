import React, { useContext } from 'react';
import {Context} from '../Store';
import '../App.css';



const NavBar=(props)=>{
    const [state, dispatch] = useContext(Context);
    
    return(
        <nav>
            <div className="navbar-container" >
                <div> Welcome: { state.username }  </div>
                <div> Home </div>
                <div> Profile </div>
                <div> Draw A Doodle </div>
                <div> Gallery </div>
                <div> About </div>
            </div>
            
        </nav>
    );
};

export default NavBar;