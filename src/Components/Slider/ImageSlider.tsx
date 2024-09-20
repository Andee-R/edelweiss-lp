import React from "react";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRightIcon } from "lucide-react";
import "./ImageSlider.css";
type ImageSliderProps = { imageUrls: string[] };

const [imageIndex, setImageIndex] = useState(0);
function ImageSlider({ imageUrls }: ImageSliderProps) {
  return (
    <div className="arrowButton">
      <img src={imageUrls[imageIndex]} alt="" />
      <button>
        <ArrowBigLeft />
      </button>
      <button>
        <ArrowBigRightIcon />
      </button>
    </div>
  );
}

export default ImageSlider;
