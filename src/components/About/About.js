import React, { Component } from "react";
import Carousel from "../Carousel/Carousel";
import { SliderIntro } from "./SliderIntro";
import "./about.scss"

function About() {
  return (
    <div className="condiv" id="content">
      <Carousel id="intro-slides" inputText={SliderIntro} />
    </div>
  );
}

export default About;
