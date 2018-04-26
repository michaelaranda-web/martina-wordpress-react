import React, { Component } from 'react';
import SliderItems from './SliderItems';

class SliderDisplay extends Component {
  render() {
    return (
      <div className="slider-display-section">
        <SliderItems 
          className={this.props.className}
          itemLinks={this.props.itemLinks} />
      </div>
    );
  }
}

export default SliderDisplay;
