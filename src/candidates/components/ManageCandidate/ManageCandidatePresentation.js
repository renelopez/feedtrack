import React from 'react';
import PropTypes from 'prop-types'
import {FormGroup,ControlLabel,FormControl,HelpBlock} from 'react-bootstrap';
import {withToJS} from '../../../hoc/withToJS';

const ManageCandidatePresentation = ({candidate,onChange}) => {
    return (
        <form>
            <FormGroup controlId="nameText">
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text"
                             placeholder="Enter your name"
                             onChange={onChange}
                />
                <FormControl.Feedback />
            </FormGroup>
        </form>
    )
};

ManageCandidatePresentation.PropTypes = {
    candidate: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}

export default withToJS(ManageCandidatePresentation);