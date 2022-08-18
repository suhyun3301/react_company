import SubLayout from '../common/SubLayout'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Gallery() {
  const subtitle = {
    title: 'Work Life',
    p: 'PRODUCTS & NEWS',
  }

  const [Items, setItems] = useState([])

  useEffect(() => {
    const key = 'fc53ebefe80f178c0979785406ddb3d5'
    const num = 100
    const method_interest = 'flickr.interestingness.getList'
    const url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`

    axios.get(url).then((json) => {
      setItems(json.data.photos.photo)
    })
  }, [])

  return (
    <SubLayout name="gallery" sub={subtitle}>
      {Items.map((item, i) => {
        return (
          <article key={i} className="flicker">
            <div className="img-box">
              <img
                src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
                alt={item.title}
              />

              <div className="info">
                <div className="avatar">
                  <img
                    src={`http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${item.owner}.jpg`}
                    alt={item.owner}
                    onError={(e) => {
                      e.target.setAttribute(
                        'src',
                        'https://www.flickr.com/images/buddyicon.gif'
                      )
                    }}
                  />
                </div>
                <div className="info-text">
                  <p className="title">{item.title}</p>
                  <span>{item.owner}</span>
                </div>
              </div>
            </div>
          </article>
        )
      })}
    </SubLayout>
  )
}

export default Gallery
