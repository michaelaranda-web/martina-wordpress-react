import React, { Component } from 'react';
import { Route } from "react-router-dom";
import HomePage from "./content_pages/HomePage";
import StoryboardPage from "./content_pages/StoryboardPage";
import LifeDrawingsPage from "./content_pages/LifeDrawingsPage";
import GraphicsAndAnimationPage from "./content_pages/GraphicsAndAnimationPage";
import ComicsPage from "./content_pages/ComicsPage";
import { MEDIA_URL } from '../config';

class MainContent extends Component {
  render() {
    return (
      <div className="main-content">
        <Route exact path="/" component={HomePage}/>
        <Route path="/storyboard" component={StoryboardPage}/>
        <Route path="/life_drawings" component={LifeDrawingsPage}/>
        <Route path="/graphics_and_animation" component={GraphicsAndAnimationPage}/>
        <Route path="/comics" component={ComicsPage}/>
      </div>
    );
  }
}

export default MainContent;
