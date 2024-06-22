import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom"



export const PlanetInformation = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [worlds, setWorlds] = useState({});

    useEffect(() => {
        if (params.id && store.planets.length > 0) {
            const currentPlanet = store.planets.find(item => params.id == item.url.split("/")[5])
            console.log(currentPlanet)
            setWorlds(currentPlanet)
        }
    }, [params.id, store.planets, worlds])
    return (
        <div>
            {
                Object.keys(worlds).length > 0 ?
                    <div className="row">
                        <div className="col">
                            <div className="d-flex justify-content-start">
                                <div className="ms-5 mt-5">
                                    <img src={`https://starwars-visualguide.com/assets/img/planets/${worlds.url.split("/")[5]}.jpg`} onError={(e) =>e.target.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwzCJiK-EUo9WaPahSHoi-XpZS1dbAr4PtHQ&s"} className="card-img-top" alt="..." />
                                </div>
                                <div className="ms-5 mt-4">
                                    <h1 className="text-light">{worlds.name}</h1>
                                    <h2 className="text-light">Rotation period: {worlds.rotation_period}</h2>
                                    <h2 className="text-light">Orbital period: {worlds.orbital_period}</h2>
                                    <h2 className="text-light">Diameter: {worlds.diameter}</h2>
                                    <h2 className="text-light">Climate: {worlds.climate}</h2>
                                    <h2 className="text-light">Gravity: {worlds.gravity}</h2>
                                    <h2 className="text-light">Terrain: {worlds.terrain}</h2>
                                    <h2 className="text-light">surface water: {worlds.surface_water}</h2>
                                    <h2 className="text-light">Population: {worlds.population}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col mt-3">
                            <div className="container">
                                <h1 className="text-light">Residentes de {worlds.name}</h1>
                                <div className="row flex-nowrap overflow-auto">
                                    {worlds.residents && worlds.residents.map(item => {
                                        return (
                                            <div className="col mt-3" style={{ flex: "0 0 auto", maxWidth: "35%", }}>
                                                <img src={`https://starwars-visualguide.com/assets/img/characters/${item.split("/")[5]}.jpg`} alt="..." width="250px" />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 d-flex justify-content-center">
                            <Link to="/" className="btn btn-primary" >volver a el home</Link>
                        </div>
                    </div>

                    :
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-light mx-auto" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
            }

        </div>

    )
};

