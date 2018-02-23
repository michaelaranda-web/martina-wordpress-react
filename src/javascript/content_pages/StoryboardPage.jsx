import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';
import Slick from 'slick-carousel';
import SliderItems from '../SliderItems';
import SliderDisplay from '../SliderDisplay';
import { MEDIA_URL } from '../../config';

class StoryboardPage extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      mediaItemLinks: []
    };
  }
  
  componentDidMount() {
    var self = this;
    
    this.setState({loading: true}, () => {
      axios.get(MEDIA_URL)
      .then(function(response) {
        return response.data;
      })
      .then(function(response) {
        let fetchedMediaItemLinks = response.map(function(mediaItem) {
          return mediaItem.source_url;
        })
        self.setState({loading: false, mediaItemLinks: fetchedMediaItemLinks}, self.activateSlick);
      });
    });
  }
  
  componentWillUnmount() {
    $('.slider-for').slick('unslick');
    $('.slider-nav').slick('unslick');
  }
  
  renderStoryboardPage() {
    if (this.state.loading) {
      return <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" id="spinner-icon" />
    }
    else {
      return (
        <div>
          <SliderDisplay itemLinks={this.state.mediaItemLinks}/>
          <div className="slider-nav-container">
            <SliderItems 
              className="slider-nav"
              itemLinks={this.state.mediaItemLinks}/>
          </div>
        </div>
      )
    }
  }
  
  render() {
    return (
      <div className="storyboard-page">
        {this.renderStoryboardPage()}
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
