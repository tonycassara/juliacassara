import React from 'react'
import ReactDOM from 'react-dom'
import propTypes from 'prop-types'
import { YouTubeVideo } from '../components'

/* global document */

const openModal = (video) => {
  console.log(video)
  return ReactDOM.createPortal(
    <YouTubeVideo video={video} />,
    document.getElementById('videoModal')
  )
}

const YouTubePreview = ({ video: { video, img } }) => (
  // eslint-disable-next-line
  <div className="videoPane" onClick={() => openModal(video)}>
    <img
      alt="ok"
      src={img}
      className="videoScreenshot"
    />
  </div>
)

export default YouTubePreview

YouTubePreview.defaultProps = {
  video: propTypes.object
}

YouTubePreview.propTypes = {
  video: propTypes.object
}
