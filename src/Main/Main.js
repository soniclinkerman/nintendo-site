import React from "react"
import Navigation from "../Navigation/Navigation"
import Slider from "../Slider/Slider"
import MultiCarouselPage from "../Carasoul/Carasoul"
import Systems from "../Systems/Systems"
import Trending from "../Trending/Trending"
import Scroll from "../Scroll/Scroll"
import Other from "../Other/Other"
import Footer from "../Footer/Footer"
import Sources from "../Sources/Sources"
import News from "../News/News"


const Main = () => {
    return(
        <div className="page-container">
            <Navigation/>
            <Slider/>
            <MultiCarouselPage/>
        
            <Systems price1={'199.99'} price2={'149.99'}/>
            <Trending/>
            <News/>

            <Other/>
            <Sources/>

            <Footer/>

        </div>
    )
}

// fornance road

export default Main