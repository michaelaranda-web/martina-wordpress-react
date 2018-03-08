import React, { Component } from 'react';
import AnimationGallery from '../AnimationGallery';
import FetchSpinner from '../FetchSpinner';
import { getAnimationInfoForPosts } from '../parsers/WordPressParser';
import { ANIMATIONS_URL } from '../../config';

class GraphicsAndAnimationPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      animationGalleries: []
    }
  }
  
  setAnimationItems(response) {
    this.setState({animationGalleries: getAnimationInfoForPosts(response)});
  }
  
  render() {
    return (
      <div className="graphics-and-animation-page">
        <FetchSpinner requestUrl={ANIMATIONS_URL} onFetchSuccess={this.setAnimationItems.bind(this)}>
          {
            this.state.animationGalleries.map((gallery, i) => {
              return (
                <div key={i}>
                  <AnimationGallery gallery={gallery} />
                  <div className="gallery-divider"></div>
                </div>
              )
            }) 
          }
        </FetchSpinner>
      </div>
    );
  }
}

export default GraphicsAndAnimationPage;
