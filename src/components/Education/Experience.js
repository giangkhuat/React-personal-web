import React, { Component } from "react";
import EduCard from "./EduCard";

//destructuring the parameter
function Experience() {
  return (
    <div className="content-edu">
      <div class="post">
        <EduCard
          title="B.A, Computer Science"
          where="Grinnell College, IA"
          date="August 2017- May 2021"
          quote="“When being dumb and financially independent does not cause me trouble...”"
        />
        <hr></hr>
        <EduCard
          title="High School Kid"
          where="George School, PA"
          date="August 2015 - May 2017"
          quote="“Where I could wear pyjamas to class and nobody cared....”"
        />
        <hr></hr>
        <EduCard
          title="High School Kid"
          where="Hanoi-Amsterdam High School, Vietnam"
          date="August 2013 - May 2015"
          quote="“Where I was taught to use gun in school PE class...”"
        />
        <hr></hr>
      </div>
    </div>
  );
}
export default Experience;
