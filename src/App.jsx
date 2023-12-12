import { useEffect, useState } from 'react'
import Tasks from './components/Tasks/Tasks'
import NewTask from './components/NewTask/NewTask'
import useHttp from './hooks/use-http'

const App = () => {
  const [tasks, setTasks] = useState([])

  const transformTasks = (tasksData) => {
    const loadedTasks = []

    for (const taskKey in tasksData) {
      loadedTasks.push({ id: taskKey, text: tasksData[taskKey].text })
    }

    setTasks(loadedTasks)
  }

  const {
    isLoading,
    error,
    sendRequest: fetchTasks,
  } = useHttp(
    {
      url: 'https://react-complete-guide-d8620-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
    },
    transformTasks
  )

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
