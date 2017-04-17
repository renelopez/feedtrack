import { combineReducers } from 'redux';
import candidates from './candidates/reducers/candidateRootReducer';

const rootReducer = combineReducers({
    candidates
});

export default rootReducer;

