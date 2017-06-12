//import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import candidateRoot from './candidates/reducers/candidateRootReducer';

const rootReducer = combineReducers({
    candidateRoot
});

export default rootReducer;

