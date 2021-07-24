// React Imports
import React from 'react';
import {NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

// Components Import
import Logout from "./logout";

// SCSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';

function ProfileDropdown({user, set_user}) {
    const dropdown_title = user ? "Welcome " + user.firstName : "Welcome";
    return (
        <NavDropdown id="collapsible-nav-dropdown" title={dropdown_title}>
            <NavDropdown.Item as={Link} to="/Login">
                Login
            </NavDropdown.Item>
            <Logout set_user = {set_user}/>
        </NavDropdown>
    );
}

export default ProfileDropdown;