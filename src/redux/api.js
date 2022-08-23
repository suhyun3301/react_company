import axios from 'axios'

export const getFlickr = async (opt) => {
  const key = 'fc53ebefe80f178c0979785406ddb3d5'
  const num = 100
  const extras = 'tags, description, views'
  const method_search = 'flickr.photos.search'
  const method_interest = 'flickr.interestingness.getList'
  const method_user = 'flickr.people.getPhotos'

  let url = ''
  if (opt.type === 'interest') {
    url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&extras=${extras}&format=json&nojsoncallback=1`
  }

  if (opt.type === 'search') {
    url = `https://www.flickr.com/services/rest/?method=${method_search}&per_page=${num}&api_key=${key}&extras=${extras}&format=json&nojsoncallback=1&tags=${opt.tag}`
  }

  if (opt.type === 'user') {
    url = `https://www.flickr.com/services/rest/?method=${method_user}&per_page=${num}&api_key=${key}&extras=${extras}&format=json&nojsoncallback=1&tags1&user_id=${opt.owner}`
  }

  return await axios.get(url)
}
