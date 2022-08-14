import SubLayout from '../common/SubLayout'
import { useRef, useEffect } from 'react'

function Location() {
  const subtitle = {
    title: 'Contact support',
    p: 'For specific account or billing questions, security concerns, or answers not available on our help site, we’re happy to help.',
  }
  const { kakao } = window
  const mapBox = useRef(null)
  const mapOption = {
    center: new kakao.maps.LatLng(37.394776, 127.11116),
    level: 3,
  }

  const imgSrc = process.env.PUBLIC_URL + '/img/trello-map-icon.svg'
  const imgSize = new kakao.maps.Size(30, 30)
  const imgOption = { offset: new kakao.maps.Point(15, 30) }
  const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize, imgOption)

  const marker = new kakao.maps.Marker({
    position: mapOption.center,
    image: markerImage,
  })

  useEffect(() => {
    const map = new kakao.maps.Map(mapBox.current, mapOption)
    marker.setMap(map)
  }, [])

  return (
    <SubLayout name={'location'} sub={subtitle}>
      <div id="map" ref={mapBox}></div>
    </SubLayout>
  )
}

export default Location
