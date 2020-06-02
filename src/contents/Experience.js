import React, { Component } from "react";
import Card from "../components/Card";

//destructuring the parameter
function Experience() {
  return (
    <div className="condiv">
      <h1 className="subtopic">Education</h1>
      <Card
        title="B.A, Computer Science "
        where="Grinnell College"
        from="August 2017"
        to="Present"
      />
      <h1 className="subtopic">Experience</h1>
      <Card
        title="Software Engineer Intern "
        where="PayPal"
        from="May 2020"
        to="Present"
      />
    </div>
  );
}
export default Experience;
