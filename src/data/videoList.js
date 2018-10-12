import formatYouTubeLink from '../helpers/formatYouTubeLink'

const videoUrls = [
  'https://www.youtube.com/watch?v=0wJIDTC6ddk', // easy makeup
  'https://www.youtube.com/watch?v=CUf9ioY19sU', // lookbook
  'https://www.youtube.com/watch?v=KgY-eexa5Lo', // pop socket review
  'https://www.youtube.com/watch?v=qgtIQisXQQM', // my evening routine
  'https://www.youtube.com/watch?v=4Y1v9heACD8', // how to find a job
  'https://www.youtube.com/watch?v=3UQukGMqoPY', // sf apt tour
  'https://www.youtube.com/watch?v=ounWODHg9bs', // lasik surgery
  'https://www.youtube.com/watch?v=LLd7LgcOYQE', // boyfriend does my vo
  'https://www.youtube.com/watch?v=ewVQqRZgg58', // why i left youtube
  // 'https://www.youtube.com/watch?v=hUklgKPMe1I', // full frame point shoot
  // 'https://www.youtube.com/watch?v=M4W7yjqL8Ks', // coding bootcamp
  // 'https://www.youtube.com/watch?v=oxwdWAqlLE0', // haul bellelily
  // 'https://www.youtube.com/watch?v=xiYpKpV1LsY', // bose vs sony headphones
  // 'https://www.youtube.com/watch?v=m-HpS9g3PjM', // haul slippers
]

const videoList = videoUrls.map(vid => formatYouTubeLink(vid))

export default videoList
