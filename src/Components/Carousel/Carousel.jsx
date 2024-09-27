import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../Helpers/CarouselData";
function Carousel() {
  const [currImg, setCurrImg] = useState(0);
  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}></div>
    </div>
  );
}

export default Carousel;
