/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <p id="footer-copy">
          &copy; Copyright 2020 -<a href="/">TheQnA.Org</a>
        </p>
      </div>
    );
  }
}

export default Footer;
