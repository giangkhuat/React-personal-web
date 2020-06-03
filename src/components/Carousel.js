import React, { useState } from "react";
import "./slider.scss";
import IntroCard from "./IntroCard";
//import foodpic from "../img/food.JPG";
import profilepic from "../img/Giang.JPG";
import birdpic from "../img/bird.JPG";

function Carousel(props) {
  let sliderArr = props.inputText;
  const [x, setX] = useState(0);

  const goLeft = () => {
    if (x === 0) {
      setX(-100 * (sliderArr.length - 1));
    } else {
      setX(x + 100);
    }
  };

  const goRight = () => {
    if (x === -100 * (sliderArr.length - 1)) {
      setX(0);
    } else {
      setX(x - 100);
    }
  };

  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="goleft" onClick={goLeft}>
        <i class="fas fa-chevron-left">Left</i>
      </button>
      <button id="goright" onClick={goRight}>
        <i class="fas fa-chevron-left">Right</i>
      </button>
    </div>
  );
}

export default Carousel;
