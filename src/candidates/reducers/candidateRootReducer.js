//import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import candidatebyId, * as fromCandidateByIds from './candidateByIdReducer';
import candidateIds, * as fromCandidateIds from './candidateIdsReducer';

const candidateRootReducer = combineReducers({//
    candidatebyId,
    candidateIds
});

export default candidateRootReducer;

 export const getDashboardCandidates = (state) => {
//     return state.candidates.candidateIds.map((id)=>{
//         return getCandidateById(state,id)
//     })
 };
//
 export const getCandidateById=(state,id) =>{
//   return fromCandidateByIds.getCandidateById(state.candidates.candidatebyId,id)
 };