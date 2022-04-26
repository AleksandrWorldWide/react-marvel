import css from './Header.module.scss'
const Header = ({text}) => {
	return (
		<header className={css.App_header}>
			<h2>{text}</h2>
		</header>
	)
}

export default Header