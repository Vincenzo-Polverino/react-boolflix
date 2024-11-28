import { useState } from 'react'

const MovieSearch = () => {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])


    const API_KEY = '2dac3390988d579dbe536ee1ab9afbac'
    const API_URL = 'https://api.themoviedb.org/3/search/movie'

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSearch = () => {

        if (!query) return

        setMovies([])


        fetch(`${API_URL}?api_key=${API_KEY}&query=${query}&language=it`)
            .then(res => {

                return res.json()
            })

            .then(data => {

                setMovies(data.results)
            })
    }
    return (

        <div>

            <h1>Cerca Film</h1>

            <input
                type='text'
                value={query}
                onChange={handleChange}
                placeholder='Cerca...'
            />

            <button onClick={handleSearch}>
                Cerca
            </button>

            <div>
                {movies.length > 0 ? (
                    <ul>
                        {movies.map((movie) => (
                            <li key={movie.id}>
                                <h3>{movie.title}</h3>
                                <p>
                                    <strong>Titolo originale:</strong>

                                    {movie.original_title}
                                </p>
                                <p>
                                    <strong>Lingua:</strong>
                                    {movie.original_language}
                                </p>
                                <p>
                                    <strong>Voto:</strong>
                                    {movie.vote_average}
                                </p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div> Nessun risultato</div>
                )}
            </div>
        </div>
    )
}

export default MovieSearch