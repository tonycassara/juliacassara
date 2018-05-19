import React from 'react'
import propTypes from 'prop-types'

const YouTubeEmbed = ({ video }) => (
  <div className="videoPane">
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
  </div>
)

export default YouTubeEmbed

YouTubeEmbed.defaultProps = {
  video: propTypes.string
}

YouTubeEmbed.propTypes = {
  video: propTypes.string
}
