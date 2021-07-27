// React Imports
import React from "react";
//import {Image} from "react-bootstrap";

// Components Import
// import basketballImage from "../images/basketball.png";
// <Image src={basketballImage} className="basketballImage"></Image>

// SASS Imports
import "../scss/Home.scss";

function Home() {
    return (
        <div className="homeContainer">
            <div className='centerText'>
                <h3>Straight Up</h3>
                <p>Social Media App for Pickup Basketball</p>
            </div>
        </div>
    );
}

export default Home;
