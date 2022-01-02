import {MOVIE_NAME} from '../types';

export const movieName = (index) => {
    return {
        type: MOVIE_NAME,
        payload: index,
    };
};