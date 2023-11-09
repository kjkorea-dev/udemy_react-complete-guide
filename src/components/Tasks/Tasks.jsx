import PropTypes from 'prop-types'
import Section from '../UI/Section'
import TaskItem from './TaskItem'
import classes from './Tasks.module.css'

const Tasks = (props) => {
  let content = <h2>No tasks found. Start adding some.</h2>

  if (props.loading) {
    content = <h2>Loading...</h2>
  }

  if (props.items.length > 0) {
    content = props.items.map((task) => (
      <TaskItem key={task.id}>{task.text}</TaskItem>
    ))
  }

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  )
}

Tasks.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onFetch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
}

export default Tasks
