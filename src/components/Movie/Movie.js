import css from './Movie.module.scss'

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"


const Movie = ({movie}) => {
	const poster = movie.Poster ==='NA' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster
	return (
		<div className={css.movie}>
			<h2>{movie.Title}</h2>
			<div>
				<img src={poster} alt={`'The movie titled: ${movie.Title}`}/>
			</div>
			<p>{movie.Year}</p>
		</div>
	)
}

export default Movie