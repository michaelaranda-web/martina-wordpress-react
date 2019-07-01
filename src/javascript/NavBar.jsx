import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="main-nav-bar">
        <div className="container">
          <h1 className="nav-bar-title">Martina Lo</h1>
          
          <div className="nav-bar-link">
            <Link to="/">Home</Link>
          </div>
          <div className="nav-bar-link">
            <Link to="/storyboard">Storyboard</Link>
          </div>
          <div className="nav-bar-link">
            <Link to="/sketches">Sketches</Link>
          </div>
          <div className="nav-bar-link">
            <Link to="/landscapes">Landscapes</Link>
          </div>
          <div className="nav-bar-link">
            <Link to="/graphics_and_animation">Graphics & Animation</Link>
          </div>
          <div className="nav-bar-link">
            <Link to="/comics">Comics</Link>
          </div>
          
          <div className="contact-info">
            <p>
              <div className="instagram-icon icon" />
              <a 
                href="https://www.instagram.com/martinaloart/" 
                target="_blank"
                className="instagram-handle">@martinaloart</a>
            </p>
            <p className="email-address">
              <div className="email-icon icon" /><span>martinaloartwork@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
