import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="main-nav-bar">
        <div className="container">
          <h1 className="nav-bar-title">Martina Lo</h1>
          
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/storyboard">Storyboard</Link>
          </div>
          <div>
            <Link to="/life_drawings">Life Drawings</Link>
          </div>
          <div>
            <Link to="/graphics_and_animation">Graphics & Animation</Link>
          </div>
          <div>
            <Link to="/comics">Comics</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
