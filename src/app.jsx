import React from 'react'
import { NavBar, VideoModal, YouTubeVideo } from './components'
import VideoGrid from './containers'

/* global document */

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      selectedVideo: '',
      videoList: new Array(9).fill(
        {
          video: 'https://www.youtube.com/embed/bhtFtc1dqqw??hd=1&modestbranding=0&autohide=1&showinfo=0&controls=1&showsearch=0',
          img: 'https://img.youtube.com/vi/bhtFtc1dqqw/maxresdefault.jpg'
        },
        0,
        9
      )
    }
    this.toggleModal = this.toggleModal.bind(this)
    this.toggleModalClass = this.toggleModalClass.bind(this)
  }

  toggleModalClass() {
    const videoModal = document.getElementById('video-modal')
    if (this.state.modalVisible) {
      videoModal.classList.remove('visible')
      videoModal.classList.add('hidden')
    } else {
      videoModal.classList.remove('hidden')
      videoModal.classList.add('visible')
    }
  }

  async toggleModal(video) {
    this.toggleModalClass()
    await this.setState({
      modalVisible: !this.state.modalVisible,
      selectedVideo: video,
    })
  }

  render() {
    const { modalVisible, selectedVideo, videoList } = this.state
    return (
      <div id="main">
        <NavBar />
        <VideoGrid toggleModal={this.toggleModal} videoList={videoList} />
        <VideoModal
          modalVisible={modalVisible}
          selectedVideo={selectedVideo}
        >
          <YouTubeVideo
            modalVisible={modalVisible}
            toggleModal={this.toggleModal}
            video={selectedVideo}
          />
        </VideoModal>
      </div>
    )
  }
}

export default App
