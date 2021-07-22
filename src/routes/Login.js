// React Bootstrap Imports
import React from "react";
import {Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

// SASS Imports

function Login() {
    const [passwordShown, setPasswordShown] = React.useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const loginUser = (event) => {
        event.preventDefault();
        console.log(event.target);
    }

    return (
        <div>
            <h2>Log In</h2>
            <Form onSubmit={loginUser}>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Username"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type={passwordShown ? "text" : "password"}
                                  placeholder="Password (Case Sensitive)"/>
                    <Form.Check type="checkbox" controlId="showPassword" label="Show Password"
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
