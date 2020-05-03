import React from 'react';
import propTypes from 'prop-types';
import LoadingIcon from '../assets/LoadingIcon';

class FacebookVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
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
      <div
        id="backdrop"
        className={modalVisible ? 'visible' : 'hidden'}
        onClick={() => toggleModal('')}
      >
        {this.state.loading && <LoadingIcon />}
        <iframe
          src={video}
          width="380"
          height="476"
          style="border:none;overflow:hidden"
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allowFullScreen="true"
          style={
            this.state.loading
              ? {}
              : {
                  opacity: 1,
                  height: 'calc(85vw / 1.777777777777)',
                }
          }
        />
      </div>
    );
  }
}

export default FacebookVideo;

FacebookVideo.defaultProps = {
  modalVisible: propTypes.bool,
  toggleModal: propTypes.func,
  video: propTypes.string,
};

FacebookVideo.propTypes = {
  modalVisible: propTypes.bool,
  toggleModal: propTypes.func,
  video: propTypes.string,
};
