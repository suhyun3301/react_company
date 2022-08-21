import SubLayout from '../common/SubLayout'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useRef, useEffect } from 'react'

function Community() {
  const subtitle = {
    title: 'Atlassian Community',
    p: 'Explore, discuss, and co-create the products and practices that will take you and your team to the next level with Atlassian Community.',
  }

  const date = new Date()
  const month = date.getMonth()
  const monthString = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
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
        <div className="board-input-top">
          <div className="title">
            <h1>
              Send <br />
              comments
            </h1>

            <div className="today">
              <span className="day">{day}</span>
              <span className="month">{monthString[month]}</span>
            </div>
          </div>

          <p className="time">
            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
            <span>{nowClock()}</span>
          </p>
        </div>

        <div className="input-list">
          <div className="input-item">
            <input type="text" placeholder="title" name="Title" />
            <textarea name="content" placeholder="Content"></textarea>
          </div>
        </div>

        <div className="btns-community-input">
          <button type="button">Cancel</button>
          <button type="button">Registration</button>
        </div>
      </div>

      <div className="board-ouput">
        <ul className="board-list">
          <li className="board-item">
            <h2>ddd</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div className="btns-community-ouput">
              <button type="button">
                <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
              </button>
              <button type="button">
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </SubLayout>
  )
}

export default Community
