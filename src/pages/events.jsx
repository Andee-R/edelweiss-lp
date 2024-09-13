import React from "react";
import "./Events.css";
import biergarten from "../assets/edelweiss_biergarten.jpg";
import backroom from "../assets/back_room.png";
import movie from "../assets/Movie_night.png";

function Events() {
  return (
    <div className="events">
      <div className="eventsText container">
        <h1>Upcoming Events</h1>
        <div className="row">
          <div className="col">
            <p className="title">Oktoberfest - 9/21-10/30</p>
            <img src={biergarten} alt="" className="img-thumbnail" />
          </div>
          <div className="col">
            <p className="title">Movie Night Monday's</p>
            <img src={movie} alt="" className="img-thumbnail" />
          </div>
          <div className="col">
            <p className="title">Trivia Night Tuesday's</p>
            <img src={backroom} alt="" className="img-thumbnail" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
