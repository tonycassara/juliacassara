// must be a valid YouTube url without timestamps
const formatYouTubeVideo = ({ url, type }) => {
  const seperator = url.indexOf('=') + 1;
  const videoId = url.substring(seperator);
  return {
    video: `https://www.youtube.com/embed/${videoId}?hd=1&modestbranding=0&autohide=1&showinfo=0&controls=1&showsearch=0`,
    img: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    type,
  };
};

export default formatYouTubeVideo;
