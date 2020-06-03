import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Simplify from "../images/bg-simplify-section-desktop.svg";

const Banner = () => {
  return (
    <div>
      <Card>
        <Card.Img src={Simplify} alt="Card image" className="orange" />
        <Card.ImgOverlay>
          <div className="container">
            <div className="row align-items-center">
              <div className="col d-flex justify-content-start">
                <Card.Title>
                  <h1 className="display-4" style={{ color: "white" }}>
                    Simplify how your team works today.
                  </h1>
                </Card.Title>
              </div>
              <div className="col">
                <div className="row d-flex justify-content-end">
                  <button type="button" class="btn btn-color btn-lg">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Banner;
