import React, { Component } from "react";
import "./panel.css"

class Weather extends Component {
    render() {
        return <div className="panel">
            <div className="panel-front">Panel Front</div>
            <div className="panel-back">Panel Back</div>
        </div>;
    }
}

export default Weather