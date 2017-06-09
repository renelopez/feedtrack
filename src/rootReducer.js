//import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import candidates from './candidates/reducers/candidateRootReducer';

const rootReducer = combineReducers({
    candidates
});

export default rootReducer;

