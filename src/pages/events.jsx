import { useState } from "react";
import React from "react";
import "../pages/Events.css";
import { Carousel } from "bootstrap";

function Events() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    return (
      <>
        <div className="events">
          <div className="eventsText container">
            <div>
              <h1>Upcoming Events</h1>
            </div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <Carousel.Caption>
                  <h3 className="title">Oktoberfest - 9/21-10/30</h3>
                  <p>Join us for some fun!</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <h3 className="title ">Trivia Night Tuesday's</h3>
                  <p>work your brain muscles!</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <h3 className="title ">Movie Night Monday's</h3>
                  <p>Every Monday 5pm & 7pm</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </>
    );
  };
}

export default Events;
