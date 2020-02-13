import React, { useContext, useEffect } from 'react';
import { Context } from '../Store';

import Draw from './Draw';
import Gallery from './Gallery';
import MyGallery from './MyGallery';
import Profile from './Profile';

const ViewController=(props)=>{
    const [state, dispatch] = useContext(Context);
    const activeViewsObj = state.activeViews;
    console.log("Active Views: ", activeViewsObj);

    // draw, gallery, myGallery, profile

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
        <section>
            <h4>View Controller</h4>
            { handleProfileView() }
            { handleDrawView() }
        </section>
    )
};

export default ViewController;