import Footer from './Footer'
import { useEffect, useRef } from 'react'

function SubLayout({ name, sub, children }) {
  let title = name
  const section = useRef(null)

  if (title === 'location') {
    title = `contact us`
  } else if (title === 'members') {
    title = 'join'
  }

  useEffect(() => {
    section.current.classList.add('on')
  }, [])

  return (
    <section className={`container ${name}`} ref={section}>
      <div className="title-box">
        <h1>{title}</h1>
        <h2>{sub.title}</h2>
        <p>{sub.p}</p>
      </div>

      <div className="content">
        {children}
        <Footer />
      </div>
    </section>
  )
}

export default SubLayout
