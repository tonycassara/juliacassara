import React from 'react'
import propTypes from 'prop-types'

const YouTubeVideo = ({ modalVisible, toggleModal, video }) => (
  // eslint-disable-next-line
  <div id="backdrop"
    className={modalVisible ? 'visible' : 'hidden'}
    onClick={() => toggleModal('')}
  >
    <iframe
      title="video1"
      className="video-embed"
      id="player"
      type="text/html"
      src={video}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  </div>
)

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