import React, { useContext } from 'react';
import {Context} from '../Store';



const NavBar=(props)=>{
    const [state, dispatch] = useContext(Context);
    
    return(
        <nav>
            <h4>Welcome: { state.username } </h4>
            <div> 
                <button> Home </button> 
                <button> Profile </button>
                <button> Draw A Doodle </button>
                <button> Gallery </button> 
                <button> About </button>
            </div>
        </nav>
    );
};

export default NavBar;