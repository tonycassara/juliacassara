import React from 'react'
import propTypes from 'prop-types'
import LoadingIcon from '../assets/LoadingIcon'

class YouTubeVideo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
    this.toggleLoading = this.toggleLoading.bind(this)
  }

  toggleLoading() {
    this.setState({
      loading: !this.state.loading
    })
  }

  render() {
    const { modalVisible, toggleModal, video } = this.props
    return (
      // eslint-disable-next-line
      <div id="backdrop"
        className={modalVisible ? 'visible' : 'hidden'}
        onClick={() => toggleModal('')}
      >
        {this.state.loading && <LoadingIcon />}
        <iframe
          title="video1"
          onLoad={this.toggleLoading}
          className="video-embed"
          id="player"
          type="text/html"
          src={video}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          mozallowfullscreen
          webkitallowfullscreen
          style={this.state.loading ? {} : {
            opacity: 1,
            height: 'calc(85vw / 1.777777777777)'
          }}
        />
      </div>
    )
  }
}

export default YouTubeVideo

YouTubeVideo.defaultProps = {
  modalVisible: propTypes.bool,
  toggleModal: propTypes.func,
  video: propTypes.string
}

YouTubeVideo.propTypes = {
  modalVisible: propTypes.bool,
  toggleModal: propTypes.func,
  video: propTypes.string
}
