import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom"


export const CharacterInformation = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        if (params.id && store.people.length > 0) {
            const currentCharacter = store.people.find(item => params.id == item.url.split("/")[5])
            console.log(currentCharacter)
            setCharacter(currentCharacter)
        }
    }, [params.id, store.people, character])
    return (
        <div>
            {
                Object.keys(character).length > 0 ?
                    <div>
                        <div className="d-flex justify-content-start">
                            <div className="ms-5 mt-5">
                                <img src={`https://starwars-visualguide.com/assets/img/characters/${character.url.split("/")[5]}.jpg`} className="card-img-top" alt="..." />
                            </div>
                            <div className="ms-5 mt-4">
                                <h1 className="text-light">{character.name}</h1>
                                <h2 className="text-light">Birth year: {character.birth_year}</h2>
                                <h2 className="text-light">Height: {character.height}</h2>
                                <h2 className="text-light">Mass: {character.mass}</h2>
                                <h2 className="text-light">Hair color: {character.hair_color}</h2>
                                <h2 className="text-light">Skin color: {character.skin_color}</h2>
                                <h2 className="text-light">Eye color: {character.eye_color}</h2>
                                <h2 className="text-light">Gender: {character.gender}</h2>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="container">
                                <h1 className="text-light">Aparecion en las siguentes peliculas:</h1>
                                <div className="row flex-nowrap overflow-auto">
                                    {character.films && character.films.map(item => {
                                        return (
                                            <div className="col mt-3" style={{ flex: "0 0 auto", maxWidth: "35%", }}>
                                                <img src={`https://starwars-visualguide.com/assets/img/films/${item.split("/")[5]}.jpg`} alt="..." width="250px" />
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
