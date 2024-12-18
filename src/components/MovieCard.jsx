import React from 'react';
import LangFlag from './langFlag';
import { useGlobalContext } from '../contexts/GlobalContext'

const MovieCard = ({ movie, getRatingStars }) => {

    const { IMAGE_URL } = useGlobalContext();

    return (
        <li className="card shadow m-5" key={movie.id}>
            <img
                className="poster"
                src={movie.poster_path ? IMAGE_URL + movie.poster_path : '/poster_placeholder.jpg'}
                alt={movie.title}
            />
            <div className="card-body">
                <h3 className="card-title">{movie.title}</h3>

                <p>
                    <strong>Titolo originale: </strong>
                    {movie.original_title}
                </p>

                <p>
                    <strong>Lingua: </strong>
                    <LangFlag lang={movie.original_language} />
                </p>

                <p>
                    <strong>Voto: </strong>
                    {getRatingStars(movie.vote_average)}
                </p>

                <strong>Overview: </strong>
                <p className="movie_overview">
                    {movie.overview}
                </p>
            </div>
        </li>
    );
};

export default MovieCard;
