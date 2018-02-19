import React, { Component } from 'react';
import HomePageContent from './HomePageContent';
import NavBar from './NavBar';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <HomePageContent />
      </div>
    );
  }
}

export default App;
