// React Imports
import React from 'react';
import {NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

// SCSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';

function ProfileDropdown( {user}) {
    const dropdown_title = user ? "Welcome " + user.firstName : "Weclome";
    return (
        <NavDropdown id="collasible-nav-dropdown" title={dropdown_title}>
            <NavDropdown.Item as={Link} to="/Login">
                Login
            </NavDropdown.Item>
        </NavDropdown>
    );
}

export default ProfileDropdown;