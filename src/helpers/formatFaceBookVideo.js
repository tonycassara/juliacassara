// must be a valid YouTube url without timestamps
const formatFacebookVideo = ({ url, img, type }) => {
  return {
    video: url,
    img,
    type,
  };
};

export default formatFacebookVideo;
