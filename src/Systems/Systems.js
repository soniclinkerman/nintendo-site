import React from "react"
import "./Systems.css"
import Switch from "./images/Switch.png"
import DS from "./images/Nintendo-2DS-XL.png"

const Systems = ({price1, price2}) => {
    return(
        <div>
             <h1 class="system-title">Explore gaming systems</h1> 
            <div class="systems">
           
                <div class="system-one">
                    <div class="container">
                        <img src={Switch} alt="Nintendo Switch"/>
                        <p><strong>Nintendo Switch
                            <br/>
                            Starting at ${price1}
                            <span>MSRP*</span>
                            </strong>
                        </p>
                        </div>
                </div>

                <div class="system-two">
                    <div class="container">
                        <img src={DS} alt="Nintendo 2DS"/>
                        <p><strong>Nintendo 2DS XL
                            <br/>
                            Starting at ${price2}
                            <span>MSRP*</span>
                            </strong>
                        </p>
                    </div>
                </div>
          
            </div>
            <hr class="line"/>

        </div>
    )
}

export default Systems