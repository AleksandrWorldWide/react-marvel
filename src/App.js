
import { useReducer} from 'react';
import './App.css';
// import {SEARCH_MOVIES_REQUEST,SEARCH_MOVIES_SUCCESS,SEARCH_MOVIES_FAILURE} from './actionTypes'
import Header from './components/Header/Header';
import Movie from './components/Movie/Movie';
import Search from './components/Search/Search';
import reducer from './reducer/reducer'

const initialState = {
	loading: true,
	movies: [],
	errorMessage: null
}

const SEARCH_MOVIES_REQUEST = 'SEARCH_MOVIES_REQUEST'
const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS'
const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE'

const App = () => {

	const [state, dispatch] = useReducer(reducer,initialState)

	const search = searchValue => {

		dispatch({
			type: SEARCH_MOVIES_REQUEST
		})

		fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=384cdb1b`)
			.then(response => response.json())
			.then(jsonResponse => {
				if (jsonResponse.Response === 'True') {
					dispatch({
						type: SEARCH_MOVIES_SUCCESS,
						payload: jsonResponse.Search
					})
				} else {
					dispatch({
						type: SEARCH_MOVIES_FAILURE,
						payload: jsonResponse.Error
					})
				}
			})
	}

	const { movies, errorMessage, loading} = state

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
