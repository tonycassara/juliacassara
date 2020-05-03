import formatYouTubeVideo from '../helpers/formatYouTubeVideo';
import formatFacebookVideo from '../helpers/formatFacebookVideo';

const videoUrls = [
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=8yYFet9bqyw' }, // Grayson Luxury x Christopher Guy
  {
    type: 'facebook',
    url: 'https://www.facebook.com/firstmediasoyummy/videos/2604245713017982/',
    img: 'assets/thumbnails/fb-plantbased.png',
  }, // FB video
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=nUg9frbE5vY' }, // Grayson Living | Luxury Home Decor
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=VEMyhLQNXQg' }, // Grayson Luxury | Tell Us What You Need
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=u-5y3fFdo_c' }, // Instagram Story Ad | Grayson Luxury | Design Your Dream Home
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=ObiupEsW040' }, // The Sample Sale | Instagram Story Ad | Grayson Luxury | Versace Home
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=OKDacj33lSM' }, // Bernhardt Story Post
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=YAZ7q3oDYmk' }, // Get The V.I.P. Treatment | Grayson Living | Instagram Story
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=aE6bMyUF4bg' }, // Beekeeper's Naturals
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=Sj3SMgfqKd4' }, // Grayson Living | Black Friday 2019 | IGTV
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=q2yJthvwOEc' }, // Meze Classic 99 Luxury Wood Headphones | My Honest Review
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=zRy2tlXqshk' }, // Keratin
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=a1j8tnRshMQ' }, // How I Got My First Job as a Programmer (with no experience)
];

const videoList = videoUrls.map((vid) => {
  switch (vid.type) {
    case 'facebook':
      return formatFacebookVideo(vid);
    default:
      return formatYouTubeVideo(vid);
  }
});

export default videoList;
