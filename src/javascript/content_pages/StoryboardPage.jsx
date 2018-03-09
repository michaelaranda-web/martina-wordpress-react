import React, { Component } from 'react';
import $ from 'jquery';
import FetchSpinner from '../FetchSpinner';
import Slick from 'slick-carousel';
import SliderItems from '../SliderItems';
import SliderDisplay from '../SliderDisplay';
import { MEDIA_URL } from '../../config';

class StoryboardPage extends Component {
  constructor() {
    super();
    this.state = {
      mediaItemLinks: []
    };
  }
  
  setMediaItemLinks(response) {
    let fetchedMediaItemLinks = response.data.map(function(mediaItem) {
      return mediaItem.source_url;
    })
    
    this.setState({mediaItemLinks: fetchedMediaItemLinks}, this.activateSlick);
  }
  
  render() {
    return (
      <div className="storyboard-page">
        <FetchSpinner requestUrl={MEDIA_URL} onFetchSuccess={this.setMediaItemLinks.bind(this)} >
          <SliderDisplay itemLinks={this.state.mediaItemLinks}/>
          <div className="slider-nav-container">
            <SliderItems 
              className="slider-nav"
              itemLinks={this.state.mediaItemLinks}/>
          </div>
        </FetchSpinner>
      </div>
    ); 
  }
  
  activateSlick() {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.slider-nav'
    });
    
    $('.slider-nav').slick({
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      arrows: true,
      focusOnSelect: true,
      variableWidth: true,
      infinite: true,
      centerMode: true
    });
  }
}

export default StoryboardPage;
