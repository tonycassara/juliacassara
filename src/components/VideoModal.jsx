import React from 'react'
import ReactDOM from 'react-dom'
import propTypes from 'prop-types'

/* global document */

class VideoModal extends React.Component {
  constructor(props) {
    super(props)
    this.containerEl = document.createElement('div')
    this.containerEl.id = 'video-modal'
  }

  componentDidMount() {
    document.getElementById('main').appendChild(this.containerEl)
  }

  componentWillUnmount() {
    document.getElementById('main').removeChild(this.containerEl)
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.containerEl)
  }
}

export default VideoModal

VideoModal.defaultProps = {
  children: propTypes.object,
  modalVisible: propTypes.bool,
}

VideoModal.propTypes = {
  children: propTypes.object,
  modalVisible: propTypes.bool,
}
