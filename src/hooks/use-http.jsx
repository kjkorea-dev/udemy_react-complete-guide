import { useState } from 'react'

const useHttp = (requestConfig, applyData) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const sendRequest = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method,
        headers: requestConfig.headers,
        body: requestConfig.body,
      })

      if (!response.ok) {
        throw new Error('Request failed!')
      }

      const data = await response.json()
      applyData(data)
    } catch (error) {
      setError(error.message || 'Something went wrong!')
    }

    setIsLoading(false)
  }

  return { isLoading, error, sendRequest }
}

export default useHttp
