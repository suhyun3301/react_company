import Visual from './Visual'
import News from './News'
import People from './People'
import Content from './Content'
import Video from './Video'
import Footer from '../common/Footer'

function Main() {
  return (
    <>
      <div className="main">
        <Visual />
        <Content />
        <People />
        <News />
        <Video />
        <Footer />
      </div>
    </>
  )
}

export default Main
