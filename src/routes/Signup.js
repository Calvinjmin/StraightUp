// React Bootstrap Imports
import React from "react";
import {Button, Form} from "react-bootstrap";

// SASS Imports

function Signup() {
    // React State - Tells if you should show password field
    const [passwordShown, setPasswordShown] = React.useState(false);

    // Const for Form Field
    const fieldInputs = {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
    }

    // Toggle Method - Boolean
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    // Handle Submission for Creating Account Form
    const createAccount = (event) => {
        event.preventDefault();
        console.log(fieldInputs);
    }

    return (
        <div>
            <h2>Create Account</h2>
            <Form onSubmit={createAccount}>
                <Form.Group className="mb-3">
                    <Form.Control type="text" id="formFirstName" label="First Name" placeholder="First Name"
                                  onChange={(e) => fieldInputs.firstName = e.target.value}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="text" id="formLastName" label="Last Name" placeholder="Last Name"
                                  onChange={(e) => fieldInputs.lastName = e.target.value}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="email" id="formEmail" label="Email" placeholder="Email Address"
                                  onChange={(e) => fieldInputs.email = e.target.value}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Username" id="formUsername" label="Username"
                                  onChange={(e) => fieldInputs.username = e.target.value}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type={passwordShown ? "text" : "password"}
                                  id="formPassword" label="Password"
                                  placeholder="Password (Case Sensitive)"
                                  onChange={(e) => fieldInputs.password = e.target.value}/>
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
