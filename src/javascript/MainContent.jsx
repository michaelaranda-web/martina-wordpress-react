import React, { Component } from 'react';
import { Route } from "react-router-dom";
import HomePage from "./content_pages/HomePage";
import StoryboardPage from "./content_pages/StoryboardPage";
import LifeDrawingsPage from "./content_pages/LifeDrawingsPage";
import LandscapeAndPaintingsPage from "./content_pages/LandscapeAndPaintingsPage";
import GraphicsAndAnimationPage from "./content_pages/GraphicsAndAnimationPage";
import ComicsPage from "./content_pages/ComicsPage";

class MainContent extends Component {
  render() {
    return (
      <div className="main-content">
        <Route exact path="/" component={HomePage}/>
        <Route path="/storyboard" component={StoryboardPage}/>
        <Route path="/sketches" component={LifeDrawingsPage}/>
        <Route path="/landscapes" component={LandscapeAndPaintingsPage}/>
        <Route path="/graphics_and_animation" component={GraphicsAndAnimationPage}/>
        <Route path="/comics" component={ComicsPage}/>
      </div>
    );
  }
}

export default MainContent;
