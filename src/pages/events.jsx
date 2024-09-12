import React from "react";
import "../pages/Events.css";
import taps from "../assets/bier_taps.jpg";
function Events() {
  return (
    <div className="events">
      <div className="eventsText container pb-5">
        <h1>Upcoming Events</h1>
        <p
          className="title pt-3 d-flex justify-content-between
        ">
          Oktoberfest - 9/21-10/30
          <img src={taps} class="img-thumbnail" alt="..." />
        </p>
        <p className="title d-flex justify-content-between">
          <img src={taps} class="img-thumbnail" alt="..." />
          Movie Night Monday's
        </p>
        <p className="title d-flex justify-content-between">
          Trivia Night Tuesday's
          <img src={taps} class="img-thumbnail" alt="..." />
        </p>
      </div>
    </div>
  );
}

export default Events;
