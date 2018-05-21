import React from 'react'
import propTypes from 'prop-types'
import { VideoPreview } from '../components'

const VideoGrid = ({ toggleModal, videoList }) => {
  const videoGrid = videoList.map(video =>
    (<VideoPreview
      video={video}
      toggleModal={toggleModal}
    />))
  return (
    <div className="video-grid">
      {videoGrid}
    </div>
  )
}

export default VideoGrid

VideoGrid.defaultProps = {
  toggleModal: propTypes.func,
  videoList: propTypes.array
}

VideoGrid.propTypes = {
  toggleModal: propTypes.func,
  videoList: propTypes.array
}
