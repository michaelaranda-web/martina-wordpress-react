import React, { Component } from 'react';
import FetchSpinner from '../FetchSpinner';
import { getImageLinksForPosts } from '../parsers/WordPressParser';
import { HOME_PAGE_CONTENT_URL } from '../../config';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnOneLinks: [],
      columnTwoLinks: []
    };
  }
  
  setMediaItems(response) {
    var homeImageLinks = getImageLinksForPosts(response);
    var flattenedHomeImageLinks = [].concat.apply([], homeImageLinks);
    
    var columnOneLinks = [];
    var columnTwoLinks = [];
    
    flattenedHomeImageLinks.map((imageLink, i) => {
      if (i % 2 === 0) {
        columnOneLinks.push(imageLink);
      } else {
        columnTwoLinks.push(imageLink);
      }
    })
    
    this.setState({columnOneLinks: columnOneLinks});
    this.setState({columnTwoLinks: columnTwoLinks});
  }
  
  render() {
    return (
      <div className="home-page">
        <FetchSpinner requestUrl={HOME_PAGE_CONTENT_URL} onFetchSuccess={this.setMediaItems.bind(this)}>
          <div className="column-one">
            <div className="flex-container">
              {
                this.state.columnOneLinks.map((link, i) => {
                  return (
                    <div className="col-one-item" key={i}>
                      <img src={link} />
                    </div>
                  ) 
                })
              }
            </div>
          </div>
          <div className="column-two">
            <div className="flex-container">
              {
                this.state.columnTwoLinks.map((link, i) => {
                  return (
                    <div className="col-two-item" key={i}>
                      <img src={link} />
                    </div>
                  ) 
                })
              }
            </div>
          </div>
        </FetchSpinner>
      </div>
    );
  }
}

export default HomePage;
