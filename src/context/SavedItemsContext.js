import createDataContext from './createDataContext';
import jsonserver from '../api/jsonserver';

const savedItemsReducer = (state, action) => {
    switch (action.type) {
        case 'save_restaurants':
            return ([...state, { id: Math.floor(Math.random() * 99990), title: `Restaurant #${state.length + 1}` }]);
        case 'delete_restaurants':
            return state.filter((saveRestaurants) => saveRestaurants.id !== action.payload);
        default:
            return state;
    }
}

const getRestaurants = (dispatch) => {
    return async () => {
        await jsonserver.get('/saveditems')
    };
};

const saveRestaurants = (dispatch) => {
    return () => {
        dispatch({ type: 'save_restaurants' })
    };
};

const deleteRestaurants = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_restaurants', payload: id })
    };
};

export const { Context, Provider } = createDataContext(
    savedItemsReducer,
    { saveRestaurants, deleteRestaurants },
    []
);
