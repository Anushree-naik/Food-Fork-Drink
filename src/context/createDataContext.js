import React, { useReducer } from 'react';

export default (reducer, actions, initalState) => {
    const Context = React.createContext();

    const Provider = ({ children = null }) => {
        const [state, dispatch] = useReducer(reducer, initalState);

        //action === {saveRestaurants: (dispatch) => {return() => {}}}

        const boundActions = {};

        for (let key in actions) {
            //key === 'saveRestaurants'
            boundActions[key] = actions[key](dispatch)
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        )
    };

    return { Context, Provider };
};

