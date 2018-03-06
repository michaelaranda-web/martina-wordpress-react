import React, { Component } from 'react';
import { getImageLinksForPosts } from '../parsers/WordPressParser';
import FetchSpinner from '../FetchSpinner';
import ComicReader from '../ComicReader';
import { COMICS_URL } from '../../config';

class ComicsPage extends Component {
  constructor() {
    super();
    this.state = {
      comicItemLinks: []
    };
  }
  
  setComicItemLinks(response) {
    var allPostImageLinks = getImageLinksForPosts(response);
    this.setState({comicItemLinks: allPostImageLinks});
  }
  
  renderComicReaders() {
    return this.state.comicItemLinks.map((links, i) => {
      return <ComicReader key={i} comicPageLinks={links} />
    }) 
  }
  
  render() {
    return (
      <FetchSpinner requestUrl={COMICS_URL} onFetchSuccess={this.setComicItemLinks.bind(this)}>
        <div className="comics-page">
          {this.renderComicReaders()}
        </div>
      </FetchSpinner>
    );
  }
}

export default ComicsPage;
