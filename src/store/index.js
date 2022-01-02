import { createStore, combineReducers } from 'redux';
import Counter from './reducers/counter';
import MovieName from './reducers/movieName';

const reducers = combineReducers({
    counter: Counter,
    movieName: MovieName,
});

const store = createStore(reducers);

export default store;