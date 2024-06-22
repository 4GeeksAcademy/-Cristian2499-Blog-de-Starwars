import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom"


export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.people)
	return (
		<div className="container">
			<div>
				<h1 className="text-light">Personajes:</h1>
				<div className="row flex-nowrap overflow-auto">
					{store.people.map((result) => {
						return (
							<div className="col-4"
								style={{ flex: "0 0 auto", maxWidth: "35%", }}>
								<div className="card cb1">
									<div>
										<div className="image">
											<img src={`https://starwars-visualguide.com/assets/img/characters/${result.url.split("/")[5]}.jpg`} className="card-img-top" alt="..." />
										</div>
									</div>
									<div className="card-body" key={result.url.split("/")[5]}>
										<h5 className="card-title text-light">{result.name}</h5>
										<div className="d-flex justify-content-between">
											<Link to={`/character/${result.url.split("/")[5]}`} className="btn btn-outline-light">Mas informacion</Link>
											<button className="btn btn-outline-light" onClick={() => actions.addFavorites(result.url.split("/")[5], result.name)}>
												<i className="fas fa-heart"></i>
											</button>
										</div>

									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
			<div className="mt-5">
				<h1 className="text-light">Planetas:</h1>
				<div className="row flex-nowrap overflow-auto">
					{store.planets.map((result) => {
						return (
							<div className="col-4"
								style={{ flex: "0 0 auto", maxWidth: "35%" }}>
								<div className="card cb1">
									<img src={`https://starwars-visualguide.com/assets/img/planets/${result.url.split("/")[5]}.jpg`} onError={(e) => e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwzCJiK-EUo9WaPahSHoi-XpZS1dbAr4PtHQ&s"} className="card-img-top" alt="..." />
									<div className="card-body" key={result.url.split("/")[5]}>
										<h5 className="card-title text-light">{result.name}</h5>
										<div className="d-flex justify-content-between">
											<Link to={`/planet/${result.url.split("/")[5]}`} className="btn btn-outline-light">Mas informacion</Link>
											<button className="btn btn-outline-light" onClick={() => actions.addFavorites(result.url.split("/")[5], result.name)}>
												<i className="fas fa-heart"></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
};


// https://swapi.dev/
// https://starwars-visualguide.com/#/  imagenes


