import React from "react";
import "./News.css";
import xenoblade from "../Trending/images/xenoblade_box.png"


const News = () => {
    
    return(
        <div className="news">
            <div className="news-container">

                <div className="news-section-one">

                </div>

                <div className="releases">
                    <div className="trending-head">
                        <p className="releases-title">New video game releases</p>
                        <a href="" className="see-all">See all</a>
                    </div>

                    <div className="release-games">
                        <div className="release-col">
                            <ul>
                                <li className="release-game">
                                    <a>
                                        <div>
                                            <img src={xenoblade} />
                                        </div>

                                        <div>
                                            <span className="release-date"> 5.29.20</span>
                                            <h4 className="release-name">Xenoblade Chronicles™: Definitive Edition</h4>
                                            <p class="release-console">Nintendo Switch</p>
                                        </div>

                                    </a>
                                </li>
                            </ul>


                        <div className="release-games">
                            <ul>
                                <li className="release-game">
                                    <a>
                                        <div>
                                            <img src={xenoblade} />
                                        </div>

                                        <div>
                                            <span className="release-date"> 5.29.20</span>
                                            <h4 className="release-name">Xenoblade Chronicles™: Definitive Edition</h4>
                                            <p class="release-console">Nintendo Switch</p>
                                        </div>

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    </div>

                    <div className="release-games">
                        <div className="release-col">
                            <ul>
                                <li className="release-game">
                                    <a>
                                        <div>
                                            <img src={xenoblade} />
                                        </div>

                                        <div>
                                            <span className="release-date"> 5.29.20</span>
                                            <h4 className="release-name">Xenoblade Chronicles™: Definitive Edition</h4>
                                            <p class="release-console">Nintendo Switch</p>
                                        </div>

                                    </a>
                                </li>
                            </ul>


                        <div className="release-games">
                            <ul>
                                <li className="release-game">
                                    <a>
                                        <div>
                                            <img src={xenoblade} />
                                        </div>

                                        <div>
                                            <span className="release-date"> 5.29.20</span>
                                            <h4 className="release-name">Xenoblade Chronicles™: Definitive Edition</h4>
                                            <p class="release-console">Nintendo Switch</p>
                                        </div>

                                    </a>
                                </li>
                            </ul>
                            </div>
                    </div>

                    </div>

                    
                  

                    

                </div>

            </div>

        </div>
    )
}

export default News