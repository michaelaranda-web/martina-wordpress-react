import React, { Component } from 'react';

class HomePageContent extends Component {
  componentDidMount() {
    fetch('https://martina-wordpress-headless.herokuapp.com/wp-json/wp/v2/media').then(function(response) {
      return response.json();
    }).then(function(response) {
      console.log(response);
    });
  }
  
  render() {
    return (
      <div className="home-page-content">
      </div>
    );
  }
}

export default HomePageContent;
