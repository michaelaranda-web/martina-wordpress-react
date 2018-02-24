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
  
  render() {
    if (this.state.comicItemLinks.length === 0) { return <div></div> }
    
    return (
      <div className="comics-page">
        <ComicReader comicPageLinks={this.state.comicItemLinks[0]} />
        <ComicReader comicPageLinks={["https://martina-wordpress-headless.s3.amazonaws.com/uploads/2018/02/Hourly-Comic-1-MLo-1.jpg", "https://martina-wordpress-headless.s3.amazonaws.com/uploads/2018/02/Hourly-Comic-2-MLo-1.jpg", "https://martina-wordpress-headless.s3.amazonaws.com/uploads/2018/02/Hourly-Comic-3-MLo-1.jpg"]} />
        <ComicReader comicPageLinks={["https://martina-wordpress-headless.s3.amazonaws.com/uploads/2018/02/Hourly-Comic-1-MLo-1.jpg", "https://martina-wordpress-headless.s3.amazonaws.com/uploads/2018/02/Hourly-Comic-2-MLo-1.jpg", "https://martina-wordpress-headless.s3.amazonaws.com/uploads/2018/02/Hourly-Comic-3-MLo-1.jpg"]} />
      </div>
    );
  }
}

export default ComicsPage;
