import { useState } from "react";
import React from "react";
import "../pages/Events.css";
import Carousel from "../Components/Carousel/Carousel";
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
