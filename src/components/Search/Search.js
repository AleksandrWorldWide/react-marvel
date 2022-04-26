import css from './Search.module.scss'
import { useState } from 'react'

const Search = props => {

	const [searchValue, setSearchValue] = useState('')

	const handleSearch = (e) => {
		setSearchValue(e.target.value)
	}

	const callSearch = (e) => {
		e.preventDefault()
		props.search(searchValue)
		resetInput()
	}

	const resetInput = () => {
		setSearchValue('')
	}

	return (
		<form className={css.search}>
			<input 
				type="text" 
				value={searchValue}
				onChange={handleSearch}
			/>
			<input
				type='submit'
				value='SEARCH'
				onClick={callSearch}
			/>
		</form>
	)
}

export default Search