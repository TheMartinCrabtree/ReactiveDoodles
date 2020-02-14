import React from 'react';
import ChildComponent from './ChildComponent'

const ParentComponent=()=>{

    return(
        <div style={{ backgroundColor: 'blue', padding: '10px', width: '50vw' }} >
            <h3>This is ParentComponent</h3>
            <ChildComponent>
                <p style={{ backgroundColor: 'white', padding: '10px' }} >
                    This paragraph will show up in the child, but was sent from the parent.
                </p>
            </ChildComponent>

        </div>
    );
}

export default ParentComponent;



