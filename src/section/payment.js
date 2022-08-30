import React, { useState, useEffect} from "react";
import details from './productList.json';
import './index.css';

function Payment() {
    const [ list, setList] = useState(details);

    useEffect(() =>  {
        
    })

    return(
        <div className="row">
            <div className="card">
                <div className="card-content">
                    <h2>Bass Trombone</h2>
                    <h3>$600</h3>
                    <ol>
                        <li>Lorem ipsum.</li>
                        <li>Lorem ipsum.</li>
                        <li>Lorem ipsum.</li>
                        <li>Lorem ipsum.</li>
                    </ol>
                    <button>SELECT</button>
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <h2>Bass Trombone</h2>
                    <h3>$900</h3>
                    <ol>
                        <li>Lorem ipsum.</li>
                        <li>Lorem ipsum.</li>
                        <li>Lorem ipsum.</li>
                        <li>Lorem ipsum.</li>
                    </ol>
                    <button>SELECT</button>
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <h2>Tenor Trombone</h2>
                    <h3>$1200</h3>
                    <ol>
                        <li>Lorem ipsum.</li>
                        <li>Lorem ipsum.</li>
                        <li>Lorem ipsum.</li>
                        <li>Lorem ipsum.</li>
                    </ol>
                    <button>SELECT</button>
                </div>
            </div>
        </div>
    )
}

        

export default Payment;