import { useState } from 'react'
import './App.css'
import MoviesList from './components/MoviesList'

const App = () => {
  const [movies, setMovies] = useState([])

  function fetchMoviesHandler() {
    fetch('https://swapi.dev/api/films')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const transformedData = data.results.map((movie) => {
          return {
            id: movie.episode_id,
            title: movie.title,
            openingText: movie.opening_crawl,
            releaseDate: movie.release_date,
          }
        })
        setMovies(transformedData)
      })
  }

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </>
  )
}

export default App
