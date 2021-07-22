// React Imports
import React from 'react';
import {NavDropdown} from "react-bootstrap";

// SCSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';

function ProfileDropdown() {
    return (
        <NavDropdown id="collasible-nav-dropdown" title="Welcome">
            <NavDropdown.Item>Login</NavDropdown.Item>
            <NavDropdown.Item>Logout</NavDropdown.Item>
        </NavDropdown>
    );
}

export default ProfileDropdown;