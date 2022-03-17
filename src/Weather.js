import React from "react";
import axios from 'axios';
import Loader from 'react-loader-spinner';

export default function Weather() {
    let city ="Lisbon";
    return(
        <div className="App">
        <h2>Hello from Weather</h2>
        <br />
        <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
            Shecodes
        </a>
        
        </div>
    )
}