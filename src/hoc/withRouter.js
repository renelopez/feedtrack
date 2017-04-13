import React ,{PropTypes} from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import {Provider} from 'react-redux';

export const withRouter = Wrapped => props => {
    return (
       <Provider store={props.store}>
        <Router>
            <Wrapped {...props}/>
        </Router>
       </Provider>
    )
};


withRouter.propTypes = {
  store: PropTypes.object.isRequired,
};

export default withRouter;