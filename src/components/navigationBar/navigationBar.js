// React Imports
import React from 'react';
import {Nav, Navbar, NavbarBrand} from "react-bootstrap";
import {Link} from "react-router-dom";

// SCSS Imports
import "../../scss/NavigationBar.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

//Components Imports
import ProfileDropdown from "../dropdown/profileDropdown/profileDropdown";

function NavigationBar( {user, set_user} ) {
    return (
        <Navbar>
            <Nav className="container-fluid">
                <NavbarBrand as={Link} to="/" replace>
                    Straight Up
                </NavbarBrand>
                <Nav.Item>Feed</Nav.Item>
                <Nav.Item>Map</Nav.Item>
                <Nav.Item>Messages</Nav.Item>
                <Nav className="ml-auto">
                    <ProfileDropdown user = {user} set_user={set_user}/>
                </Nav>
            </Nav>
        </Navbar>
    );
}

export default NavigationBar;