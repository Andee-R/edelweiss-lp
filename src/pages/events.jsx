import React from "react";
import "../pages/events.css";
import biergarten from "../assets/edelweiss_biergarten.jpg";
import backroom from "../assets/back_room.png";
import movie from "../assets/Movie_night.png";
import { ImageSlider } from "../Components/Slider/ImageSlider";

const IMAGES = [biergarten, movie, backroom];
function events() {
  return (
    <>
      <div className="sliderImages">
        <ImageSlider imageUrls={IMAGES} />
      </div>

      <div className="events">
        <div className="eventsText container">
          <div>
            <h1>Upcoming Events</h1>
          </div>
          <p className="title">Oktoberfest - 9/21-10/30</p>

          <p className="title ">Trivia Night Tuesday's</p>

          <h3 className="title ">Movie Night Monday's</h3>
          <p>Every Monday 5pm & 7pm</p>
        </div>
      </div>
    </>
  );
}

export default events;
