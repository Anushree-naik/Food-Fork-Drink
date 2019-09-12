import React, { useReducer } from 'react';

const SavedItemsContext = React.createContext();

const savedItemsReducer = (state, action) => {
    switch (action.type) {
        case 'save_restaurants':
            return [...state, { title: `Restaurants #${state.length + 1}` }];
        default:
            return state;

    }
}

export const SavedItemsProvider = ({ children = null }) => {

    const [resultList, dispatch] = useReducer(savedItemsReducer, []);

    const saveRestaurants = () => {
        dispatch({ type: 'save_restaurants' })
    };
    return (
        <SavedItemsContext.Provider value={{ data: resultList, saveRestaurants }}>
            {children}
        </SavedItemsContext.Provider>
    )
};

export default SavedItemsContext;
