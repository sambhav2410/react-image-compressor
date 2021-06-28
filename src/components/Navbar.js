/* eslint-disable react/jsx-filename-extension */
import React from "react";
import "./Navbar.css";

import * as ReactBootStrap from "react-bootstrap";

function Navbar() {
  return (
    <div>
      <ReactBootStrap.Navbar className="style_navbar" expand="lg">
        <ReactBootStrap.Navbar.Brand
          className="brand"
          style={{ color: "white" }}
          href="#home"
        >
          <span>All</span> Compress <span>Image</span>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav id="style_link" className="mr-auto">
            <ReactBootStrap.Nav.Link
              className="link"
              style={{ color: "white" }}
              href="#home"
            >
              Home
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link
              className="link"
              style={{ color: "white" }}
              href="#link"
            >
              DMCA
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link
              className="link"
              style={{ color: "white" }}
              href="#link"
            >
              About us
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link
              className="link"
              style={{ color: "white" }}
              href="#link"
            >
              Contact us
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default Navbar;
