import React, { Component } from 'react';

class ComicReaderNavButton extends Component {
  handleClick() {
    this.props.onClick(this.props.value);
  }
  
  buttonClasses() {
    var classes = "nav-button";
    
    if (this.props.isSelected) {
      classes += " selected";
    }
    
    return classes;
  }
  
  render() {
    return (
      <button 
        className={this.buttonClasses()}
        onClick={this.handleClick.bind(this)} >
          {this.props.text}
      </button>
    );
  }
}

export default ComicReaderNavButton;