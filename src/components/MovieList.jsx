import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, getRatingStars }) => {
    return (
        <div className="container d-flex justify-content-center">
            <ul className="d-flex flex-wrap">
                {movies.filter((movie) => movie.media_type !== "person").map((movie) => (
                    <MovieCard key={movie.id} movie={movie} getRatingStars={getRatingStars} />
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
