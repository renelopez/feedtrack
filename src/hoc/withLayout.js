import {Nav, NavItem, Navbar, MenuItem, NavDropdown} from 'react-bootstrap';
import React, {PropTypes} from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import {Provider} from 'react-redux';


export const withLayout = Wrapped => props => {
    return (
        <Provider store={props.store}>
            <Router>
                <div className="wrapper">
                    <div className="header">
                        <Navbar inverse collapseOnSelect>
                            <Navbar.Header>
                                <Navbar.Brand>
                                    <a href="#">Feedtrack 2.0</a>
                                </Navbar.Brand>
                                <Navbar.Toggle/>
                            </Navbar.Header>
                            <Navbar.Collapse>
                                <Nav>
                                    <NavItem eventKey={1} href="#">Link</NavItem>
                                    <NavItem eventKey={2} href="#">Link</NavItem>
                                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                        <MenuItem eventKey={3.1}>Action</MenuItem>
                                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                        <MenuItem divider/>
                                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                                    </NavDropdown>
                                </Nav>
                                <Nav pullRight>
                                    <NavItem eventKey={1} href="#">Link Right</NavItem>
                                    <NavItem eventKey={2} href="#">Link Right</NavItem>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                    <div className="content">
                        <Wrapped {...props} />
                    </div>
                    <div className="footer"></div>
                </div>
            </Router>
        </Provider>
    )
};

export default withLayout;