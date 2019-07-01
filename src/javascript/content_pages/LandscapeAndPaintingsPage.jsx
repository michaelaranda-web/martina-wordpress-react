import React, { Component } from 'react';
import $ from 'jquery';
import FetchSpinner from '../FetchSpinner';
import Slick from 'slick-carousel';
import SliderGallery from '../SliderGallery';
import { getImageLinksForPosts } from '../parsers/WordPressParser';
import { LANDSCAPE_AND_PAINTINGS_URL } from '../../config';

class LandscapeAndPaintingsPage extends Component {
  constructor() {
    super();
    this.state = {
      contentLinks: []
    };
  }
  
  setItemLinks(response) {
    var allContentLinks = getImageLinksForPosts(response);
    
    var flattenedContentLinks = [].concat.apply([], allContentLinks);
    
    this.setState({contentLinks: flattenedContentLinks}, this.activateSlick);
  }
  
  render() {
    return (
      <div className="landscape-and-paintings-page">
        <FetchSpinner requestUrl={LANDSCAPE_AND_PAINTINGS_URL} onFetchSuccess={this.setItemLinks.bind(this)} >
          <SliderGallery mediaItemLinks={this.state.contentLinks} />
        </FetchSpinner>
      </div>
    ); 
  }
}

export default LandscapeAndPaintingsPage;

