import React from 'react';
import languageToFlag from './languageFlags'
import { useGlobalContext } from '../contexts/GlobalContext'

const MovieCard = ({ movie, getRatingStars }) => {

    const { IMAGE_URL } = useGlobalContext();

    return (
        <li className="card shadow col-3 m-5" key={movie.id}>
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
                    <img
                        className="flag"
                        src={`https://flagcdn.com/w20/${languageToFlag[movie.original_language]}.png`}
                        alt={movie.original_language}
                        style={{ width: '20px', height: '13px' }}
                    />
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
