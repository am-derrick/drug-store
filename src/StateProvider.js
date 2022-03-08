import React, { createContext, useContext, useReducer} from 'react';

//prepares Data Layer
export const StateContext = createContext();

//provides the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//pulls info from Data Layer
export const useStateValue = () => useContext(StateContext);