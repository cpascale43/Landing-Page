import React from "react";
import Image from "react-bootstrap/Image";
import Logo from "../images/logo.svg";
import Facebook from "../images/icon-facebook.svg";
import Instagram from "../images/icon-instagram.svg";
import Pinterest from "../images/icon-pinterest.svg";
import Twitter from "../images/icon-twitter.svg";
import Youtube from "../images/icon-youtube.svg";

const Footer = () => {
  return (
    <div className="footer text-white">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row">
              <Image src={Logo} />
            </div>
            <div className="row">
              <Image src={Facebook} />
              <Image src={Youtube} />
              <Image src={Twitter} />
              <Image src={Pinterest} />
              <Image src={Instagram} />
            </div>
          </div>
          <div className="col">
            <p>
              <a href="#" class="text-white">
                Home
              </a>
            </p>
            <p>
              <a href="#" class="text-white">
                Pricing
              </a>
            </p>
            <p>
              <a href="#" class="text-white">
                Products
              </a>
            </p>
            <p>
              <a href="#" class="text-white">
                About Us
              </a>
            </p>
          </div>
          <div className="col">
            <p>
              <a href="#" class="text-white">
                Careers
              </a>
            </p>
            <p>
              <a href="#" class="text-white">
                Community
              </a>
            </p>
            <p>
              <a href="#" class="text-white">
                Privacy Policy
              </a>
            </p>
          </div>
          <div className="col">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Updates in your inbox…"
                aria-label="Updates in your inbox…"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-color" type="button">
                  Go
                </button>
              </div>
            </div>
            <p style={{ color: "white" }}>
              Copyright 2020. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
