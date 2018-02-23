import React, { Component } from 'react';
import ComicReader from '../ComicReader';
import axios from 'axios';
import { COMICS_URL } from '../../config';

class ComicsPage extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     loading: false,
  //     comicItemLinks: []
  //   };
  // }
  
  // componentDidMount() {
  //   var self = this;
    
  //   this.setState({loading: true}, () => {
  //     axios.get(COMICS_URL)
  //     .then(function(response) {
  //       return response.data;
  //     })
  //     .then(function(response) {
  //       let fetchedComicLinks = response.map(function(comic) {
  //         return comic.source_url;
  //       })
  //       self.setState({loading: false, comicItemLinks: fetchedComicLinks});
  //     });
  //   });
  // }
  
  render() {
    return (
      <div className="comics-page">
        <ComicReader comicPageLinks={["https://martina-wordpress-headless.s3.amazonaws.com/uploads/2018/02/Hourly-Comic-1-MLo-1.jpg", "https://martina-wordpress-headless.s3.amazonaws.com/uploads/2018/02/Hourly-Comic-2-MLo-1.jpg", "https://martina-wordpress-headless.s3.amazonaws.com/uploads/2018/02/Hourly-Comic-3-MLo-1.jpg"]} />
        <ComicReader comicPageLinks={["https://martina-wordpress-headless.s3.amazonaws.com/uploads/2018/02/Hourly-Comic-1-MLo-1.jpg", "https://martina-wordpress-headless.s3.amazonaws.com/uploads/2018/02/Hourly-Comic-2-MLo-1.jpg", "https://martina-wordpress-headless.s3.amazonaws.com/uploads/2018/02/Hourly-Comic-3-MLo-1.jpg"]} />
        <ComicReader comicPageLinks={["https://martina-wordpress-headless.s3.amazonaws.com/uploads/2018/02/Hourly-Comic-1-MLo-1.jpg", "https://martina-wordpress-headless.s3.amazonaws.com/uploads/2018/02/Hourly-Comic-2-MLo-1.jpg", "https://martina-wordpress-headless.s3.amazonaws.com/uploads/2018/02/Hourly-Comic-3-MLo-1.jpg"]} />
      </div>
    );
  }
}

export default ComicsPage;
