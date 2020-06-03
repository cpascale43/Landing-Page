import React from "react";

const List = ({ num, heading, text }) => {
  return (
    <div className="row">
      <div className="col">{num}</div>
      <div className="col-11">
        <p>{heading}</p>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
};

export default List;
