import React, { Component } from 'react';
import $ from 'jquery';
import FetchSpinner from '../FetchSpinner';
import Slick from 'slick-carousel';
import SliderItems from '../SliderItems';
import SliderDisplay from '../SliderDisplay';
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
          <SliderDisplay itemLinks={this.state.lifeDrawingLinks}/>
          <div className="slider-nav-container">
            <SliderItems 
              className="slider-nav"
              itemLinks={this.state.lifeDrawingLinks}/>
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

export default LifeDrawingsPage;

