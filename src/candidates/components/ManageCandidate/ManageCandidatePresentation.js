import React from 'react';
import PropTypes from 'prop-types'
import {FormGroup,ControlLabel,FormControl,HelpBlock} from 'react-bootstrap';
import {withToJS} from '../../../hoc/withToJS';

const ManageCandidatePresentation = ({candidate,onChange}) => {
    return (
        <form>
            <h1>Manage Candidate</h1>
            <FormGroup controlId="nameText">
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text"
                             placeholder="Enter your name"
                             onChange={onChange}
                />
                <FormControl.Feedback />
            </FormGroup>
            <FormGroup controlId="lastNameText">
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text"
                             placeholder="Enter your last name"
                             onChange={onChange}
                />
                <FormControl.Feedback />
            </FormGroup>
            <FormGroup controlId="companyText">
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text"
                             placeholder="Enter your company"
                             onChange={onChange}
                />
                <FormControl.Feedback />
            </FormGroup>
            <FormGroup controlId="currentRoleText">
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text"
                             placeholder="Enter your current role"
                             onChange={onChange}
                />
                <FormControl.Feedback />
            </FormGroup>
            <FormGroup controlId="currentYearsOfExperience">
                <ControlLabel>Select</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                </FormControl>
            </FormGroup>
        </form>
    )
};

ManageCandidatePresentation.PropTypes = {
    candidate: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}

export default withToJS(ManageCandidatePresentation);