import React from 'react';
import LangFlag from './langFlag';
import { useGlobalContext } from '../contexts/GlobalContext'

const ShowCard = ({ show, getRatingStars }) => {

    const { IMAGE_URL } = useGlobalContext();

    return (
        <li className="card shadow col-4 m-5" key={show.id}>
            <img
                className="poster"
                src={show.poster_path ? IMAGE_URL + show.poster_path : '/poster_placeholder.jpg'}
                alt={show.name}
            />
            <div className="card-body">
                <h3 className="card-title">{show.name}</h3>

                <p>
                    <strong>Titolo originale: </strong>
                    {show.original_name}
                </p>

                <p>
                    <strong>Lingua: </strong>
                    <LangFlag lang={show.original_language} />
                </p>

                <p>
                    <strong>Voto: </strong>
                    {getRatingStars(show.vote_average)}
                </p>

                <strong>Overview: </strong>
                <p className="show_overview">
                    {show.overview}
                </p>
            </div>
        </li>
    );
};

export default ShowCard;
