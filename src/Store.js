
import React, {createContext, useReducer } from 'react';
import Reducer from './reducers/Reducer';

let activeViewsObj = { 
    draw: false,
    gallery: false,
    myGallery: true,
    profile: true
}

const initialState = {
    username: "",
    activeViews: activeViewsObj
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