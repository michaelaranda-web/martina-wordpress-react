import React, { Component } from 'react';
import $ from 'jquery';
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
  
  componentDidMount() {
    var self = this;
    
    fetch(MEDIA_URL).then(function(response) {
      return response.json();
    }).then(function(response) {
      let fetchedMediaItemLinks = response.map(function(mediaItem) {
        return mediaItem.source_url;
      })
      self.setState({mediaItemLinks: fetchedMediaItemLinks}, self.activateSlick);
    });
  }
  
  componentWillUnmount() {
    $('.slider-for').slick('unslick');
    $('.slider-nav').slick('unslick');
  }
  
  render() {
    return (
      <div className="storyboard-page">
        <SliderDisplay itemLinks={this.state.mediaItemLinks}/>
        <div className="slider-nav-container">
          <SliderItems 
            className="slider-nav"
            itemLinks={this.state.mediaItemLinks}/>
        </div>
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
