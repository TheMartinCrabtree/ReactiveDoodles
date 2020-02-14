import React, { useContext } from 'react';
import {Context} from '../Store';
import '../App.css';



const NavBar=(props)=>{
    const [state, dispatch] = useContext(Context);
    
    return(
        <nav>
            <div className="navbar-container" >
                <div className="navbar-item" > Welcome: { state.username }  </div>
                <div className="navbar-item" > Home </div>
                <div className="navbar-item" > Profile </div>
                <div className="navbar-item" > Draw A Doodle </div>
                <div className="navbar-item" > Gallery </div>
                <div className="navbar-item" > About </div>
            </div>
            
        </nav>
    );
};

export default NavBar;