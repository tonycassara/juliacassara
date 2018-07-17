import React from 'react'
import propTypes from 'prop-types'

class VideoPreview extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loaded: false }
    this.handleLoad = this.handleLoad.bind(this)
  }

  handleLoad() {
    this.setState({
      loaded: true,
    })
  }

  render() {
    const {
      video: { video, img },
      toggleModal,
    } = this.props
    // eslint-disable-next-line
    const style = {
      animation: `450ms ease-out slideUp ${Math.random() * 500}ms forwards`,
    }
    return (
      <div
        className="video-pane"
        onClick={() => toggleModal(video)}
        style={this.state.loaded ? style : {}}
      >
        <img
          alt="ok"
          src={img}
          className="video-screenshot"
          onLoad={this.handleLoad}
        />
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          className="play-icon"
        >
          <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
        </svg>
      </div>
    )
  }
}

export default VideoPreview

VideoPreview.defaultProps = {
  toggleModal: propTypes.func,
  video: propTypes.object,
}

VideoPreview.propTypes = {
  toggleModal: propTypes.func,
  video: propTypes.object,
}
