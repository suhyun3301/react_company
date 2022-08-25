import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

function Video() {
  const Videos = useSelector((store) => store.youtubeReducer.youtube)

  return (
    <section className="main-box video">
      <div className="inner">
        <div className="text">
          <h1>Our product in action</h1>
          <p>Explore all the ways Trello can power team productivity.</p>
        </div>

        <Swiper
          pagination={{
            type: 'fraction',
          }}
          scrollbar={true}
          navigation={true}
          slidesPerView={'auto'}
          spaceBetween={30}
          modules={[Pagination, Navigation, Scrollbar]}
          className="swiper-video"
        >
          {Videos.map((item, i) => {
            if (i >= 4) return

            return (
              <SwiperSlide key={i}>
                <article>
                  <div className="thum">
                    <iframe
                      src={`https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`}
                      frameborder="0"
                    ></iframe>
                  </div>

                  <div className="desc">
                    <h3 className="title">{item.snippet.title}</h3>
                    <p>{item.snippet.description}</p>
                  </div>

                  {/* <div className="thum-img">
                    <img
                      src={item.snippet.thumbnails.high.url}
                      alt={item.snippet.title}
                    />
                  </div> */}
                </article>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Video
