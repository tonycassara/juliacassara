import formatYouTubeLink from '../helpers/formatYouTubeLink'

const videoUrls = [
  'https://www.youtube.com/watch?v=zRy2tlXqshk', // keratin
  'https://www.youtube.com/watch?v=t6uB8uQ2XwI', // boba
  'https://www.youtube.com/watch?v=5aXtd8NDb04', // dog food
  'https://www.youtube.com/watch?v=rZX2WUKbfvM', // laundry
  'https://www.youtube.com/watch?v=RG_Tse0xijw', // niacinamide
  'https://www.youtube.com/watch?v=_jQFQbUGeuk', // dog training
  'https://www.youtube.com/watch?v=XZxPO1hZSuQ',
  'https://www.youtube.com/watch?v=KjjfC_dqHTo',
  'https://www.youtube.com/watch?v=4Y1v9heACD8',
]

const videoList = videoUrls.map(vid => formatYouTubeLink(vid))

export default videoList
