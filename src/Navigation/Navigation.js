import React from "react"
import "./Navigation.css"
import flag from "./flags.png"
import glass from "./search.png"
const Navigation = () => {
    return(
        <div className="navigation">
             
            <div className="top-nav">
            <div className="logo"> 
                    <p>Nintendo</p>
                    </div>
           
                
                <nav>
                  
                    <a className="search" href="/">
                        <span className="search-text">Search</span>
                           <img  className="search-img" src={glass} alt="search"/>
                       </a>

                    <a className="region" href="/">
                        <span className="region-text">Change Region</span>
                        <img className="flag-img" src={flag} alt="American flag"/>
                        </a>
                    <a href="/">

                        <button className="login">
                            Login/Sign Up
                        </button>
                    </a>
                </nav>

            </div>

            <div className="bottom-nav">
                    <ul className="">
                        <li className="one">
                            <p>
                                Nintendo Switch
                            </p>
                        </li>

                        <li className="two">
                            <p>
                            Nintendo 3DS | 2DS
                            </p>
                        </li>

                        <li className="three">
                            <p>Game Store
                                </p>
                        </li>

                        <li className="four">
                            <p>amiibo</p>
                        </li>

                        <li className="five">
                            <p>Play Nintendo</p>
                        </li>

                        <li className="six">
                            <p>Support</p>
                        </li>

                        <li className="seven">
                            <p>My Nintendo</p>
                        </li>     
                    </ul>


            </div>

        </div>
    )
}


export default Navigation