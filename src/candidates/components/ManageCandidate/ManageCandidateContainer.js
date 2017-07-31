import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import ManageCandidatePresentation from './ManageCandidatePresentation';

class ManageCandidateContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }



    render() {
        return (
            <ManageCandidatePresentation
                candidate={this.props.candidate}
                onChange={this.onChange}
                onSave={this.onSave}
             />
        );
    }
}

ManageCandidateContainer.PropTypes = {
    //myProp:PropTypes.string.isRequired  
};

function mapStateToProps(state, ownProps) {
    let candidate=getCandidateSelector(state);
    return {
        candidate: candidate
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCandidateContainer);