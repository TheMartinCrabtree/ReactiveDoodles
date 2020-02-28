import React, {useContext} from 'react';
import {Context} from '../Store';
import '../App.css';

import StandardCard from './StandardCard';

const Home=()=>{
    const [state, dispatch] = useContext(Context);

    const latestDoodle = "this will be a function to retrieve the latest image";

    const topDoodle = "this will be a function that retrieves the top doodle and profile"


    return(
        <section  >   
            <div>
                <p> 
                    <h3> 
                        {state.username} welcome to Derpy Doodles! A site where you can make terrible drawings to share with your wonderful friends!  
                    </h3>
                </p>
            </div>
            <StandardCard heading={"The latest doodle:"} body={ latestDoodle } />
            <StandardCard heading={"The top doodle:"} body={ topDoodle } />
            <div>
                <p>See the top rated doodles (link) </p>
            </div>
        </section>
    );
}

export default Home;