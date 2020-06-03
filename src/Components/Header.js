import React from "react";
import Image from "react-bootstrap/Image";
import Illustration from '../images/illustration-intro.svg';

const Header = (params) => {
  return (
    <div className="row">
      <div className="col">
        <h1>Bring everyone together to build better products.</h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button type="button" class="btn btn-primary">Get Started</button>
      </div>
      <div className="col">
        <Image src={Illustration} />
      </div>
    </div>
  );
};

export default Header;
