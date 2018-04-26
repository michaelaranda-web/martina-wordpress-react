import React, { Component } from 'react';
import $ from 'jquery';
import FetchSpinner from '../FetchSpinner';
import SliderGallery from '../SliderGallery';
import { getImageLinksForPosts } from '../parsers/WordPressParser';
import { STORYBOARDS_URL } from '../../config';

class StoryboardPage extends Component {
  constructor() {
    super();
    this.state = {
      mediaItemLinks: []
    };
  }
  
  setMediaItemLinks(response) {
    var allPostImageLinks = getImageLinksForPosts(response);
    
    this.setState({mediaItemLinks: allPostImageLinks});
  }
  
  render() {
    return (
      <div className="storyboard-page">
        <FetchSpinner requestUrl={STORYBOARDS_URL} onFetchSuccess={this.setMediaItemLinks.bind(this)} >
          {
            this.state.mediaItemLinks.map((mediaItemLinks) => {
              return (
                <div>
                  <SliderGallery mediaItemLinks={mediaItemLinks} />
                  <hr />
                </div>
              )
            }) 
          }
        </FetchSpinner>
      </div>
    ); 
  }
}

export default StoryboardPage;
