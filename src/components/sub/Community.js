import SubLayout from '../common/SubLayout'
import { useState, useRef, useEffect } from 'react'

function Community() {
  const subtitle = {
    title: 'Atlassian Community',
    p: 'Explore, discuss, and co-create the products and practices that will take you and your team to the next level with Atlassian Community.',
  }

  const date = new Date()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const nowClock = () => {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, '0')
    const mins = String(date.getMinutes()).padStart(2, '0')
    const secs = String(date.getSeconds()).padStart(2, '0')
    return `${hours}:${mins}:${secs}`
  }
  const [Time, setTime] = useState(nowClock)

  useEffect(() => {
    setInterval(() => {
      setTime(nowClock)
    }, 1000)
  }, [])

  return (
    <SubLayout name="community" sub={subtitle}>
      <div className="board-input">
        {`${month} ${day}`}
        <p>{nowClock()}</p>
      </div>

      <div className="board-ouput"></div>
    </SubLayout>
  )
}

export default Community
