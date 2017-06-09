import * as types from '../actions/candidateActionTypes';
import Immutable from 'immutable';

const candidatebyId = function(state = Immutable.Map, action) {
    switch(action.type) {
        case types.LOAD_CANDIDATES_SUCCESS:
            return state.set('candidates',action.response);
            break;

        default: {
            return state;
        }
    }
};

export default candidatebyId;

//export const getCandidateById= (state,id) => state[id];