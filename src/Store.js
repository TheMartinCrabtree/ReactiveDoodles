
import React, {createContext, useReducer } from 'react';
import Reducer from './reducers/Reducer';

const initialState = {
    username: "",
    activeViews: { draw: false, gallery: false, myGallery: true, profile: true  }
};

const Store=({children})=>{
    const [state, dispatch] = useReducer(Reducer, initialState);

    return(
        <Context.Provider value={[state, dispatch]} >
            {children}
        </Context.Provider>
    )
}

export const Context = createContext(initialState);

export default Store;






