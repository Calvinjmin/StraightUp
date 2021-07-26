// React Imports
import React from "react";
import {useHistory} from "react-router";
import {Link} from "react-router-dom";
import {Button, Form} from "react-bootstrap";

// Dynamo Functions
import {login} from "../functions/dynamo/login_functions";

function Login({set_user}) {
    // React State - Tells if you should show password field
    const [passwordShown, setPasswordShown] = React.useState(false);

    // Const for Form Field
    const fieldInputs = {
        username: "",
        password: "",
    };

    // Getter Function for Form Inputs
    const getFieldInputs = () => {
        return fieldInputs;
    }

    // Toggle Method - Boolean
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    // History Function
    const history = useHistory();

    // Handles Form Submission - FE to BE
    const loginUser = async (event) => {
        event.preventDefault();
        const loginData = await( getFieldInputs() );
        event.target.reset();

        // Field Inputs - Must be sent to backend
        try {
            const user_information = await (login(loginData));
            if (user_information) {
                set_user(user_information.data);
            }
            history.push("/");
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h2>Log In</h2>
            <Form onSubmit={loginUser}>
                <Form.Control type="text" id="formUsername" label="Username" placeholder="Username"
                              onChange={(e) => fieldInputs.username = e.target.value}
                />

                <Form.Group name="passwordGroup" className="mb-3">
                    <Form.Control type={passwordShown ? "text" : "password"}
                                  id="formPassword" label="Password"
                                  placeholder="Password (Case Sensitive)"
                                  onChange={(e) => fieldInputs.password = e.target.value}/>
                    <Form.Check type="checkbox" label="Show Password"
                                onChange={togglePassword}/>
                </Form.Group>

                <Button value="Log In" type="submit">Log In</Button>
            </Form>

            <p>Do you not have an account? Click <Link to="/Signup"> here </Link> to signup.</p>
        </div>
    );
}

export default Login;
