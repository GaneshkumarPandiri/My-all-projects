import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {timelineCard} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = timelineCard
  return (
    <div className="chrono-container">
      <img src={imageUrl} alt="project" className="project-image-style" />
      <div className="title-content">
        <h1>{projectTitle}</h1>
        <div className="date">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
