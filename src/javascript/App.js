import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import MainContent from './MainContent';
import NavBar from './NavBar';
import '../stylesheets/App.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <MainContent />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
