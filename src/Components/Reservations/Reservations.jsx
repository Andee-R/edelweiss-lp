import React from "react";
import ReservationForm from "./ReservationForm";
import "./Reservations.css";

const Reservations = () => {
  return (
    <div className="reservations container">
      <h4>Reservations</h4>
      <p>We accept reservations for parties 8 people or more</p>
      <ReservationForm />
    </div>
  );
};
export default Reservations;
