import React, { Component } from 'react';

class ComicReaderNavButton extends Component {
  handleClick() {
    this.props.onClick(this.props.value);
  }
  
  render() {
    return (
      <button 
        className="nav-button"
        onClick={this.handleClick.bind(this)} >
          {this.props.text}
      </button>
    );
  }
}

class ComicReader extends Component {
  constructor() {
    super();
    this.state = {
      currentComicPage: 0,
      comicPages: [
        <img src="https://martina-wordpress-headless.s3.amazonaws.com/uploads/2018/02/Hourly-Comic-1-MLo-1.jpg" />,
        <img src="https://martina-wordpress-headless.s3.amazonaws.com/uploads/2018/02/Hourly-Comic-2-MLo-1.jpg" />,
        <img src="https://martina-wordpress-headless.s3.amazonaws.com/uploads/2018/02/Hourly-Comic-3-MLo-1.jpg" />
      ]
    };
  }
  
  updateCurrentComicPage(value) {
   this.setState({currentComicPage: value}); 
  }
  
  renderNavButtons() {
    return this.props.comicPages.map((page, i) => {
      return <ComicReaderNavButton 
                onClick={this.updateCurrentComicPage.bind(this)}
                key={i}
                value={i}
                text={i} />
    })
  }
  
  render() {
    return (
      <div className="comic-reader">
        <div className="current-comic-page">
         {this.state.comicPages[this.state.currentComicPage]}
        </div>
        <div className="comic-reader-nav">
          {this.renderNavButtons()}
        </div>
      </div>
    );
  }
}

export default ComicReader;
