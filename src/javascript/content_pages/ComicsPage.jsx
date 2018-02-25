import React, { Component } from 'react';
import { getImageLinksForPosts } from '../parsers/WordPressParser';
import ComicReader from '../ComicReader';
import axios from 'axios';
import { COMICS_URL } from '../../config';

class ComicsPage extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      comicItemLinks: []
    };
  }
  
  componentDidMount() {
    var self = this;
    
    this.setState({loading: true}, () => {
      axios.get(COMICS_URL)
      .then(function(response) {
        var allPostImageLinks = getImageLinksForPosts(response);
        self.setState({loading: false, comicItemLinks: allPostImageLinks});
      })
    });
  }
  
  renderComicReaders() {
    return this.state.comicItemLinks.map((links, i) => {
      return <ComicReader key={i} comicPageLinks={links} />
    }) 
  }
  
  render() {
    if (this.state.comicItemLinks.length === 0) { return <div></div> }
    
    return (
      <div className="comics-page">
        {this.renderComicReaders()}
      </div>
    );
  }
}

export default ComicsPage;
