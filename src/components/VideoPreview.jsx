import React from 'react';
import propTypes from 'prop-types';
import thumbnails from '../assets/thumbnails/*.jpg';

class VideoPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  handleLoad = () => {
    this.setState({
      loaded: true,
    });
  };

  render() {
    const {
      video: { video, img, type },
      toggleModal,
    } = this.props;

    // eslint-disable-next-line
    const style = {
      animation: `450ms ease-out slideUp ${Math.random() * 500}ms forwards`,
    };

    const imageSource = Object.hasOwnProperty.call(thumbnails, img) ? thumbnails[img] : img;
    return type === 'youtube' ? (
      <div className="video-pane" onClick={() => toggleModal(video)} style={this.state.loaded ? style : {}}>
        <img alt="ok" src={imageSource} className="video-screenshot" onLoad={this.handleLoad} />
        <svg width="100%" height="100%" viewBox="0 0 24 24" className="play-icon">
          <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
        </svg>
      </div>
    ) : (
      <a className="video-pane" href={video} target="_blank" rel="noopener" style={this.state.loaded ? style : {}}>
        <img alt="ok" src={imageSource} className="video-screenshot" onLoad={this.handleLoad} />
        <svg width="100%" height="100%" viewBox="0 0 24 24" className="play-icon">
          <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
        </svg>
      </a>
    );
  }
}

export default VideoPreview;

VideoPreview.defaultProps = {
  toggleModal: propTypes.func,
  video: propTypes.object,
};

VideoPreview.propTypes = {
  toggleModal: propTypes.func,
  video: propTypes.object,
};
