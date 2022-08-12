function SubLayout({ name, children }) {
  let title = name

  if (title === 'location') {
    title = `contact us`
  } else if (title === 'members') {
    title = 'join'
  }

  return (
    <section className={`content ${name}`}>
      <h1 className="title">{title}</h1>
      {children}
    </section>
  )
}

export default SubLayout
