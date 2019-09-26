import React, { Component } from "react";
import {NavLink} from 'react-router-dom'
import "./signin.css";

class SignIn extends Component {
  render() {
    return (
      <div className="signin-wrapper">
        <div className="row">
          <div className="col m4" />
          <div className="col m4">
            <div className="title">Sign In to Your Account</div>
            <div className="form">
              <form action className="signin">
                <label htmlFor="email" className="email-label">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="email"
                />
                <label htmlFor="email" className="email-label">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="email"
                />
                <button className="submit">SIGN IN</button>
              </form>
              <div className="no-account">
                <p>
                  Don't have an account? <span><NavLink to='/signup'>Sign Up</NavLink></span>
                </p>
              </div>
              <div className="forgot-password">Forgot password?</div>
            </div>
          </div>
          <div className="col m4" />
        </div>
      </div>
    );
  }
}

export default SignIn;
