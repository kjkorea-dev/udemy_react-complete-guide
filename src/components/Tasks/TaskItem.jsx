import PropTypes from 'prop-types'
import classes from './TaskItem.module.css'

const TaskItem = (props) => {
  return <li className={classes.task}>{props.children}</li>
}

TaskItem.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TaskItem
