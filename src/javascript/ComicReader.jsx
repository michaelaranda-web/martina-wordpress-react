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
    return this.props.comicItem.links.map((link, i) => {
      return <img src={link} key={i} className={this._getComicPageClass(i)}/>
    });
  }
  
  renderNavButtons() {
    return this.props.comicItem.links.map((page, i) => {
      return <ComicReaderNavButton 
                isSelected={this.state.currentComicPage === i}
                onClick={this.updateCurrentComicPage.bind(this)}
                key={i}
                value={i}
                text={i+1} />
    })
  }
  
  render() {
    var comicItem = this.props.comicItem;
    
    if (comicItem.links.length === 0) {
      return <div></div>
    }
    
    return (
      <div className="comic-reader">
        <h2>{comicItem.title}<span>{comicItem.description}</span></h2>
        <div className="container-relative">
          <div className="current-comic-page">
           {this.renderComicPages()}
          </div>
          <div className="comic-reader-nav">
            {this.renderNavButtons()}
          </div>
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
