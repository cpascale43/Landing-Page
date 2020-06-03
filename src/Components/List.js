import React from "react";

const List = ({ num, heading, text }) => {
  return (
    <div className="row">
      <div className="col">
        <span className="badge badge-color badge-pill">{num}</span>
      </div>
      <div className="col-11">
        <p><strong>{heading}</strong></p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default List;
