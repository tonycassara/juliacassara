import React from 'react'
import propTypes from 'prop-types'

const VideoPreview = ({ video: { video, img }, toggleModal }) => (
  // eslint-disable-next-line
  <div className="video-pane" onClick={() => toggleModal(video)}>
    <img
      alt="ok"
      src={img}
      className="video-screenshot"
    />
    <svg viewBox="0 0 24 24" className="play-icon">
      <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
    </svg>
  </div>
)

export default VideoPreview

VideoPreview.defaultProps = {
  toggleModal: propTypes.func,
  video: propTypes.object
}

VideoPreview.propTypes = {
  toggleModal: propTypes.func,
  video: propTypes.object
}