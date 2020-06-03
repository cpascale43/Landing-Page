import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Simplify from "../images/bg-simplify-section-desktop.svg";

const Banner = () => {
  return (
    <div className="container w-100%">
      <Card className="bg-dark text-white align-items-center">
        <Card.Img src={Simplify} alt="Card image" />
        <Card.ImgOverlay>
          <div className="row">
            <div className="col d-flex justify-content-start">
              <Card.Title>
                <h3>Simplify how your team works today.</h3>
              </Card.Title>
            </div>
            <div className="col d-flex justify-content-end">
              <button type="button" class="btn btn-primary">
                Get Started
              </button>
            </div>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Banner;
