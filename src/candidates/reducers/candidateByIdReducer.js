import * as types from '../actions/candidateActionTypes';

const candidatebyId = function(state = {}, action) {
    switch(action.type) {
        case types.LOAD_CANDIDATES_SUCCESS:
            return {...state,
                ...action.response.entities.candidates};
            break;

        default: {
            return state;
        }
    }
};

export default candidatebyId;

export const getCandidateById= (state,id) => state[id];