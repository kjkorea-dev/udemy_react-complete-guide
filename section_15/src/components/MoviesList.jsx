import PropTypes from 'prop-types'
import classes from './MoviesList.module.css'
import Movie from './Movie'

const MoviesList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      releaseDate: PropTypes.string,
      openingText: PropTypes.string,
    })
  ),
}

export default MoviesList
