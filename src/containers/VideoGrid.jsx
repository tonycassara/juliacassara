import React from 'react'
import { YouTubeEmbed } from '../components'

const videos = new Array(9).fill(
  'https://www.youtube.com/embed/bhtFtc1dqqw??hd=1&modestbranding=0&autohide=1&showinfo=0&controls=1&showsearch=0',
  0,
  9
)

const VideoGrid = () => {
  const videoGrid = videos.map(video => (<YouTubeEmbed video={video} />))
  return (
    <div className="videoGrid">
      {videoGrid}
    </div>
  )
}

export default VideoGrid
