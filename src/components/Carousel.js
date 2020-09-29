import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from "styled-components";

const StyledImg = styled.img`
  width: 800px !important;
`

const AppCarousel = () => (
  <Carousel>
    <div>
      <StyledImg src="1.jpg" />
      <p className="legend">Casa 1</p>
    </div>
    <div>
      <StyledImg src="2.jpg" />
      <p className="legend">Casa 2</p>
    </div>
    <div>
      <StyledImg src="3.jpg" />
      <p className="legend">Casa 3</p>
    </div>
    <div>
      <StyledImg src="4.jpg" />
      <p className="legend">Casa 4</p>
    </div>
  </Carousel>
)

export { AppCarousel }
