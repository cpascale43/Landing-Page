import React from "react";
import List from "./List";

const Main = (params) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>What’s different about Manage?</h3>
          <p>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        <div className="col">
          <List
            num="01"
            heading="Track company-wide progress"
            text="See how your day-to-day tasks fit into the wider vision. Go from
          tracking progress at the milestone level all the way done to the
          smallest of details. Never lose sight of the bigger picture again."
          />
          <List
            num="02"
            heading="Advanced built-in reports"
            text="Set internal delivery estimates and track
       progress toward company goals. Our customisable dashboard helps you
        build out the reports you need to keep key stakeholders informed."
          />
          <List
            num="03"
            heading="Everything you need in one place"
            text="Stop jumping from one service to
        another to communicate, store files, track tasks and share documents.
        Manage offers an all-in-one team productivity solution."
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
