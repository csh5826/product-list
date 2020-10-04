import { FETCH_PRODUCTS, FETCH_PRODUCTS_BY_CATEGORY } from '../actions';

export default (state = {}, action) => {
    switch (action.type){
        case FETCH_PRODUCTS:
            return action.payload.data;
        case FETCH_PRODUCTS_BY_CATEGORY:
            return action.payload.data;
        default:
            return state;
    }
}