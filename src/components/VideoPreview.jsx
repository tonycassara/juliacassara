import React from 'react'
import propTypes from 'prop-types'

const VideoPreview = ({ video: { video, img }, toggleModal }) => (
  // eslint-disable-next-line
  <div
    className="video-pane"
    onClick={() => toggleModal(video)}
    style={{
      animation: `450ms ease-out slideUp ${Math.random() * 500}ms forwards`,
    }}
  >
    <img alt="ok" src={img} className="video-screenshot" />
    <svg width="100%" height="100%" viewBox="0 0 24 24" className="play-icon">
      <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
    </svg>
  </div>
)

export default VideoPreview

VideoPreview.defaultProps = {
  toggleModal: propTypes.func,
  video: propTypes.object,
}

VideoPreview.propTypes = {
  toggleModal: propTypes.func,
  video: propTypes.object,
}
