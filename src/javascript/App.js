import React, { Component } from 'react';
import '../stylesheets/App.css';

class App extends Component {
  componentDidMount() {
    fetch('https://martina-wordpress-headless.herokuapp.com/wp-json/wp/v2/media').then(function(response) {
      return response.json();
    }).then(function(response) {
      console.log(response);
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
