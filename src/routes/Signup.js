// React Bootstrap Imports
import React from "react";
import {Button, Form} from "react-bootstrap";

// SASS Imports

function Signup() {
    const [passwordShown, setPasswordShown] = React.useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
        console.log(passwordShown);
    };

    return (
        <div>
            <h2>Create Account</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Control type="text" placeholder="First Name"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Control type="text" placeholder="Last Name"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control type="email" placeholder="Email Address"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Control type="text" placeholder="Username"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Control type={passwordShown ? "text" : "password"}
                                  placeholder="Password (Case Sensitive)"/>
                    <Form.Check type="checkbox" label="Show Password" onChange={togglePassword}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </div>
    );
}

export default Signup;
