import SubLayout from '../common/SubLayout'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Gallery() {
  const subtitle = {
    title: 'Work Life',
    p: 'PRODUCTS & NEWS',
  }

  useEffect(() => {
    const key = 'fc53ebefe80f178c0979785406ddb3d5'
    const num = 20
    const method_interest = 'flickr.interestingness.getList'
    const url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`

    axios.get(url).then((json) => {
      console.log(json.data)
    })
  }, [])

  return <SubLayout name="gallery" sub={subtitle}></SubLayout>
}

export default Gallery
