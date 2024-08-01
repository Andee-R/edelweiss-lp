import React from "react";
import "../components/MenuGrid.css";
export default function MenuGrid() {
  return (
    <div className="MenuGrid">
      <div className="row">
        <div className="col-2 m-5">
          <img src="/"></img>
          <div>Menu</div>
        </div>
        <div className="col-2 m-5">
          <img src="/"></img>
          <div>Wine & Cocktails</div>
        </div>
        <div className="col-2 m-5">
          <img src="/"></img>
          <div>Reservations</div>
        </div>
        <div className="col-2 m-5">
          <img src="/"></img>
          <div>Gallery</div>
        </div>
      </div>
    </div>
  );
}
