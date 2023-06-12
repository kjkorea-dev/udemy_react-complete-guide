import PropTypes from 'prop-types'

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem'
import './CourseGoalList.css'

const CourseGoalList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  )
}

CourseGoalList.propTypes = {
  items: PropTypes.array,
  onDeleteItem: PropTypes.func,
}

export default CourseGoalList
