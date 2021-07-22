// React Bootstrap Imports
import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";

// Components Import
import Home from "./Home";
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
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
