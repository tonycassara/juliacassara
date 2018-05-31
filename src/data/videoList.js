import formatYouTubeLink from '../helpers/formatYouTubeLink'

const videoUrls = [
  // 'https://www.youtube.com/watch?v=0wJIDTC6ddk',
  'https://www.youtube.com/watch?v=hUklgKPMe1I',
  // 'https://www.youtube.com/watch?v=CUf9ioY19sU',
  'https://www.youtube.com/watch?v=qgtIQisXQQM',
  'https://www.youtube.com/watch?v=rHa6qDSAr8M',
  'https://www.youtube.com/watch?v=m-HpS9g3PjM',
  'https://www.youtube.com/watch?v=3UQukGMqoPY',
  'https://www.youtube.com/watch?v=eTShf6EtQR0',
  'https://www.youtube.com/watch?v=LLd7LgcOYQE',
  'https://www.youtube.com/watch?v=cU9AM7gF7qQ',
  'https://www.youtube.com/watch?v=xiYpKpV1LsY',
  'https://www.youtube.com/watch?v=KgY-eexa5Lo',
  'https://www.youtube.com/watch?v=M4W7yjqL8Ks',
]

const videoList = videoUrls.map(vid => formatYouTubeLink(vid))

export default videoList
