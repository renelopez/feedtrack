import React from 'react';
import {
    Route
} from 'react-router-dom';

import FeedbackDashboard from './feedbacks/FeedbackDashboard/FeedbackDashboard';
import CandidateDashboardContainer from './candidates/components/CandidateDashboard/CandidateDashboardContainer';
import ManageCandidateContainer from './candidates/components/ManageCandidate/ManageCandidateContainer';
import withLayout from './hoc/withLayout';
//

export const Routes = props => (
        <div className="app">
            <Route path="/" exact
                   component={FeedbackDashboard} />
            <Route path="/candidates" exact
                   render={(renderProps) => (
                       <CandidateDashboardContainer {...props} {...renderProps} />
                   )} />
            <Route path="/candidates/:candidateId" exact
                   render={(renderProps) => (
                       <ManageCandidateContainer {...props} {...renderProps} />
                   )}
            />
        </div>
);

export default withLayout(Routes);
