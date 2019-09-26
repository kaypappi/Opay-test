import React, { Component } from "react";
import {NavLink} from 'react-router-dom'
import Menu from "../../Assets/SVG/menu.svg";
import M from "materialize-css/dist/js/materialize.min.js";
import "./sidenav.css";

class SideNav extends Component {
    state={
        white:false
    }
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
    this.setWhite();
  }

  componentDidUpdate(PrevProps, PrevState) {
    if (PrevProps.location.pathname !== this.props.location.pathname) {
      this.setWhite();
    }
  }

  setWhite = () => {
    const path = this.props.location.pathname;
    if (path.includes("signin") || path.includes("signup")) {
      this.setState({
        white: true
      });
    } else {
      this.setState({
        white: false
      });
    }
  };
  render() {
    return (
      <div className="show-on-small">
        <ul id="slide-out" className="sidenav">
          <a className="black-text add" href="/">
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
          <div style={{background:this.state.white? 'white': '#00aeb5'}} className="nav-wrapper sm-nav ">
            <NavLink to='/'><div style={{color:this.state.white? '#00aeb5': 'white'}} className="sm-left">OPay</div></NavLink>
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
