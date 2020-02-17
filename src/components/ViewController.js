import React, { useContext, useEffect } from 'react';
import { Context } from '../Store';

import Home from './Home'
import Draw from './Draw';
import Gallery from './Gallery';
import Profile from './Profile';
import About from './About';

const ViewController=(props)=>{
    const [state, dispatch] = useContext(Context);
    const activeView = state.activeViews;
    console.log("Active Views: ", activeView);


    const displayActiveView=()=>{
        // activeViews: HOME, DRAW, GALLERY, PROFILE, ABOUT
        console.log("VC disp Active View:", activeView )
        switch(activeView){
            case 'HOME':
                return <Home />;
            case 'DRAW':
                return <Draw />;     
            case 'GALLERY':
                return <Gallery />;
            case 'PROFILE':
                return <Profile />; 
            case 'ABOUT':
                return <About />; 
            default:
                return <Home />;
        }
    }

    return(
        <section className="ViewController-container" >
            <div className="View-primary">
                { displayActiveView() }
            </div>
        </section>
    )
};

export default ViewController;