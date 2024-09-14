import React from "react";
import "../pages/events.css";
import biergarten from "../assets/edelweiss_biergarten.jpg";
import backroom from "../assets/back_room.png";
import movie from "../assets/Movie_night.png";

function events() {
  return (
    <div className="events">
      <div className="eventsText container">
        <div>
          <h1>Upcoming Events</h1>
        </div>
        <div>
          <p className="title">Oktoberfest - 9/21-10/30</p>
          <img src={biergarten} alt="" className="img-thumbnail" />
        </div>
        <div>
          <img src={movie} alt="" className="img-thumbnail" />
          <p className="title">Movie Night Monday's</p>
        </div>
        <div className="justify-content-space-between">
          <p className="title">Trivia Night Tuesday's</p>
          <img src={backroom} alt="" className="img-thumbnail" />
        </div>
      </div>
    </div>
  );
}

export default events;
