import React from "react";
import "../pages/gallery.css";
import taps from "../assets/bier_taps.jpg";
import pretzel from "../assets/food-pretzel.png";

const gallery = () => {
  return (
    <div className="gallery">
      <div className="galleryText container">
        <h1> Gallery</h1>
      </div>
      <div className="images container">
        <div className="slider">
          <div className="slide">
            <img src={pretzel} class="img-thumbnail img-fluid" alt="..." />

            <img src={taps} class="img-thumbnail img-fluid" alt="..." />

            <img src={taps} class="img-thumbnail img-fluid" alt="..." />

            <img src={taps} class="img-thumbnail img-fluid " alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default gallery;
