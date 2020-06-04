import React, { Component } from "react";
import EduCard from "./EduCard";

//destructuring the parameter
function Experience() {
  return (
<   div className="content-edu">
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
