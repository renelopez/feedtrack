import React from 'react';
import {
    Route
} from 'react-router-dom';

import FeedbackDashboard from './feedbacks/FeedbackDashboard/FeedbackDashboard';
import CandidateDashboard from './candidates/CandidateDashboard/CandidateDashboard';
import withRouter from './hoc/withRouter';
import withLayout from './hoc/withLayout';
//

export const Routes = props => (
        <div className="app">
            <Route path="/" exact
                   component={FeedbackDashboard} />
            <Route path="/candidates"
                   render={(renderProps) => (
                       <CandidateDashboard {...props} {...renderProps} />
                   )} />
        </div>
);

export default withLayout(withRouter(Routes));
