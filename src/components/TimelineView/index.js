import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div>
      <h1 className="main-heading">MY JOURNEY OF CCBP 4.0</h1>
      <div>
        <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
          {timelineItemsList.map(item => {
            if (item.categoryId === 'PROJECT') {
              return <ProjectTimelineCard timelineCard={item} key={item.id} />
            }
            return <CourseTimelineCard timelineCard={item} key={item.id} />
          })}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
