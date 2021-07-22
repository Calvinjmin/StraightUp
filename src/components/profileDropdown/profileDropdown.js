// React Imports
import React from 'react';
import {NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

// SCSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';

function ProfileDropdown() {
    return (
        <NavDropdown id="collasible-nav-dropdown" title="Welcome">
            <NavDropdown.Item>
                <Link to="/Login">Login</Link>
            </NavDropdown.Item>
        </NavDropdown>
    );
}

export default ProfileDropdown;