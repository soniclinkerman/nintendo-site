import React from "react"
import direct from "./images/nintendo_direct.png"
import online from "./images/nintendo_online.png"
import "./Other.css"
const Other = () => (
    <div className="other">
        <div className="other-container">

            <div className="other-columns">

                <div className="other-sec">
                    <img className="other-img" src={direct}/>
                    <p className="other-info"> Exclusive news broadcast directly to you, the player </p>
                </div>

                <div className="other-sec">
                    <p className="other-soon"><strong>Coming</strong> Soon</p>
                    <p className="other-info">A handy list of our upcoming game releases. </p>

                </div>
            </div>

            <div className="other-columns">


                <div className="other-sec">
                    <p className="other-deals"><strong>Sales</strong> & Deals</p>
                    <p className="other-info">Our top offers, price drops, and deals  </p>
                </div>

                <div className="other-sec">
                    <img className="other-img" src={online}/>
                    <p className="other-info">Enjoy online multiplayer and more with Nintendo Switch Online </p>
                </div>
            </div>
            

        </div>
    </div>

)

export default Other