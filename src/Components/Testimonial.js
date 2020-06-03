import React from "react";
import Image from "react-bootstrap/Image";

const Testimonial = ({ img, name, text }) => {
  return (
    <div className="col">
      <div className="row d-flex justify-content-center">
        <Image src={img} />
      </div>
      <div className="row d-flex justify-content-center">
        <p>{name}</p>
      </div>
      <div className="row d-flex justify-content-center">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Testimonial;
