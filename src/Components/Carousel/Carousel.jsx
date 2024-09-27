import React, { useState } from "react";
import "./Carousel.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { images } from "../Helpers/CarouselData";
function Carousel() {
  const [currImg, setCurrImg] = useState(0);
  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}>
        <button className="btn left">
          <FaArrowLeft />
        </button>
        <button className="btn right">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
