import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AboutMe, Contact, DemoReel, Photo } from './components';
import VideoGrid from './containers';

const App = () => (
  <div id="main">
    <Router>
      <Switch>
        <Route path="/demo-reel" component={DemoReel} />
        <Route path="/portfolio" component={VideoGrid} />
        <Route path="/photo" component={Photo} />
        <Route path="/about-me" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={VideoGrid} />
      </Switch>
    </Router>
  </div>
);

export default App;
