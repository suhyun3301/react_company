import SubLayout from '../common/SubLayout'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Youtube() {
  const [Videos, setVideos] = useState([])
  const subtitle = {
    title: 'Trello Views',
    p: 'Trusted by millions, Trello is the visual collaboration tool that creates a shared perspective on any project.',
  }

  useEffect(() => {
    const key = 'AIzaSyDSdFyxbZ_BnbSiuPS3M6Ug9mM75LfRyJg'
    const playList = 'PL_zwLMPR5YRLPV-Ni5MG2mds5p6RwupoD'
    const num = 10
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playList}&maxResults=${num}`

    axios.get(url).then((json) => {
      setVideos(json.data.items)
    })
  }, [])

  return (
    <SubLayout name={'youtube'} sub={subtitle}>
      {Videos.map((item, i) => {
        return (
          <article key={i}>
            <div className="img-box">
              <img
                src={item.snippet.thumbnails.standard.url}
                alt={item.snippet.title}
              />
            </div>

            <strong>{item.snippet.videoOwnerChannelTitle}</strong>
            <h3>{item.snippet.title}</h3>
            <p>{item.snippet.description}</p>
            <span>
              {item.snippet.publishedAt.split('T')[0].replace(/-/gi, '.')}
            </span>
          </article>
        )
      })}
    </SubLayout>
  )
}

export default Youtube
