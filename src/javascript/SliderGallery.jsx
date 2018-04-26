import React, { Component } from 'react';
import $ from 'jquery';
import Slick from 'slick-carousel';
import SliderItems from './SliderItems';
import SliderDisplay from './SliderDisplay';

class SliderGallery extends Component {
  constructor() {
    super();
    
    this.sliderDisplayClass = this.randomSliderDisplayClassName();
    this.sliderNavClass = this.randomSliderNavClassName();
  }
  
  componentDidMount() {
    this.activateSlick();
  }
  
  render() {
    return (
      <div className="slider-gallery">
        <SliderDisplay 
            className={`slider-for ${this.sliderDisplayClass}`}
            itemLinks={this.props.mediaItemLinks}/>
        <div className="slider-nav-container">
          <SliderItems 
            className={`slider-nav ${this.sliderNavClass}`}
            itemLinks={this.props.mediaItemLinks}/>
        </div>
      </div>
    ); 
  }
  
  randomSliderDisplayClassName() {
    return "slider-for-" + Math.floor(Math.random() * 100000000); 
  }
  
  randomSliderNavClassName() {
    return "slider-nav-" + Math.floor(Math.random() * 100000000); 
  }
  
  activateSlick() {
    var self = this;
    
    //If slick is called before slider is rendered, initialization of center mode gets thrown off
    setTimeout(() => {
      $("." + self.sliderDisplayClass).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: "." + self.sliderNavClass,
        nextArrow: '<div class="next-arrow big-arrow">></div>',
        prevArrow: '<div class="prev-arrow big-arrow"><</div>'
      });
      
      $("." + self.sliderNavClass).slick({
        slidesToScroll: 1,
        asNavFor: "." + self.sliderDisplayClass,
        dots: false,
        arrows: true,
        focusOnSelect: true,
        variableWidth: true,
        infinite: true,
        centerMode: true,
        nextArrow: '<div class="next-arrow small-arrow">></div>',
        prevArrow: '<div class="prev-arrow small-arrow"><</div>'
      });
    }, 100);
  }
}

export default SliderGallery;
