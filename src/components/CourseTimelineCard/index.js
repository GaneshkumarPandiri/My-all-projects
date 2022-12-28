// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {timelineCard} = props
  const {courseTitle, description, duration, tagsList} = timelineCard
  return (
    <div className="course-container">
      <div className="title-date-container">
        <h1>{courseTitle}</h1>
        <div className="date-num">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul className="all-list-items">
        {tagsList.map(item => (
          <li className="list-item" key={item.id}>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
