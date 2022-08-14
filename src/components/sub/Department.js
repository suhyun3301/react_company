import SubLayout from '../common/SubLayout'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Department() {
  const subtitle = {
    title: 'About Trello',
    p: 'What’s behind the boards.',
  }

  const [Members, setMembers] = useState([])
  useEffect(() => {
    axios.get(process.env.PUBLIC_URL + '/DB/members.json').then((json) => {
      setMembers(json.data.members)
    })
  }, [])

  return (
    <SubLayout name="department" sub={subtitle}>
      {Members.map((member, i) => {
        return (
          <article key={i}>
            <div className="member-thum">
              <img src={`${process.env.PUBLIC_URL}/img/${member.img}`} alt="" />
            </div>
          </article>
        )
      })}
    </SubLayout>
  )
}

export default Department
