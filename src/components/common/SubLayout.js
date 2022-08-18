import Footer from './Footer'
import { useEffect, useRef } from 'react'
import { Route, Switch } from 'react-router-dom'

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
        {name === 'gallery' && <button>search</button>}
      </div>

      <div className="content-wrap">
        <div className="content">{children}</div>

        <Switch>
          <Route path="/department">
            <Footer type={'fixed'} />
          </Route>

          <Route path="/">
            <Footer />
          </Route>
        </Switch>
      </div>
    </section>
  )
}

export default SubLayout
