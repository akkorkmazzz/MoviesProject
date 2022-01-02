import {COUNT_MOVIE} from '../types';
const default_state = 0;
export const reducer = ( state = default_state, action ) => {
    switch (action.type){
        case COUNT_MOVIE:
            return state + 1;
        default:
            return state; 
    }
};

export default reducer;