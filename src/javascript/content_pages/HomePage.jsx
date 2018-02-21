import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { MEDIA_URL } from '../../config';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      mediaItemLinks: []
    };
  }
  
  componentDidMount() {
    var self = this;
    
    fetch(MEDIA_URL).then(function(response) {
      return response.json();
    }).then(function(response) {
      let fetchedMediaItemLinks = response.map(function(mediaItem) {
        return mediaItem.source_url;
      })
      self.setState({mediaItemLinks: fetchedMediaItemLinks});
    });
  }
  
  render() {
    return (
      <div className="home-page">
        {
          this.state.mediaItemLinks.map(function(mediaItemLink, i) {
            return (
              <img key={i} src={mediaItemLink} alt={`image-${i}`}/>
            );
          })
        }
      </div>
    );
  }
}

export default HomePage;
