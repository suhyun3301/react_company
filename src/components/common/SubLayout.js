import Footer from './Footer'

function SubLayout({ name, sub, children }) {
  let title = name

  if (title === 'location') {
    title = `contact us`
  } else if (title === 'members') {
    title = 'join'
  }

  return (
    <section className={`container ${name}`}>
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
