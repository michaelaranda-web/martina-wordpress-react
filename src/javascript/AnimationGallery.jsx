import React, { Component } from 'react';

class AnimationGallery extends Component {
  render() {
    return (
      <div className="animation-gallery">
        <div className="details-section">
          <h3 className="title">Seasons of Love Storyboard</h3>
          <p className="description">Storyboard animatic to “Seasons of Love”, song from the Broadway musical Rent.</p>
          <div className="detail">
            <span className="label">Artist: </span><span>Martina Lo</span>
          </div>
          <div className="detail">
            <span className="label">Date: </span><span>12/16/2017</span>
          </div>
        </div>
        
        <div className="video-section">
          <div className="video-container">
            <iframe src="https://player.vimeo.com/video/206314516" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true"></iframe>
          </div>
          <div className="video-container">
            <iframe src="https://www.youtube.com/embed/_ObB2IAtchk?version=3&rel=1&fs=1&autohide=2&showsearch=0&showinfo=1&iv_load_policy=1&wmode=transparent" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true"></iframe>
          </div>
        </div>
        
        <div className="frames-section">
          <div className="flex-container">
            <div className="frame">
              <img src="https://martina-wordpress-headless.s3.amazonaws.com/uploads/2018/03/seasons-of-love-screenshot-1.png" />
            </div>
            <div className="frame">
              <img src="https://martina-wordpress-headless.s3.amazonaws.com/uploads/2018/03/seasons-of-love-screenshot-2.png" />
            </div>
            <div className="frame">
              <img src="https://martina-wordpress-headless.s3.amazonaws.com/uploads/2018/03/seasons-of-love-screenshot-3.png" />
            </div>
            <div className="frame">
              <img src="https://martina-wordpress-headless.s3.amazonaws.com/uploads/2018/03/seasons-of-love-screenshot-4.png" />
            </div>
            <div className="frame">
              <img src="https://martina-wordpress-headless.s3.amazonaws.com/uploads/2018/03/seasons-of-love-screenshot-5.png" />
            </div>
            <div className="frame">
              <img src="https://martina-wordpress-headless.s3.amazonaws.com/uploads/2018/03/seasons-of-love-screenshot-6.png" />
            </div>
            <div className="frame">
              <img src="https://martina-wordpress-headless.s3.amazonaws.com/uploads/2018/03/seasons-of-love-screenshot-7.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AnimationGallery;
