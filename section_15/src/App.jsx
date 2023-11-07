import { useCallback, useEffect, useState } from 'react'
import './App.css'
import MoviesList from './components/MoviesList'
import AddMovie from './components/AddMovie'

const App = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(
        'https://react-complete-guide-d8620-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json'
      )
      if (!response.ok) {
        throw Error('Something went wrong!')
      }

      const data = await response.json()

      const loadedMovies = []

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openningText: data[key].openningText,
          releaseDate: data[key].releaseDate,
        })
      }

      const transformedData = loadedMovies.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          openingText: movie.openingText,
          releaseDate: movie.releaseDate,
        }
      })
      setMovies(transformedData)
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchMoviesHandler()
  }, [fetchMoviesHandler])

  async function addMovieHandler(movie) {
    // console.log(movie)
    const response = await fetch(
      'https://react-complete-guide-d8620-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json',
      {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: { 'Content-Type': 'application/json' },
      }
    )
    const data = response.json()
    console.log(data)
  }

  let content = <p>Found no movies.</p>

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />
  }

  if (error) {
    content = <p>{error}</p>
  }

  if (isLoading) {
    content = <p>Loading...</p>
  }

  return (
    <>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </>
  )
}

export default App
