import PropTypes from 'prop-types'
import Section from '../UI/Section'
import TaskForm from './TaskForm'
import useHttp from '../../hooks/use-http'

const NewTask = (props) => {
  const { isLoading, error, sendRequest: addTask } = useHttp()

  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name
    const createdTask = { id: generatedId, text: taskText }

    props.onAddTask(createdTask)
  }

  const enterTaskHandler = async (taskText) => {
    addTask(
      {
        url: 'https://react-complete-guide-d8620-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
        method: 'POST',
        body: { text: taskText },
        headers: { 'Content-Type': 'application/json' },
      },
      createTask.bind(null, taskText)
    )
  }

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  )
}

NewTask.propTypes = {
  onAddTask: PropTypes.func.isRequired,
}

export default NewTask
