// https://www.youtube.com/watch?v=duY1Gp06GlA

import React, { Fragment } from 'react'
import { Footer, NavBar } from '../components'

class DemoReel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
    this.toggleLoading = this.toggleLoading.bind(this)
  }

  toggleLoading() {
    this.setState({
      loading: !this.state.loading,
    })
  }

  render() {
    const loadStyle = {
      opacity: 1,
      height: 'calc(65vw / 1.777777777777)',
    }

    return (
      <Fragment>
        <NavBar />
        <div id="reel-wrapper">
          <iframe
            title="video1"
            className="video-reel"
            id="player"
            type="text/html"
            src="https://www.youtube.com/embed/duY1Gp06GlA"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            onLoad={this.toggleLoading}
            style={this.state.loading ? {} : loadStyle}
          />
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default DemoReel
