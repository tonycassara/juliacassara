import React from 'react'
import { YouTubePreview } from '../components'

const videos = new Array(9).fill(
  {
    video: 'https://www.youtube.com/embed/bhtFtc1dqqw??hd=1&modestbranding=0&autohide=1&showinfo=0&controls=1&showsearch=0',
    img: 'https://img.youtube.com/vi/bhtFtc1dqqw/maxresdefault.jpg'
  },
  0,
  9
)

const VideoGrid = () => {
  const videoGrid = videos.map(video => (<YouTubePreview video={video} />))
  return (
    <div className="videoGrid">
      {videoGrid}
    </div>
  )
}

export default VideoGrid
