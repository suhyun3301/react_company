import { useSelector } from 'react-redux'

function People() {
  const Members = useSelector((store) => store.memberReducer.members)

  return (
    <section className="main-box people">
      <h1>
        From incubator to IPO,
        <br /> the most successful <br />
        startups run on the Atlassian suite
      </h1>

      <p>
        Regardless of what stage of growth you're in, the Atlassian suite
        empowers you to accomplish high quality work, faster - as a team. How do
        we know? Because our tools were the foundation upon which we transformed
        Atlassian from a startup into a $6B publicly traded company, and our
        team still relies on these same tools each and every day.
      </p>
      {Members.map((member, i) => {
        if (i >= 4) return

        return (
          <article key={i} className="member-item">
            <div className="member-thum">
              <img
                src={`${process.env.PUBLIC_URL}/img/${member.img}`}
                alt={member.name}
              />
            </div>
            <div className="member-info">
              <span className="position">{member.position}</span>
              <strong className="name">{member.name}</strong>
              {/* <p>{member.comment}</p> */}
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default People
