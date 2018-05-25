import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AboutMe, Contact } from './components'
import VideoGrid from './containers'

const App = () => (
  <div id="main">
    <Switch>
      <Route path="/portfolio" component={VideoGrid} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/contact" component={Contact} />
      <Route component={VideoGrid} />
    </Switch>
  </div>
)

export default App
