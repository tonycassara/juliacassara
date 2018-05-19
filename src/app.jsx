import React from 'react'
import { NavBar, YouTubeModal } from './components'
import VideoGrid from './containers'

const App = () => (
  <div className="main">
    <NavBar />
    <VideoGrid />
    <YouTubeModal />
  </div>
)

export default App
