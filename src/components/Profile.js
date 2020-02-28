import React, {useContext} from 'react';
import {Context} from '../Store';

const Profile=(props)=>{
    const [state, dispatch] = useContext(Context);
    
    return(
        <section >
            <h4> {state.username} </h4>

            <div>profile picture</div>
            <div>email address</div>
            <div>about me</div>
            <div>My Gallery</div>


        </section>
    );
}

export default Profile;