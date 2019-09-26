import React, { Component } from "react";
import Menu from "../../Assets/SVG/menu.svg";
import M from "materialize-css/dist/js/materialize.min.js";
import "./sidenav.css";

class SideNav extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
  }
  render() {
    return (
      <div className="show-on-small">
        <ul id="slide-out" className="sidenav">
          <a className="black-text add" href="/register">
            How it works
          </a>
          <a aria-current="page" className="black-text active" href="/">
            Developer
          </a>
          <a className="black-text" href="/signin">
            Sign In
          </a>
          <a className="black-text" href="/signup">
            Sign Up
          </a>
        </ul>
        <div className="hide-on-med-and-up">
          <div className="nav-wrapper sm-nav ">
            <div className="sm-left">OPay</div>
            <div className="sm-right">
              <a href="#" data-target="slide-out" className="sidenav-trigger">
                <img src={Menu} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNav;
