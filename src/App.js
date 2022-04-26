
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Movie from './components/Movie/Movie';
import Search from './components/Search/Search';

const MOVIE_API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=384cdb1b"

const App = () => {
	const [loading, setLoading] = useState(true)
	const [movies, setMovies] = useState([])
	const [errorMessage, setErrorMessage] = useState(null)

	const search = searchValue => {
		setLoading(true)
		setErrorMessage(null)

		fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=384cdb1b`)
			.then(response => response.json())
			.then(jsonResponse => {
				if (jsonResponse.Response === 'True') {
					setMovies(jsonResponse.Search)
					setLoading(false)
				} else {
					setErrorMessage(jsonResponse.Error)
					setLoading(false)
				}
			})
	}
  return (
    <div className="App">
		 <Header text='HOOKED'/>
		 <Search search={search}/>
		 <p className='App-intro'>Sharing a few of our favourite movies</p>
		 <div className="movies">
			 {
				 
				 loading && !errorMessage ? (
					 <span>loading...</span>
				 ) : (
					 movies.map((movie, index) => {
						 return(
							<Movie
								key={`${index}-${movie.Title}`} 
								movie={movie}
						 	/>
						 )
						 
					 })
				 )
			 }
		 </div>
	 </div>
  );
}

export default App;
