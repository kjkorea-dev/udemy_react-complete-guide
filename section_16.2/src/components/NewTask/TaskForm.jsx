import PropTypes from 'prop-types'
import { useRef } from 'react'
import classes from './TaskForm.module.css'

const TaskForm = (props) => {
  const taskInputRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()

    const enteredValue = taskInputRef.current.value

    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue)
      taskInputRef.current.value = ''
    }
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type="text" ref={taskInputRef} />
      <button>{props.loading ? 'Sending...' : 'Add Task'}</button>
    </form>
  )
}

TaskForm.propTypes = {
  onEnterTask: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default TaskForm
