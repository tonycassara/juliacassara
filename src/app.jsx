import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AboutMe } from './components'
import VideoGrid from './containers'

const App = () => (
  <div id="main">
    <Switch>
      <Route exact path="/portfolio" component={VideoGrid} />
      <Route path="/aboutme" component={AboutMe} />
      {/* <Route path="/contact" component={Contact} /> */}
      {/* when none of the above match, <NoMatch> will be rendered */}
      <Route component={VideoGrid} />
    </Switch>
  </div>
)

export default App
