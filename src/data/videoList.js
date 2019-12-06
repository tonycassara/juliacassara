import formatYouTubeLink from '../helpers/formatYouTubeLink'

const videoUrls = [
  'https://www.youtube.com/watch?v=8yYFet9bqyw', // Grayson Luxury x Christopher Guy
  'https://www.youtube.com/watch?v=nUg9frbE5vY', // Grayson Living | Luxury Home Decor
  'https://www.youtube.com/watch?v=VEMyhLQNXQg', // Grayson Luxury | Tell Us What You Need
  'https://www.youtube.com/watch?v=u-5y3fFdo_c', // Instagram Story Ad | Grayson Luxury | Design Your Dream Home
  'https://www.youtube.com/watch?v=ObiupEsW040', // The Sample Sale | Instagram Story Ad | Grayson Luxury | Versace Home
  'https://www.youtube.com/watch?v=OKDacj33lSM', // Bernhardt Story Post
  'https://www.youtube.com/watch?v=YAZ7q3oDYmk', // Get The V.I.P. Treatment | Grayson Living | Instagram Story
  'https://www.youtube.com/watch?v=aE6bMyUF4bg', // Beekeeper's Naturals
  'https://www.youtube.com/watch?v=Sj3SMgfqKd4', // Grayson Living | Black Friday 2019 | IGTV
  'https://www.youtube.com/watch?v=q2yJthvwOEc', // Meze Classic 99 Luxury Wood Headphones | My Honest Review
  'https://www.youtube.com/watch?v=zRy2tlXqshk', // Keratin
  'https://www.youtube.com/watch?v=a1j8tnRshMQ', // How I Got My First Job as a Programmer (with no experience)
]

const videoList = videoUrls.map(vid => formatYouTubeLink(vid))

export default videoList
