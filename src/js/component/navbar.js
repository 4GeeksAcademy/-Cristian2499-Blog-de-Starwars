import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
			<div className="container-fluid">
				<a className="navbar-brand text-danger" href="#">
					<i class="fab fa-galactic-republic me-2"></i>					
					<Link to="/" className="text-danger">Star Wars</Link>
				</a>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle text-danger" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favoritos
							</a>
							<ul className="dropdown-menu bg-dark">
								<li>
								{store.favorites.map((favorite, index) => {
									return (
									<div key={index}>
										<div className="d-flex justify-content-between">
											<p className="text-danger">{favorite.name}</p>
											<button className="btn btn-outline-light text-warning" onClick={() => {actions.deleteFavorite(favorite)}}><i className="far fa-window-close"></i></button>
										</div>
									</div>
									)
								})}
								</li>
								
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
