// must be a valid YouTube url without timestamps
const formatFacebookVideo = ({ url, img, type }) => {
  return {
    video: encodeURI(
      `https://www.facebook.com/plugins/video.php?href=${url}&show_text=0&width=380`
    ),
    img,
    type,
  };
};

export default formatFacebookVideo;
