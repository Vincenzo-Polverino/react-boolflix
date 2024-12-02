import React, { createContext, useState, useContext, useEffect } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [shows, setShows] = useState([]);
    const API_KEY = import.meta.env.VITE_MOVIE_DB_API_KEY;
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w342/';
    const API_URL_MOVIE = 'https://api.themoviedb.org/3/search/movie';
    const API_URL_SHOW = 'https://api.themoviedb.org/3/search/tv';



    useEffect(() => {
        if (!query) {
            fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
                .then((res) => res.json())
                .then(({ results }) => {
                    setMovies(results);
                });

            fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`)
                .then((res) => res.json())
                .then(({ results }) => {
                    setShows(results);
                });
        }
    }, [query, API_KEY]);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        if (!query) return;

        setMovies([]);
        setShows([]);

        fetch(`${API_URL_MOVIE}?api_key=${API_KEY}&query=${query}`)
            .then((res) => res.json())
            .then((data) => {
                console.log('Movies data:', data);
                setMovies(data.results);
            })

        fetch(`${API_URL_SHOW}?api_key=${API_KEY}&query=${query}`)
            .then((res) => res.json())
            .then((data) => {
                console.log('Shows data:', data);
                setShows(data.results);
            })
    };

    return (
        <GlobalContext.Provider
            value={{
                query,
                movies,
                shows,
                handleChange,
                handleSearch,
                IMAGE_URL,
                getRatingStars: (vote) => {
                    const roundedVote = Math.ceil(vote / 2);
                    const stars = [];

                    for (let i = 1; i <= 5; i++) {
                        stars.push(i <= roundedVote ? '★' : '☆');
                    }

                    return stars;
                },
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
