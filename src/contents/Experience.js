import React, { Component } from "react";
import EduCard from "../components/EduCard";
import Education from "../components/Education.scss";

//destructuring the parameter
function Experience() {
  /*
  <div className="condiv" id="content">
      <h1 className="subtopic">Education</h1>
      <EduCard
        title="B.A, Computer Science "
        where="Grinnell College"
        from="August 2017"
        to="Present"
      />
      <h1 className="subtopic">Experience</h1>
      <EduCard
        title="Software Engineer Intern "
        where="PayPal"
        from="May 2020"
        to="Present"
      />
    </div>
  */
  return (
    <div className="content-edu">
      <div class="post">
        <EduCard
          title="B.A, Computer Science"
          where="Grinnell College"
          date="August 2017- May 2021"
        />
        <hr></hr>
        <EduCard
          title="High School Kid"
          where="George School, PA"
          date="August 2015 - May 2017"
        />
        <hr></hr>
      </div>
    </div>
  );
}
export default Experience;
