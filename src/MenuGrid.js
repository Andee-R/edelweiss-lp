import React from "react";
import "./MenuGrid.css";
export default function MenuGrid() {
  return (
    <div className="MenuGrid">
      <div className="row">
        <div className="col-3">
          <img src="/"></img>
          <h4>Menu</h4>
        </div>
        <div className="col-3">
          <img src="/"></img>
          <h4>Wine & Cocktails</h4>
        </div>
        <div className="col-3">
          <img src="/"></img>
          <h4>Reservations</h4>
        </div>

        <div className="col-3">
          <img src="/"></img>
          <h4>Gallery</h4>
        </div>
      </div>
    </div>
  );
}
