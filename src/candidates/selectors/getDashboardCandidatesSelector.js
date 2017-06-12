import {fromJS} from 'immutable';
import {createSelector} from 'reselect';

export const getDashboardCandidatesSelector = createSelector(
    state=>state.get('candidateRoot').get('candidates'),
    candidates => candidates
);