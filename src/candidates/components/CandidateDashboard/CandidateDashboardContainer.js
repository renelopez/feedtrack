import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as candidateActions from '../../actions/candidateActions';
import { getDashboardCandidatesSelector } from '../../selectors/getDashboardCandidatesSelector';
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
            {this.props.candidates.map((candidate)=>{
                debugger;
                return(
                    <tr>
                        <td>{candidate.id}</td>
                        <td>{candidate.name}</td>
                        <td>{candidate.description}</td>
                    </tr>)
            })}
            </tbody>
        </Table>
        )
    }
}

function mapStateToProps(state,ownProps){
    debugger;
    let candidates=getDashboardCandidatesSelector(state)
    //let candidates=state.get('candidateRoot').get('candidates') || {};
    return {
        candidates: candidates
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions:bindActionCreators(candidateActions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CandidateDashboardContainer);