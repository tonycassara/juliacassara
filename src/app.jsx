import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AboutMe, Contact, DemoReel } from './components'
import VideoGrid from './containers'

const App = () => (
  <div id="main">
    <Switch>
      <Route path="/demo-reel" component={DemoReel} />
      <Route path="/portfolio" component={VideoGrid} />
      <Route path="/about-me" component={AboutMe} />
      <Route path="/contact" component={Contact} />
      <Route component={DemoReel} />
    </Switch>
  </div>
)

export default App
