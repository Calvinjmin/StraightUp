// React Bootstrap Imports
import {Container} from "react-bootstrap";

// Components Import
import NavigationBar from "./components/navigationBar/navigationBar";

// SASS Imports
import './scss/App.scss';

function App() {
    return (
        <Container>
            <NavigationBar/>
        </Container>
    );
}

export default App;
