import {MOVIE_NAME} from '../types';
const default_state = "";
export const reducer = ( state = default_state, action ) => {
    switch (action.type){
        case MOVIE_NAME:
            return action.payload;
        default:
            return state; 
    }
};

export default reducer;