import { useState } from 'react'
import './App.css'
import MoviesList from './components/MoviesList'

const App = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function fetchMoviesHandler() {
    setIsLoading(true)
    const response = await fetch('https://swapi.dev/api/films')
    const data = await response.json()

    const transformedData = data.results.map((movie) => {
      return {
        id: movie.episode_id,
        title: movie.title,
        openingText: movie.opening_crawl,
        releaseDate: movie.release_date,
      }
    })
    setMovies(transformedData)
    setIsLoading(false)
  }

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies.</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </>
  )
}

export default App
