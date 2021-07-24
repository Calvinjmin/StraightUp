// React Imports
import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";

// Components Import
import Home from "./routes/Home";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import NavigationBar from "./components/navigationBar/navigationBar";

// SASS Imports
import './scss/App.scss';

// Interface Imports
import {initial_user} from "./interfaces/user";

function App() {
    const [user, set_user] = React.useState(initial_user);
    return (
        <Router>
            <div>
                <NavigationBar user={user} set_user={set_user}/>
            </div>
            <Switch>
                <Route path="/Signup">
                    <Signup set_user={set_user}/>
                </Route>
                <Route path="/Login">
                    <Login set_user={set_user}/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
