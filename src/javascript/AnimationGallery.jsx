import React, { Component } from 'react';

class AnimationGallery extends Component {
  renderGalleryDetails() {
    var galleryDetails = [];
    var galleryDetailObject = this.props.gallery.details;
    
    for (var k in galleryDetailObject){
      if (galleryDetailObject.hasOwnProperty(k) && k !== "Description") {
        galleryDetails.push(
          <div className="detail" key={k}>
            <span className="label">{`${k}:`}</span><span>{galleryDetailObject[k]}</span>
          </div>
        );
      }
    }
    
    console.log("1", galleryDetailObject);
    console.log("2", galleryDetails);
    
    return galleryDetails;
  }
  
  renderFeaturedVideos() {
    return this.props.gallery.featuredMediaLinks.map((featuredMediaLink, i) => {
      return (
        <div className="video-container" key={i}>
          <iframe src={featuredMediaLink} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true"></iframe>
        </div>
      )
    });
  }
  
  renderFrameLinks() {
    return this.props.gallery.frameLinks.map((frameLink, i) => {
      return (
        <div className="frame" key={i}>
          <img src={frameLink} />
        </div>
      )
    });
  }
  
  render() {
    return (
      <div className="animation-gallery">
        <div className="details-section">
          <h3 className="title">{this.props.gallery.title}</h3>
          <p className="description">{this.props.gallery.details.Description}</p>
          {this.renderGalleryDetails()}
        </div>
        
        <div className="video-section">
          {this.renderFeaturedVideos()}
        </div>
        
        <div className="frames-section">
          <div className="flex-container">
            {this.renderFrameLinks()}
          </div>
        </div>
      </div>
    );
  }
}

export default AnimationGallery;
