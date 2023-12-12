import PropTypes from 'prop-types'
import { useState } from 'react'
import Section from '../UI/Section'
import TaskForm from './TaskForm'

const NewTask = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const enterTaskHandler = async (taskText) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(
        'https://react-complete-guide-d8620-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
        {
          method: 'POST',
          body: JSON.stringify({ text: taskText }),
          headers: { 'Content-Type': 'application/json' },
        }
      )

      if (!response.ok) {
        throw new Error('Request failed!')
      }

      const data = await response.json()

      const generatedId = data.name
      const createdTask = { id: generatedId, text: taskText }

      props.onAddTask(createdTask)
    } catch (error) {
      setError(error.message || 'Something went wrong!')
    }

    setIsLoading(false)
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
