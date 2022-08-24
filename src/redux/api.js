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

export const getYoutube = async () => {
  const key = 'AIzaSyDSdFyxbZ_BnbSiuPS3M6Ug9mM75LfRyJg'
  const playList = 'PL_zwLMPR5YRLPV-Ni5MG2mds5p6RwupoD'
  const num = 10
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playList}&maxResults=${num}`

  return await axios.get(url)
}

export const getMembers = async () => {
  const url = process.env.PUBLIC_URL + '/DB/members.json'
  return await axios.get(url)
}
