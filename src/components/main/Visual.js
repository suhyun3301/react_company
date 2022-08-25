function Visual() {
  return (
    <section className="main-box visual">
      <h1>
        Trello helps
        <br />
        teams move work <br />
        forward.
      </h1>

      <p>
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is
        unique—accomplish it all with Trello.
      </p>

      <figure>
        <video
          src={process.env.PUBLIC_URL + '/img/video_main.mp4'}
          loop
          muted
          autoPlay
        ></video>
      </figure>
    </section>
  )
}

export default Visual
