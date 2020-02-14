
import React, {createContext, useReducer } from 'react';
import Reducer from './reducers/Reducer';

const initialState = {
    username: "",
    activeViews: { home: true, draw: false, gallery: false, profile: false, about: false  }
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






