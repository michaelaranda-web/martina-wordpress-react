import React, { Component } from 'react';
import { getComicInfoForPosts } from '../parsers/WordPressParser';
import FetchSpinner from '../FetchSpinner';
import ComicReader from '../ComicReader';
import { COMICS_URL } from '../../config';

class ComicsPage extends Component {
  constructor() {
    super();
    this.state = {
      comicItems: []
    };
  }
  
  setComicItems(response) {
    var comicItems = getComicInfoForPosts(response);
    this.setState({comicItems: comicItems});
  }
  
  renderComicReaders() {
    return this.state.comicItems.map((comicItem, i) => {
      return <ComicReader key={i} comicItem={comicItem} />
    }) 
  }
  
  render() {
    return (
      <FetchSpinner requestUrl={COMICS_URL} onFetchSuccess={this.setComicItems.bind(this)}>
        <div className="comics-page">
          {this.renderComicReaders()}
        </div>
      </FetchSpinner>
    );
  }
}

export default ComicsPage;
