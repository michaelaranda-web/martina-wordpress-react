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
            <Link to="/life_drawings">Life Drawings</Link>
          </div>
          <div className="nav-bar-link">
            <Link to="/graphics_and_animation">Graphics & Animation</Link>
          </div>
          <div className="nav-bar-link">
            <Link to="/comics">Comics</Link>
          </div>
          
          <div className="contact-info">
            <p className="instagram-handle">IG: martinaloart</p>
            <p className="email-address">martinaloartwork@gmail.com</p>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
