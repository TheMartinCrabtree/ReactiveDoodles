import React from 'react';
import '../App.css';

const StandardCard=(props)=>{
    // generic stylized card that accepts a heading and body


    return(
        <article className="Standardcard-border">
            <div className="Standardcard-window">
                <h4>{props.heading}</h4>
                <div>
                    
                    { props.body }
                </div>
            </div>
        </article>
    )
}

export default StandardCard;