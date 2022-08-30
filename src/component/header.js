import React from "react";
import FormValidation from "./form";
import './index.css';

class HeaderComponent extends React.Component{
    
    render() {

        return ( <div className="header">
        <div className="row-header">
            <div className="header-image">
                <img src='/orginal-tombers.png' alt="tombers"/>
            </div>
            <div className="list-header">
                <ul>
                    <li><a href="_blank">Features</a></li>
                    <li><a href="_blank">How It Works</a></li>
                    <li><a href="_blank">Pricing</a></li>
                </ul>
            </div>
        </div>
        <div className="sub-header">
            <h1>Handcrafted,home-made masterpieces</h1>
            <FormValidation />
        </div>
        </div>
        )
    }
}

export default HeaderComponent;