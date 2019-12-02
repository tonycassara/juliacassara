import formatYouTubeLink from '../helpers/formatYouTubeLink'

const videoUrls = [
  'https://www.youtube.com/watch?v=SPYdF35acIQ', // Grayson Luxury x Christopher Guy
  'https://www.youtube.com/watch?v=nUg9frbE5vY', // Grayson Living | Luxury Home Decor
  'https://www.youtube.com/watch?v=a1j8tnRshMQ', // How I Got My First Job as a Programmer (with no experience)
  'https://www.youtube.com/watch?v=u-5y3fFdo_c', // Instagram Story Ad | Grayson Luxury | Design Your Dream Home
  'https://www.youtube.com/watch?v=ObiupEsW040', // The Sample Sale | Instagram Story Ad | Grayson Luxury | Versace Home
  'https://www.youtube.com/watch?v=OKDacj33lSM', // Bernhardt Story Post
  'https://www.youtube.com/watch?v=aE6bMyUF4bg', // Beekeeper's Naturals
  'https://www.youtube.com/watch?v=Sj3SMgfqKd4', // Grayson Living | Black Friday 2019 | IGTV
  'https://www.youtube.com/watch?v=zRy2tlXqshk', // keratin
]

const videoList = videoUrls.map(vid => formatYouTubeLink(vid))

export default videoList
