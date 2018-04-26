import React, { Component } from 'react';
import $ from 'jquery';
import FetchSpinner from '../FetchSpinner';
import Slick from 'slick-carousel';
import SliderGallery from '../SliderGallery';
import { getImageLinksForPosts } from '../parsers/WordPressParser';
import { LIFE_DRAWINGS_URL } from '../../config';

class LifeDrawingsPage extends Component {
  constructor() {
    super();
    this.state = {
      lifeDrawingLinks: []
    };
  }
  
  setLifeDrawingItemLinks(response) {
    var allPostImageLinks = getImageLinksForPosts(response);
    var flattenedPostImageLinks = [].concat.apply([], allPostImageLinks);
    
    this.setState({lifeDrawingLinks: flattenedPostImageLinks}, this.activateSlick);
  }
  
  render() {
    return (
      <div className="life-drawings-page">
        <FetchSpinner requestUrl={LIFE_DRAWINGS_URL} onFetchSuccess={this.setLifeDrawingItemLinks.bind(this)} >
          <SliderGallery mediaItemLinks={this.state.lifeDrawingLinks} />
        </FetchSpinner>
      </div>
    ); 
  }
}

export default LifeDrawingsPage;

