import React from "react"
import ac from "./images/ac_horizon_box.png"
import xenoblade from "./images/xenoblade_box.png"
import m_s from "./images/mario_and_sonic_tokyo_2020_box.png"
import minecraft_dungeons from "./images/minecraft_dungeons_box.png"
import "./Trending.css"



const Trending = () => {
    return(
        <div>
            <div className="trending">
                <div className="container">
               

                    <div className="trending-head">
                        <h3>Trending Games</h3>
                        <a href=""> Find these reccomendations helpful?</a>
                    </div>

                    <div className="trending-bar">

                        <div className="columns">

                            <div className="trending-comp col">
                                <a className="product" href="">
                                <img src={ac}/>
                                <a href="#" className="trending-title">Animal Crossing<span>TM</span>:<br/> New Horizon</a>
                            
                                <p className="date">Released: 03/20/2020</p>
                                <p className="price">$59.99</p>
                                <a className="switch" href="" >Nintendo Switch</a>
                                </a>
                            </div>

                            <div className="trending-comp special col">
                                <a className="product" href="">
                                <img src={minecraft_dungeons}/>
                                <a href="#" className="trending-title">Minecraft Dungeons</a>
                            
                                <p className="date">Released: 05/26/2020</p>
                                <p className="price">$19.99</p>
                                <a className="switch" href="" >Nintendo Switch</a>
                                </a>
                            </div>
                        </div>

                        <div className="columns">
                        <div className="trending-comp col">
                                <a className="product" href="">
                                <img src={xenoblade}/>
                                <a href="#" className="trending-title">Xenoblade Chronicles<span>TM</span>:<br/> Definitive Edition</a>
                            
                                <p className="date">Released: 05/29/2020</p>
                                <p className="price">$59.99</p>
                                <a className="switch" href="" >Nintendo Switch</a>
                                </a>
                            </div>

                            

                            <div className="trending-comp col">
                                <a className="product" href="">
                                <img src={m_s}/>
                                <a href="#" className="trending-title">Mario & Sonic at the<br/> Olympic Games<br/>Tokyo 2020</a>
                            
                                <p className="date">Released: 03/20/2020</p>
                                <p className="price">$59.99</p>
                                <a className="switch" href="" >Nintendo Switch</a>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <hr class="line"/>

        </div>
    )

}

export default Trending