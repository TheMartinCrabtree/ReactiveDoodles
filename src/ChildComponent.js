// FOR DEMO ONLY!!!
// REMOVE FROM FINAL

import React from 'react';

const ChildComponent=(props)=>{

    return(
        <div style={{ backgroundColor: 'grey', padding: '10px' }} > 
            <h4> This is ChildComponent </h4>
            { props.children }
        </div>

    );
}

export default ChildComponent;




