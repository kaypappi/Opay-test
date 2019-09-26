import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

class Navbar extends Component {
  state = {
    white: false
  };
  componentDidMount() {
    console.log(this.props);
    this.setWhite()
  }

  componentDidUpdate(PrevProps,PrevState){
      if(PrevProps.location.pathname !== this.props.location.pathname){
          this.setWhite()
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
  }


  render() {
    return (
      <div class="nav-holder hide-on-small-only">
        <div style={{background:this.state.white? 'white': '#00aeb5'}} class="navbar-wrapper">
          <div style={{color:this.state.white? '#00aeb5': 'white'}} class="nav-left">OPay</div>
          <div class="nav-right">
            <NavLink to="/">How it works</NavLink>
            <NavLink to="/">Developer</NavLink>
            <NavLink to="/signin">SignIn</NavLink>
            <NavLink style={{background:this.state.white? '#00aeb5': 'none'}} className="sign-up" to="/signup">
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
