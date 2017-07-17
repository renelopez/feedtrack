import React from 'react';
import {Table,Button} from 'react-bootstrap';
import {withToJS} from '../../../hoc/withToJS';

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
                        <td><Button bsStyle="info" onClick={onEdit}>Edit</Button></td>
                        <td><Button bsStyle="danger" onClick={onDelete}>Delete</Button></td>
                    </tr>)
            })}
            </tbody>
        </Table>
    )
};

export default withToJS(CandidateDashboard);