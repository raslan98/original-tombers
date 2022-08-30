import React from "react";
import './index.css'

function OurWork(props) {
        return(
            <div className="our-work">
            <div className="row">
                <div className="service-image">
                    <img src={props.fly[0].imgUrl} />
                </div>
                <div className="service-content">
                    <h1>{props.fly[0].heading}</h1>
                    <p>Our trombones use the shiniest brass which is sourced locally. This will increase the longevity of your purchase.</p>
                </div>
            </div>
            <div className="row">
                <div className="service-image">
                    <img src="/favicon.ico" alt="fire" />
                </div>
                <div className="service-content">
                    <h1>Fast Shipping</h1>
                    <p>We make sure you recieve your trombone as soon as we have finished making it. We also provide free returns if you are not satisfied.</p>
                </div>
            </div>
            <div className="row">
                <div className="service-image">
                    <img src="/favicon.ico" alt="fire" />
                </div>
                <div className="service-content">
                    <h1>Quality Assurance</h1>
                    <p>For every purchase you make, we will ensure there are no damages or faults and we will check and test the pitch of your instrument.</p>
                </div>
            </div>
            </div>
        )
}

export default OurWork;