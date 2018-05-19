import React from 'react'
import propTypes from 'prop-types'

const YouTubeVideo = ({ video }) => (
  <iframe
    title="video1"
    className="videoEmbed"
    id="player"
    type="text/html"
    width="100%"
    height="100%"
    src={video}
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen
  />
)

export default YouTubeVideo

YouTubeVideo.defaultProps = {
  video: propTypes.string
}

YouTubeVideo.propTypes = {
  video: propTypes.string
}
