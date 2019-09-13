import createDataContext from './createDataContext';
import jsonserver from '../api/jsonserver';

const savedItemsReducer = (state, action) => {
    switch (action.type) {

        case 'get_Restaurants':
            return action.payload;
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
        const response = await jsonserver.get('/saveditems');
        dispatch({ type: 'get_Restaurants', payload: response.data })
    };
};

const saveRestaurants = (dispatch) => {
    return async (id) => {
        //await jsonserver.post('/saveditems', {id:id});
        dispatch({ type: 'save_restaurants', payload: id })
    };
};

const deleteRestaurants = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_restaurants', payload: id })
    };
};

export const { Context, Provider } = createDataContext(
    savedItemsReducer,
    { saveRestaurants, deleteRestaurants, getRestaurants },
    [{ title: 'Restaurant #1', id: 1 }]
);
