
import React from "react";
import "./Footer.css";
import { geolocated } from "react-geolocated";


class Footer extends React.Component {
    
    
    render() {
        return !this.props.isGeolocationAvailable ? (
            <div className="footer">Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div className="footer">Geolocation is not enabled</div>
        ) : this.props.coords ? (
           <div className="footer">
             <span> Location: ( latitude {this.props.coords.latitude.toFixed(3)}</span>
             <span>longitude {this.props.coords.longitude.toFixed(3)} )</span>
           </div>
                 
        ) : (
            <div className="footer">Getting the location data&hellip; </div>
        );
    }
}
export default geolocated({
    positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
})(Footer);