import React, { Component } from 'react';
import ComicReader from '../ComicReader';

class ComicsPage extends Component {
  render() {
    return (
      <div className="comics-page">
        <ComicReader comicPages={[1,2,3]} />
        <ComicReader comicPages={[1,2,3]} />
        <ComicReader comicPages={[1,2,3]} />
      </div>
    );
  }
}

export default ComicsPage;
