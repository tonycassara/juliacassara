import formatYouTubeLink from '../helpers/formatYouTubeLink'

const videoUrls = [
  'https://www.youtube.com/watch?v=zRy2tlXqshk', // keratin
  'https://www.youtube.com/watch?v=_jQFQbUGeuk', // boba
  'https://www.youtube.com/watch?v=RG_Tse0xijw', // niacinamide
  'https://www.youtube.com/watch?v=SbW3kctZk04', // Article Ad | Insta Story | Grayson Living
  'https://www.youtube.com/watch?v=ObiupEsW040', // Grayson Luxury | ver 4 Versace
  'https://www.youtube.com/watch?v=OKDacj33lSM', // Bernhardt Story Post
  'https://www.youtube.com/watch?v=XZxPO1hZSuQ', // Should You Go To A Coding Bootcamp
  'https://www.youtube.com/watch?v=KjjfC_dqHTo', // Audio Technica ATH-M50xBT
  'https://www.youtube.com/watch?v=4Y1v9heACD8', // Why can't code bootcamp grads find jobs?
]

const videoList = videoUrls.map(vid => formatYouTubeLink(vid))

export default videoList
