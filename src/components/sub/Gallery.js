import SubLayout from '../common/SubLayout'
import { useState, useEffect, useRef } from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'

function Gallery() {
  const subtitle = {
    title: 'Work Life',
    p: 'PRODUCTS & NEWS',
  }

  const [Items, setItems] = useState([])

  const getFlickr = async () => {
    const key = 'fc53ebefe80f178c0979785406ddb3d5'
    const num = 100
    const method_interest = 'flickr.interestingness.getList'
    const extras = 'tags, description, views'
    const url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&extras=${extras}&format=json&nojsoncallback=1`

    await axios.get(url).then((json) => {
      setItems(json.data.photos.photo)
    })
  }

  useEffect(() => {
    getFlickr()
  }, [])

  return (
    <SubLayout name="gallery" sub={subtitle}>
      <div className="show">
        {Items[0] !== undefined ? (
          <article className="on">
            <div className="img-box">
              <img
                src={`https://live.staticflickr.com/${Items[0].server}/${Items[0].id}_${Items[0].secret}_b.jpg`}
                alt={Items[0].title}
              />
            </div>

            <div className="img-info">
              <div className="avatar">
                <img
                  src={`http://farm${Items[0].farm}.staticflickr.com/${Items[0].server}/buddyicons/${Items[0].owner}.jpg`}
                  alt={Items[0].owner}
                  onError={(e) => {
                    e.target.setAttribute(
                      'src',
                      'https://www.flickr.com/images/buddyicon.gif'
                    )
                  }}
                />
              </div>

              <div className="info">
                <h1 className="title">{Items[0].title}</h1>
                <span className="owner">{Items[0].owner}</span>
                <strong className="views">
                  <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                  {Items[0].views}
                </strong>
                <p>{Items[0].description._content}</p>

                <span className="tags">
                  {Items[0].tags.split(' ').map((tag, i) => {
                    return (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    )
                  })}
                </span>
              </div>
            </div>
          </article>
        ) : (
          ' '
        )}
      </div>

      <div className="list">
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
      </div>
    </SubLayout>
  )
}

export default Gallery
