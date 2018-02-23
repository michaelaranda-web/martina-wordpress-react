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

export default ComicReaderNavButton;