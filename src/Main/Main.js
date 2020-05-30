import React from "react"
import Navigation from "../Navigation/Navigation"
import Slider from "../Slider/Slider"
import MultiCarouselPage from "../Carasoul/Carasoul"
import Systems from "../Systems/Systems"
import Trending from "../Trending/Trending"


const Main = () => {
    return(
        <div className="page-container">
            {/* <Navigation/> */}
            <Slider/>
            <MultiCarouselPage/>
            <Systems price1={'199.99'} price2={'149.99'}/>
            <Trending/>

        </div>
    )
}

// fornance road

export default Main