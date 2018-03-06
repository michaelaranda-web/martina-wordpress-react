import React, { Component } from 'react';
import AnimationGallery from '../AnimationGallery';

class GraphicsAndAnimationPage extends Component {
  render() {
    return (
      <div className="graphics-and-animation-page">
        <AnimationGallery />
        <div className="gallery-divider"></div>
        <AnimationGallery />
      </div>
    );
  }
}

export default GraphicsAndAnimationPage;
