import { useEffect, useState } from 'react'
import Tasks from './components/Tasks/Tasks'
import NewTask from './components/NewTask/NewTask'

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [tasks, setTasks] = useState([])
  const fetchTasks = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(
        'https://react-complete-guide-d8620-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json'
      )

      if (!response.ok) {
        throw new Error('Request failed!')
      }

      const data = await response.json()

      const loadedTasks = []

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text })
      }

      setTasks(loadedTasks)
    } catch (error) {
      setError(error.message || 'Something went wrong!')
    }

    setIsLoading(false)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.concat(task)
      return newTasks
    })
  }

  return (
    <>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </>
  )
}

export default App
