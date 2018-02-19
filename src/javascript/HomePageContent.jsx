import React, { Component } from 'react';
import { MEDIA_URL } from '../config';

class HomePageContent extends Component {
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
      <div className="home-page-content">
        {
          this.state.mediaItemLinks.map(function(mediaItemLink) {
            return (
              <img src={mediaItemLink} />
            );
          })
        }
      </div>
    );
  }
}

export default HomePageContent;
