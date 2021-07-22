// React Bootstrap Imports
import React from "react";
import {Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

// SASS Imports

function Login() {
    // React State - Tells if you should show password field
    const [passwordShown, setPasswordShown] = React.useState(false);

    // Const for Form Field
    const fieldInputs = {
        username: "",
        password: "",
    }

    // Toggle Method - Boolean
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    // Handles Form Submission - FE to BE
    const loginUser = (event) => {
        event.preventDefault();

        // Field Inputs - Must be sent to backend
        console.log(fieldInputs.username);
        console.log(fieldInputs.password);
    }

    return (
        <div>
            <h2>Log In</h2>
            <Form onSubmit={loginUser}>
                <Form.Control type="text" id="formUsername" label="Username" placeholder="Username"
                              onChange={(e) => fieldInputs.username = e.target.value}
                />

                < Form.Group name="passwordGroup" className="mb-3">
                    <Form.Control type={passwordShown ? "text" : "password"}
                                  id="formPassword" label="Password"
                                  placeholder="Password (Case Sensitive)"
                                  onChange={(e) => fieldInputs.password = e.target.value}/>
                    <Form.Check type="checkbox" label="Show Password"
                                onChange={togglePassword}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>

            <p>Do you not have an account? Click <Link to="/Signup"> here </Link> to signup.</p>
        </div>
    );
}

export default Login;
