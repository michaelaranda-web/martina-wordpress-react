import React, { Component } from 'react';
import $ from 'jquery';
import Slick from 'slick-carousel';

const SliderItems = ({sectionClassName}) => {
  return (
    <div className={sectionClassName}>
      <div className="item">
    		<img src="http://www.planwallpaper.com/static/images/kartandtinki1_photo-wallpapers_02.jpg" alt="image"  draggable="false"/>
    	</div>
    	<div className="item">
    		<img src="http://www.intrawallpaper.com/static/images/awesome-rain-wallpaper_0_PB7IVa9.jpg" alt="image" draggable="false"/>
    	</div>
    	<div className="item">
    		<img src="http://www.planwallpaper.com/static/images/kartandtinki1_photo-wallpapers_02.jpg" alt="image"  draggable="false"/>
    	</div>
    	<div className="item">
    		<img src="http://www.intrawallpaper.com/static/images/awesome-rain-wallpaper_0_PB7IVa9.jpg" alt="image" draggable="false"/>
    	</div>
    	<div className="item">
    		<img src="http://www.planwallpaper.com/static/images/kartandtinki1_photo-wallpapers_02.jpg" alt="image"  draggable="false"/>
    	</div>
    	<div className="item">
    		<img src="http://www.intrawallpaper.com/static/images/awesome-rain-wallpaper_0_PB7IVa9.jpg" alt="image" draggable="false"/>
    	</div>
    	<div className="item">
    		<img src="http://www.planwallpaper.com/static/images/kartandtinki1_photo-wallpapers_02.jpg" alt="image"  draggable="false"/>
    	</div>
    	<div className="item">
    		<img src="http://www.intrawallpaper.com/static/images/awesome-rain-wallpaper_0_PB7IVa9.jpg" alt="image" draggable="false"/>
    	</div>
    	<div className="item">
    		<img src="http://www.planwallpaper.com/static/images/kartandtinki1_photo-wallpapers_02.jpg" alt="image"  draggable="false"/>
    	</div>
    </div>  
  );
}

class SliderDisplay extends Component {
  componentDidMount() {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.slider-nav'
    });
    
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      arrows: true,
      focusOnSelect: true,
      variableWidth: true
    });
  }
  
  componentWillUnmount() {
    $('.slider-for').slick('unslick');
    $('.slider-nav').slick('unslick');
  }
  
  render() {
    return (
      <div className="slider-display-section">
        <SliderItems sectionClassName="slider-for" />
      </div>
    );
  }
}


class StoryboardPage extends Component {
  render() {
    return (
      <div className="storyboard-page">
        <SliderDisplay />
        <div className="slider-nav-container">
          <SliderItems sectionClassName="slider-nav" />
        </div>
      </div>
    );
  }
}

export default StoryboardPage;
