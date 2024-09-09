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
      <div className="events"></div>
      <div className="events">
        <img src={biergarten} alt="" className="event" />
        <img src={movie} alt="" className="event" />
        <img src={backroom} alt="" className="event" />
      </div>
    </div>
  );
};

export default Special;
