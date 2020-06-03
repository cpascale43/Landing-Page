import React from "react";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image"
import Logo from "../images/logo.svg"

const Navbar = () => {
  return (
    <Nav
      className="row"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <div className="col">
        <Nav.Item>
          <Nav.Link href="/home"><Image src={Logo}/></Nav.Link>
        </Nav.Item>
      </div>
      <div className="col-6 d-flex justify-content-center">
        <Nav.Item>
          <Nav.Link eventKey="Pricing">Pricing</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Product">Product</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="About Us">About Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Careers">Careers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Community">Community</Nav.Link>
        </Nav.Item>
      </div>
      <div className="col d-flex justify-content-end">
        <button type="button" class="btn btn-primary">
          Get Started
        </button>
      </div>
    </Nav>
  );
};

export default Navbar
