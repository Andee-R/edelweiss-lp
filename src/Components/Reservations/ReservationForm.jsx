import React from "react";

const ReservationForm = () => {
  return (
    <>
      <div>
        <form className="reservationForm container">
          <div className="row">
            <div className="col-6 p-3">
              <input
                type="text"
                className="form-control"
                id="reservationFrom"
                placeholder="First Name"
              />
            </div>
            <div className="col-6 p-3">
              <input
                type="text"
                className="form-control"
                id="reservationFrom"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4 p-3">
              <input
                type="text"
                className="form-control"
                id="reservationFrom"
                placeholder="Party Size"
              />
            </div>

            <div className="col-4 p-3">
              <input
                type="text"
                className="form-control"
                id="reservationFrom"
                placeholder="Phone Number"
              />
            </div>
            <div className="col-4 p-3">
              <input
                type="text"
                className="form-control"
                id="reservationFrom"
                placeholder="Will this be seperate checks?"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-3">
              <input
                type="text"
                className="form-control"
                id="reservationFrom"
                placeholder="Reason for party?(optional) "
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReservationForm;
