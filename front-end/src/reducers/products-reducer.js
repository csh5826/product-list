import { FETCH_PRODUCTS } from '../actions';

export default (state = {count: 0, products:[]}, action) => {
    switch (action.type){
        case FETCH_PRODUCTS:
            return action.payload.data;
        default:
            return state;
    }
}