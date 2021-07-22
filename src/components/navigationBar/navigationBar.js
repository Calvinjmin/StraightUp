// React Imports
import React from 'react';
import {Nav, Navbar, NavbarBrand} from "react-bootstrap";
import {Link} from "react-router-dom";

// SCSS Imports
import "../../scss/NavigationBar.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

//Components Imports
import ProfileDropdown from "../profileDropdown/profileDropdown";

function NavigationBar() {
    return (
        <Navbar>
            <Nav className="container-fluid">
                <NavbarBrand>
                    <Link to="/">Straight Up</Link>
                </NavbarBrand>
                <Nav className="ml-auto">
                    <ProfileDropdown/>
                </Nav>
            </Nav>
        </Navbar>
    );
}

export default NavigationBar;