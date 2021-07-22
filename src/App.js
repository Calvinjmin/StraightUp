// React Bootstrap Imports
import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";

// Components Import
import Home from "./routes/Home";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import NavigationBar from "./components/navigationBar/navigationBar";

// SASS Imports
import './scss/App.scss';

function App() {
    return (
        <Router>
            <div>
                <NavigationBar/>
            </div>
            <Switch>
                <Route path="/Signup">
                    <Signup/>
                </Route>
                <Route path="/Login">
                    <Login/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
