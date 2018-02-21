import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="main-nav-bar">
        <div className="container">
          <h1 className="nav-bar-title">Martina Lo</h1>
          
          <div>
            <a href="#">Home</a>
          </div>
          <div>
            <a href="#">Storyboard</a>
          </div>
          <div>
            <a href="#">Life Drawings</a>
          </div>
          <div>
            <a href="#">Graphics & Animation</a>
          </div>
          <div>
            <a href="#">Comics</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
