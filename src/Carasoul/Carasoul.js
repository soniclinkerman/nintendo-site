import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

import "./carasoul.css"

const CarouselPage = () => {
  return (
      <div>
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
            <h1 className="title-head">Titles</h1>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="w"
                src="https://images.nintendolife.com/0acafd3991ee2/74ce0f7c-d819-41b0-ade2-92d4efeea743.900x.jpg"
                alt="First slide"
              />
              <h4 className="title">XenoBlade Chronicles</h4>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w"
                src="https://www.nintendo.com/content/dam/noa/en_US/games/switch/p/paper-mario-the-origami-king-switch/paper-mario-the-origami-king-switch-hero.jpg"
                alt="Second slide"
              />
               <h4 className="title">Paper Mario: Oragami King</h4>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w"
                src="https://www.smashbros.com/assets_v2/img/movie/20180613_1.jpg"
                alt="Third slide"
              />
               <h4 className="title">Super Smah Brothers Ultimate</h4>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    <div>
         <hr className="line"/>

    </div>
    </div>


  );
}

export default CarouselPage;