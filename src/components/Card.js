import React, { Component } from "react";

function Card(props) {
  return (
    <div class="widecard">
      <div class="compdet">
        <h3>{props.title}</h3>
        <h4 class="secondtext">{props.where}</h4>
        <h4 class="secondtext">
          {props.from} - {props.to}
        </h4>
      </div>
    </div>
  );
}
export default Card;
