import * as types from './candidateActionTypes';
import * as ajaxActions from './../../common/ajaxActions';
import feedtrackApi from '../../api/mockFeedtrack';
//import {normalize} from 'normalizr';
import Immutable from 'immutable';
import {candidateSchema,candidateListSchema} from '../schemas/candidateSchema';

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
            debugger;
            let mapita=Immutable.fromJS(candidates);
            dispatch(loadCandidatesSuccess(mapita));
        },(error)=>{
            dispatch(loadCandidatesFailure(error))
        })
    }
}