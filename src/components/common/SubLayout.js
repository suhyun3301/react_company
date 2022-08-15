import Footer from './Footer'
import { useEffect, useRef, useState } from 'react'

function SubLayout({ name, sub, children }) {
  let title = name
  const section = useRef(null)
  const subTitle = useRef(null)

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
        <div className="sub-title" ref={subTitle}>
          <h2>{sub.title}</h2>
          {sub.count && <span className="num">{sub.count}</span>}
        </div>
        <p>{sub.p}</p>
      </div>

      <div className="content-wrap">
        <div className="content">{children}</div>
        <Footer />
      </div>
    </section>
  )
}

export default SubLayout