import React, { useState } from "react";
import "./Carousel.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  {
    title: "Oktoberfest - 9/21-10/30",
    subtitle: "Join us for some fun!",
    img: oktoberfest,
  },
  {
    title: "Movie Night Monday's",
    subtitle: "Every Monday 5pm & 7pm",
    img: "./assets/Movie_night.png",
  },
  {
    title: "Trivia Night Tuesday's",
    subtitle: "work your brain muscles!",
    img: "../assets/back_room.png",
  },
];

const Carousel = () => {
  const [currImg, setCurrImg] = React.useState(0);
  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}>
        <button
          className="btn left"
          onClick={() => {
            setCurrImg(currImg - 1);
          }}>
          <FaArrowLeft />
        </button>
        <button
          className="btn right"
          onClick={() => {
            setCurrImg(currImg + 1);
          }}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
