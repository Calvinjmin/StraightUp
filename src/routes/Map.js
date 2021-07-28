// React Imports
import React from "react";
import GoogleMapReact from 'google-map-react';

// Scss Import
import "../scss/Map.scss";

function MapRoute() {
    const location = {
        center : {
            lat: 37.42216,
            lng: -122.08427,
        },
        zoom: 11
    }
    return (
        <div className="GoogleMapContainer">
            <h2 className="map-h2">Pick Up Games Near Me</h2>
            <div className="GoogleMap">
                <GoogleMapReact
                    bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_API_KEY}}
                    defaultCenter= {location.center}
                    defaultZoom= {location.zoom}
                >
                </GoogleMapReact>
            </div>
        </div>
    );
}

export default MapRoute;

