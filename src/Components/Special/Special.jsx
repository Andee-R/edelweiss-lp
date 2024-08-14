import React from "react";
import "./Special.css";
import biergarten from "../../assests/biergarten.png";
import food from "../../assests/food-pretzel.png";

const Special = () => {
  return (
    <div className="special">
      <h3>Special Events</h3>
      <p>Upcoming Special Events</p>
      <div className="events">
        <img src={food} alt="" className="event" />
        <img src={food} alt="" className="event" />
        <img src={food} alt="" className="event" />
      </div>
    </div>
  );
};

export default Special;
