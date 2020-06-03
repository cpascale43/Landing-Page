import React from "react";
import Testimonial from "./Testimonial";
import Ali from "../images/avatar-ali.png";
import Anisha from "../images/avatar-anisha.png";
import Richard from "../images/avatar-richard.png";

const Testimonials = (params) => {
  return (
    <div className="row d-flex justify-content-center">
      <h3>What they’ve said</h3>
      <div className="row">
        <Testimonial
          img={Anisha}
          name="Anisha Li"
          text="“Manage has supercharged our team’s workflow.
      The ability to maintain visibility on larger milestones at all times keeps
      everyone motivated.”"
        />
        <Testimonial
          img={Ali}
          name="Ali Bravo"
          text="“We have been able to cancel so many other subscriptions since
          using Manage. There is no more cross-channel confusion and everyone is
          much more focused.”"
        />
        <Testimonial
          img={Richard}
          name=" Richard Watts"
          text="“Manage allows us to provide structure
          and process. It keeps us organized and focused. I can’t stop recommending
          them to everyone I talk to!” Shanai Gough “Their software allows us to
          track, manage and collaborate on our projects from anywhere. It keeps the
          whole team in-sync without being intrusive.”"
        />
      </div>
    </div>
  );
};

export default Testimonials;
