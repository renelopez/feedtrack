import { combineReducers } from 'redux-immutable';
import candidates from './candidatesReducer';

const candidateRootReducer = combineReducers({//
    candidates
});

export default candidateRootReducer;
