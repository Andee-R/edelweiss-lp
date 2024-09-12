import React from "react";
import "../pages/Gallery.css";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import taps from "../assets/bier_taps.jpg";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="galleryText container">
        <h1> Gallery</h1>

        <div className="images">
          <div className="slider">
            <div className="slide">
              <img src={taps} class="img-thumbnail" alt="..." />
              <img src={taps} class="img-thumbnail" alt="..." />
              <img src={taps} class="img-thumbnail" alt="..." />
              <img src={taps} class="img-thumbnail" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
