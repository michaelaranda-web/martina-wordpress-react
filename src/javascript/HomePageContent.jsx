import React, { Component } from 'react';
import { MEDIA_URL } from '../config';

class HomePageContent extends Component {
  componentDidMount() {
    fetch(MEDIA_URL).then(function(response) {
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
