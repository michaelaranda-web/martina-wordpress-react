import React, { Component } from 'react';
import axios from 'axios';

class FetchSpinner extends Component {
  constructor() {
    super();
    this.state = {
      loading: false
    };
  }    
    
  componentDidMount() {
    var self = this;
    
    this.setState({loading: true}, () => {
      axios.get(this.props.requestUrl)
      .then(function(response) {
        self.setState({loading: false}, () => { self.props.onFetchSuccess(response) }); 
      })
    });
  }
  
  render() {
    if (this.state.loading) {
      return <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" id="spinner-icon" />
    }
    else {
      return this.props.children;
    }
  }
}

export default FetchSpinner;
