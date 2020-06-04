import React, { Component } from "react";
import Education from "./Education.scss";

function EduCard(props) {
  /*
  <div class="widecard">
      <div class="compdet">
        <h3>{props.title}</h3>
        <h4 class="secondtext">{props.where}</h4>
        <h4 class="secondtext">{props.date}</h4>
        {props.quote}
      </div>
  */
  return (
    <div class="compdet">
      <h2 class="title">{props.title}</h2>
      <h4 className="secondtex">{props.where}</h4>
      <div class="date">{props.date}</div>
      <div class="quote">"Live life to the fullest"</div>
      
    </div>
  );
}
export default EduCard;
