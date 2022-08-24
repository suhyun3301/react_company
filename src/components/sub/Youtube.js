import SubLayout from '../common/SubLayout'
import Pop from '../common/Pop'

import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Youtube() {
  const [Show, setShow] = useState(false)
  const [Index, setIndex] = useState(0)
  const Videos = useSelector((store) => store.youtubeReducer.youtube)

  const subtitle = {
    title: 'Trello Views',
    p: 'Trusted by millions, Trello is the visual collaboration tool that creates a shared perspective on any project.',
    count: Videos.length,
  }

  useEffect(() => {
    console.log(Videos)
  }, [])

  return (
    <SubLayout name={'youtube'} sub={subtitle}>
      {Videos.map((item, i) => {
        return (
          <article
            key={i}
            onClick={() => {
              setShow(true)
              setIndex(i)
            }}
          >
            <div className="thum">
              <span className="icon">
                <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
              </span>
              <img
                src={item.snippet.thumbnails.high.url}
                alt={item.snippet.title}
              />
            </div>

            <div className="desc">
              <strong className="owner">
                {item.snippet.videoOwnerChannelTitle}
              </strong>
              <h3 className="title">{item.snippet.title}</h3>
              <p>{item.snippet.description}</p>
              <span className="time">
                {item.snippet.publishedAt.split('T')[0].replace(/-/gi, '.')}
              </span>
            </div>
          </article>
        )
      })}

      {Show && (
        <Pop close={setShow}>
          <div className="video">
            <iframe
              src={`https://www.youtube.com/embed/${Videos[Index].snippet.resourceId.videoId}`}
              frameborder="0"
            ></iframe>
          </div>
        </Pop>
      )}
    </SubLayout>
  )
}

export default Youtube
