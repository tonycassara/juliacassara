import formatYouTubeVideo from '../helpers/formatYouTubeVideo';

/**
 *
 * FB video example
 * {
 *   type: 'facebook',
 *   url: 'https://www.facebook.com/firstmediasoyummy/videos/2604245713017982/',
 *   img: 'fb-plantbased',
 * }
 */

const videoUrls = [
  {
    type: 'facebook',
    url: 'https://www.facebook.com/1658649031115908/posts/2571278879852914',
    img: 'chickpea-potato-fritters',
  }, // Chickpea & Sweet Potato Fritters
  {
    type: 'facebook',
    url: 'https://www.facebook.com/1658649031115908/posts/2559609134353222',
    img: 'umami-glazed-pork-meatballs',
  }, // Umami Glazed Pork Meatballs
  {
    type: 'facebook',
    url: 'https://www.facebook.com/1658649031115908/posts/2572229053091230',
    img: 'buffalo-chicken-rice-bowl',
  }, // Buffalo Chicken Rice Bowl
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=8yYFet9bqyw' }, // Grayson Luxury x Christopher Guy
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=nUg9frbE5vY' }, // Grayson Living | Luxury Home Decor
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=VEMyhLQNXQg' }, // Grayson Luxury | Tell Us What You Need
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=u-5y3fFdo_c' }, // Instagram Story Ad | Grayson Luxury | Design Your Dream Home
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=ObiupEsW040' }, // The Sample Sale | Instagram Story Ad | Grayson Luxury | Versace Home
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=OKDacj33lSM' }, // Bernhardt Story Post
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=YAZ7q3oDYmk' }, // Get The V.I.P. Treatment | Grayson Living | Instagram Story
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=aE6bMyUF4bg' }, // Beekeeper's Naturals
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=Sj3SMgfqKd4' }, // Grayson Living | Black Friday 2019 | IGTV
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=yasXcOpToUk' }, // All About Retinol | BeautyBio
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=LmrvH6NEzXw' }, // Shop Christmas Decorations at Grayson Luxury
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=_JusDjKFMlk' }, // The Holiday Sale | Grayson Living
];

const videoList = videoUrls.map(({ url, img, type }) => {
  switch (type) {
    case 'facebook':
      return {
        video: url,
        img,
        type,
      };
    default:
      return formatYouTubeVideo({ url, img, type });
  }
});

export default videoList;
