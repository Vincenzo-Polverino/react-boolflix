import React, { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const API_KEY = '2dac3390988d579dbe536ee1ab9afbac';
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w342/';
    const API_URL = 'https://api.themoviedb.org/3/search/multi';

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        if (!query) return;

        setMovies([]);

        fetch(`${API_URL}?api_key=${API_KEY}&query=${query}&language=it`)
            .then((res) => res.json())
            .then((data) => setMovies(data.results));
    };

    return (
        <GlobalContext.Provider
            value={{
                query,
                movies,
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
