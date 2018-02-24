import React, { Component } from 'react';
import ComicReaderNavButton from './ComicReaderNavButton';

class ComicReader extends Component {
  constructor() {
    super();
    this.state = {
      currentComicPage: 0
    };
  }
  
  updateCurrentComicPage(value) {
   this.setState({currentComicPage: value}); 
  }
  
  renderComicPages() {
    return this.props.comicPageLinks.map((comicPageLink, i) => {
      return <img src={comicPageLink} key={i} className={this._getComicPageClass(i)}/>
    });
  }
  
  renderNavButtons() {
    return this.props.comicPageLinks.map((page, i) => {
      return <ComicReaderNavButton 
                onClick={this.updateCurrentComicPage.bind(this)}
                key={i+1}
                value={i+1}
                text={i+1} />
    })
  }
  
  render() {
    return (
      <div className="comic-reader">
        <div className="current-comic-page">
         {this.renderComicPages()}
        </div>
        <div className="comic-reader-nav">
          {this.renderNavButtons()}
        </div>
      </div>
    );
  }
  
  _isCurrentComicPage(value) {
    return value === this.state.currentComicPage;
  }
  
  _getComicPageClass(value) {
    return this._isCurrentComicPage(value) ? 'visible' : 'hidden';
  }
}

export default ComicReader;
