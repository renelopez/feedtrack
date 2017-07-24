import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as candidateActions from '../../actions/candidateActions';
import { getDashboardCandidatesSelector } from '../../selectors/getDashboardCandidatesSelector';
import CandidateDashboardPresentation from './CandidateDashboardPresentation';


class CandidateDashboardContainer extends React.Component{
    constructor(props,context){
        super(props,context);
    }

    componentDidMount(){
        this.fetchData();
    }

    onEdit(candidate){
        console.log("Im Editissng");
    }

    fetchData(){
        this.props.actions.loadCandidates();
    }

    render(){
        return(
            <CandidateDashboardPresentation candidates={this.props.candidates}
                                            onCreate={this.onCreate}
                                            onEdit={this.onEdit} onDelete={this.onDelete}/>
        )
    }
}

function mapStateToProps(state,ownProps){
    let candidates=getDashboardCandidatesSelector(state);
    return {
        candidates: candidates
    }
}
//
function mapDispatchToProps(dispatch){
    return {
        actions:bindActionCreators(candidateActions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CandidateDashboardContainer);