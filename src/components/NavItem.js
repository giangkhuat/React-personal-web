import React, { Component } from "react";
import { Link } from "react-router-dom";

function NavItem(props) {
  //  render() {
  return (
    <li>
      <Link
        // onClick={props.activeCard.bind(this, this.props.item)}
        to={props.tolink}
      >
        {props.item}
      </Link>
    </li>
    //  );
  );
}
export default NavItem;
