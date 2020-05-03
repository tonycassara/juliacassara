import React from 'react';
import propTypes from 'prop-types';

class YouTubeVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  toggleLoading = () => {
    this.setState({
      loading: !this.state.loading,
    });
  };

  render() {
    const { modalVisible, toggleModal, video } = this.props;
    return (
      <div id="backdrop" className={modalVisible ? 'visible' : 'hidden'} onClick={() => toggleModal('')}>
        <iframe
          title="video1"
          className="video-embed video-embed-show"
          id="player"
          type="text/html"
          src={video}
          frameBorder="0"
          allow="autoplay; encrypted-media"
        />
      </div>
    );
  }
}

export default YouTubeVideo;

YouTubeVideo.defaultProps = {
  modalVisible: propTypes.bool,
  toggleModal: propTypes.func,
  video: propTypes.string,
};

YouTubeVideo.propTypes = {
  modalVisible: propTypes.bool,
  toggleModal: propTypes.func,
  video: propTypes.string,
};
