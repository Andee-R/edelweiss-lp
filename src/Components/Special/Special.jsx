import React from "react";
import "./Special.css";
import biergarten from "../../assets/edelweiss_biergarten.jpg";
import backroom from "../../assets/back_room.png";
import movie from "../../assets/Movie_night.png";

const Special = () => {
  return (
    <div className="special">
      <h3>Special Events</h3>
      <p>&nbsp;</p>
      <dvi className="events">
        <p className="title">Oktoberfest - 9/21-10/30</p>
        <p className="title">Movie Night Monday's</p>
        <p className="title">Trivia Night Tuesday's</p>
      </dvi>
      <div className="events">
        <img src={biergarten} alt="" className="event" />
        <img src={movie} alt="" className="event" />
        <img src={backroom} alt="" className="event" />
      </div>
      
    </div>
  );
};

export default Special;
