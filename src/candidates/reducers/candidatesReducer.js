import * as types from '../actions/candidateActionTypes';
import Immutable from 'immutable';

const candidates = function(state=Immutable.List(), action) {
    switch(action.type) {
        case types.LOAD_CANDIDATES_SUCCESS:
            //state.set('candidates',action.response);
            return Immutable.fromJS(action.response);
            break;

        default: {
            return state;
        }
    }
};

export default candidates;