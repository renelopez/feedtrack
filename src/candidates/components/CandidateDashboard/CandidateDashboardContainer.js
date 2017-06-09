import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as candidateActions from '../../actions/candidateActions';
import { getDashboardCandidates } from '../../reducers/candidateRootReducer';
import {Table} from 'react-bootstrap';

class CandidateDashboardContainer extends React.Component{
    constructor(props,context){
        super(props,context);
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        this.props.actions.loadCandidates();
    }

    render(){
        return(
        <Table responsive>
            <thead>
            <tr>
                <th>#</th>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>

            </tbody>
        </Table>
        )
    }
}

function mapStateToProps(state,ownProps){
    return {
       // candidates: getDashboardCandidates(state)
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions:bindActionCreators(candidateActions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CandidateDashboardContainer);