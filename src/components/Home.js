import React, {useContext} from 'react';
import {Context} from '../Store';
import '../App.css';

import StandardCard from './StandardCard';

const Home=()=>{
    const [state, dispatch] = useContext(Context);

    const latestDoodle = "this will be a function to retreive the latest image";

    const topDoodle = "this will be a function that retreives the top doodle and profile"


    return(
        <section  >   
            <div>
                <p> Welcome {state.username} to Derpy Doodles! A site where you can make terrible drawings for your wonderful friends!  </p>
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