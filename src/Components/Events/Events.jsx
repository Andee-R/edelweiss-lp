import { useState } from "react";
import React from "react";
import "./Events.css";
import Carousel from "../Carousel/Carousel";
function Events() {
  return (
    <>
      <div className="events">
        <div className="eventsText container">
          <div>
            <h1>Upcoming Events</h1>
          </div>
          <Carousel />
        </div>
      </div>
    </>
  );
}

export default Events;
