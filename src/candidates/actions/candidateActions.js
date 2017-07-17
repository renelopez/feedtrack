import * as types from './candidateActionTypes';
import * as ajaxActions from './../../common/ajaxActions';
import feedtrackApi from '../../api/mockFeedtrack';

export function loadCandidatesSuccess(candidates) {
    return { type: types.LOAD_CANDIDATES_SUCCESS,response:candidates }
}

export function loadCandidatesFailure(error) {
    return { type: types.LOAD_CANDIDATES_FAILURE,response:error }
}

export function loadCandidates(){
    ajaxActions.beginAjaxCall();
    return function(dispatch){
        return feedtrackApi.getAllCandidates().then((candidates)=>{
            dispatch(loadCandidatesSuccess(candidates));
        },(error)=>{
            dispatch(loadCandidatesFailure(error))
        })
    }
}