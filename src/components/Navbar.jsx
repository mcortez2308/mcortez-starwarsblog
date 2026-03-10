import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store } = useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
						<img src="https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/sw_logo.svg" alt="Logo"/>
				</Link>

				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
						<span className="badge bg-primary ms-2">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu">
						{store.favorites.map((favorite, index) => (
							<li key={index}>
								<a className="dropdown-item" href="#">{favorite.name}</a>
								<button className="btn btn-danger btn-sm ms-2" onClick={() => dispatch({ type: 'REMOVE_FAVORITE', payload: favorite })}><i className="fa-solid fa-trash"></i></button>
							</li>
						))}	
					</ul>
				</div>
			</div>
		</nav>
	);
};