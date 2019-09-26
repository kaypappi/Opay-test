import React, { Component } from "react";
import {NavLink} from 'react-router-dom'
import "./signin.css";

class SignUp extends Component {
  render() {
    return (
      <div className="signin-wrapper">
        <div className="row">
          <div className="col m4" />
          <div className="col m4">
            <div className="title">Sign Up to Continue</div>
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
                <label htmlFor="password" className="password-label">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="password"
                />
                <label htmlFor="password" className="password-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="password"
                />
                <button className="submit">SIGN IN</button>
              </form>
              <div className="no-account">
                <p>
                  Already have an account? <span><NavLink to='/signin'>Sign In</NavLink></span>
                </p>
              </div>
            </div>
          </div>
          <div className="col m4" />
        </div>
      </div>
    );
  }
}

export default SignUp;
