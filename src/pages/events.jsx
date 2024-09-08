import React from "react";
import "../pages/Events.css";
function Events() {
  return (
    <div className="events">
      <div className="eventsText container">
        <h1>Upcoming Events</h1>
        <div className="row">
          <div className="col">
            <p className="title">Oktoberfest - 9/21-10/30</p>
          </div>
          <div className="col">
            <p className="title">Movie Night Monday's</p>
          </div>
          <div className="col">
            <p className="title">Trivia Night Tuesday's</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
