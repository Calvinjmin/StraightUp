// React Imports
import React from "react";
import {Button, Form} from "react-bootstrap";

// Dynamo Functions
import {create_user} from "../functions/dynamo/login_functions";

// Scss Import
import "../scss/Signup.scss";

function Signup({set_user}) {
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

    // Getter Function for Form Inputs
    const getFieldInputs = () => {
        return fieldInputs;
    }

    // Toggle Method - Boolean
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    // Handle Submission for Creating Account Form
    const createAccount = async (event) => {
        event.preventDefault();
        const signUpData = await( getFieldInputs() );
        event.target.reset();

        // Field Inputs - Must be sent to backend
        try {
            const user_information = await (create_user(signUpData));
            if (user_information) {
                set_user(user_information.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="Signup">
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
