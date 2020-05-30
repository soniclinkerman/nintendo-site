import React from "react";
import "./Slider.css"
import { Slide } from 'react-slideshow-image';

import Mansion from "./images/luigis-mansion-3-switch-hero.jpg"
import Horizon from "./images/animal-crossing-new-horizons.jpg"
import Dungeon from "./images/mystery-dungeon.jpg"
import Kart from "./images/mario-kart-tour.png"

import Rating from "./images/rating.svg"

const slideImages = [
    Horizon,
    Dungeon,
    Mansion,
    Kart
]

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
  }

const Slider = () => {
    return(
        <div id="main-slide">
            <Slide>

                <div className="each-slide">
                    <div className ="slide-one" style={{'backgroundImage': `url(${slideImages[0]})`}}>

                    <div className="available">
                        <div className="container">
                            <p>Available Now</p>
                            <div class="col-1">
                                <img clasName="ratings" src={Rating}/>
                                <a className="site-link" href="/">Visit Site</a>
                            </div>
                        </div>
                    </div>

                      
                </div>
            </div>

            <div className="each-slide">
                <div className="slide-two" style={{'backgroundImage': `url(${slideImages[1]})`}}>

                    <div className="available">
                            <div className="container">
                                <p>Available Now</p>
                                <div class="col-1">
                                    <img clasName="ratings" src={Rating}/>
                                    <a className="site-link" href="/">Visit Site</a>
                                </div>
                            </div>
                        </div>
                
                </div>
            </div>

            <div className="each-slide">
                <div className="slide-three" style={{'backgroundImage': `url(${slideImages[2]})`}}>
                    <div className="available">
                            <div className="container">
                                <p>Available Now</p>
                                <div class="col-1">
                                    <img clasName="ratings" src={Rating}/>
                                    <a className="site-link" href="/">Visit Site</a>
                                </div>
                            </div>
                        </div>

                </div>
            </div>

            <div className="each-slide">
                <div className="slide-four" style={{'backgroundImage': `url(${slideImages[3]})`}}>
                    <div className="available">
                            <div className="container">
                                <p>Available Now</p>
                                <div class="col-1">
                                    <img clasName="ratings" src={Rating}/>
                                    <a className="site-link" href="/">Visit Site</a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

        </Slide>
      
      </div>
    )
}

export default Slider