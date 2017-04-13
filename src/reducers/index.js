import { combineReducers } from 'redux';
import byId from './byId';

const rootReducer = combineReducers(
    byId
);

export default rootReducer;
