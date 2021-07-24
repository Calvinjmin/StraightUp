// React Imports
import React from "react";
import {useHistory} from "react-router";
import {NavDropdown} from "react-bootstrap";

// User Imports - Interface
import {initial_user} from "../../../interfaces/user";

function Logout({set_user}) {
    const history = useHistory();

    const handleLogout = () => {
        set_user(initial_user);
        history.push("/");
    };

    return (<NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>);
}

export default Logout;