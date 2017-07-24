import React from 'react';
import {Table,Button} from 'react-bootstrap';
import {withToJS} from '../../../hoc/withToJS';
import {Link} from 'react-router-dom'

const CandidateDashboard = ({candidates,onCreate,onEdit,onDelete}) => {
    return(
        <Table responsive>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th><Button bsStyle="success" onClick={onCreate}>Add New +</Button></th>
            </tr>
            </thead>
            <tbody>
            {candidates.map((candidate)=>{
                return(
                    <tr>
                        <td>{candidate.id}</td>
                        <td>{candidate.name}</td>
                        <td>{candidate.description}</td>
                        <td><Link to={'/candidates/'+candidate.id} className="btn btn-info" >Edit</Link></td>
                        <td><Button bsStyle="danger" onClick={onDelete}>Delete</Button></td>
                    </tr>)
            })}
            </tbody>
        </Table>
    )
};

export default withToJS(CandidateDashboard);