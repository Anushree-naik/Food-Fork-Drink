import createDataContext from './createDataContext';

const savedItemsReducer = (state, action) => {
    switch (action.type) {
        case 'save_restaurants':
            return [...state, { title: `Restaurants #${state.length + 1}` }];
        default:
            return state;

    }
}

const saveRestaurants = (dispatch) => {
    return () => {
        dispatch({ type: 'save_restaurants' })
    };
};


export const { Context, Provider } = createDataContext(
    savedItemsReducer,
    { saveRestaurants },
    []
);
