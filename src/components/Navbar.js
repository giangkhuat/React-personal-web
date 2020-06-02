import React, { Component } from "react";
import NavItem from "./NavItem";

import Social from "../contents/Social";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: "",
    };
  }

  activeitem = (selectedItem) => {
    console.log(this.state.NavItemActive);
    console.log(selectedItem);
    /*
    if (this.state.NavItemActive.length > 0) {
      console.log(this.state.NavItemActive);
      document
        .getElementById(this.state.NavItemActive)
        .classList.remove("active");
    }
    this.setState({ NavItemActive: selectedItem }, () => {
      document.getElementById(this.state.NavItemActive).classList.add("active");
    });
    */
  };

  render() {
    // activeCard attribute passed the ref to function activeItem() to the
    // NavItem component
    return (
      <div>
        <nav>
          <ul>
            <NavItem
              item="About"
              tolink="/"
              activeCard={this.activeitem}
            ></NavItem>
            <NavItem
              item="Experience"
              tolink="/experience"
              activeCard={this.activeitem}
            ></NavItem>
            <NavItem
              item="Projects"
              tolink="/projects"
              activeCard={this.activeitem}
            ></NavItem>
          </ul>
        </nav>
        <Social />
      </div>
    );
  }
}

export default Navbar;
