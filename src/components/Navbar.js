import React, { useContext } from 'react';
import {Context} from '../Store';
import '../App.css';



const NavBar=(props)=>{
    const [state, dispatch] = useContext(Context);

    // activeViews: HOME, DRAW, GALLERY, PROFILE, ABOUT
    const handleViewSelect=(selection)=>{
        return    dispatch({type:'UPDATE_VIEW', payload: selection});
    };
    
    return(
        <nav>
            <div className="navbar-container" >
                <div className="navbar-item" > Welcome: { state.username }  </div>
                <div className="navbar-item" onClick={ ()=>handleViewSelect('HOME') } > Home </div>
                <div className="navbar-item" onClick={ ()=>handleViewSelect('PROFILE') } > Profile </div>
                <div className="navbar-item" onClick={ ()=>handleViewSelect('DRAW') } > Draw A Doodle </div>
                <div className="navbar-item" onClick={ ()=>handleViewSelect('GALLERY') } > Gallery </div>
                <div className="navbar-item" onClick={ ()=>handleViewSelect('ABOUT') } > About </div>
            </div>
            
        </nav>
    );
};

export default NavBar;