import * as types from '../actions/candidateActionTypes';

const candidateIds = (state = [], action)=> {
    switch (action.type) {
        case types.LOAD_CANDIDATES_SUCCESS: {
            return action.response.result;
        }
    }
    return state;
};

export default candidateIds;

//export const getIds=(state) => state;