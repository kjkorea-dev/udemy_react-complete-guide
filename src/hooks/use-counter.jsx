import { useEffect, useState } from 'react'

const useCounter = (forwars = true) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwars) {
        setCounter((prevCounter) => prevCounter + 1)
      } else {
        setCounter((prevCounter) => prevCounter - 1)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [forwars])

  return counter
}

export default useCounter
