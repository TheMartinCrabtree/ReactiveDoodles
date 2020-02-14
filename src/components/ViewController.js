import React, { useContext, useEffect } from 'react';
import { Context } from '../Store';

import Home from './Home'
import Draw from './Draw';
import Gallery from './Gallery';
import Profile from './Profile';

const ViewController=(props)=>{
    const [state, dispatch] = useContext(Context);
    const activeViewsObj = state.activeViews;
    console.log("Active Views: ", activeViewsObj);

    // draw, gallery, myGallery, profile

    const handleHomeView=()=>{
        if(activeViewsObj.home){
            return <Home />;
        }
    };


    const handleDrawView=()=>{
        if(activeViewsObj.draw){
            return <Draw />;
        }
    };

    const handleProfileView=()=>{
        if(activeViewsObj.profile){
            return <Profile />;
        }
    };

    return(
        <section className="ViewController-container" >
            { handleHomeView() }
            { handleProfileView() }
            { handleDrawView() }
        </section>
    )
};

export default ViewController;