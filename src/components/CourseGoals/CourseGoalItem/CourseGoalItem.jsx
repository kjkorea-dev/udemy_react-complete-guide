import PropTypes from 'prop-types'

import './CourseGoalItem.css'

const CourseGoalItem = (props) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id)
  }

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  )
}

CourseGoalItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default CourseGoalItem
