import { useState } from 'react'
import Flag from 'react-world-flags'
import { FaStar, FaRegStar } from 'react-icons/fa'

const MovieSearch = () => {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    const [series, setSeries] = useState([])


    const API_KEY = '2dac3390988d579dbe536ee1ab9afbac'
    /*const API_URL_MOVIES = 'https://api.themoviedb.org/3/search/movie'
    const API_URL_TV = 'https://api.themoviedb.org/3/search/tv'*/
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w342/'

    const API_URL = 'https://api.themoviedb.org/3/search/multi'

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSearch = () => {

        if (!query) return

        setMovies([])
        setSeries([])

        fetch(`${API_URL}?api_key=${API_KEY}&query=${query}&language=it`)

            .then(res => {

                return res.json()
            })

            .then(data => {
                setMovies(data.results)
                setSeries(data.results)
            })
    }


    const langFlag = (lang) => {

        const langCode = lang ? (lang.toLowerCase() === 'en' ? 'gb' : lang.toLowerCase()) : null

        return <Flag code={langCode} style={{ width: '30px', height: '20px' }} />

    }


    const getRatingStars = (vote) => {
        const roundedVote = Math.ceil(vote / 2)
        const stars = []

        for (let i = 1; i <= 5; i++) {
            stars.push(i <= roundedVote ? <FaStar key={i} /> : <FaRegStar key={i} />)
        }

        return stars


    }

    return (

        <div>

            <h1>Cerca Film e Serie TV</h1>

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

                <>

                    {movies.length > 0 ? (
                        <div>

                            <h2>Risultati ricerca</h2>
                            <ul>
                                {movies.filter((movie) => movie.media_type !== "person").map((movie) => (
                                    <li key={movie.id}>
                                        <img
                                            src={IMAGE_URL + movie.poster_path}
                                            alt={movie.title || movie.name}
                                            style={{ width: '150px', height: '225px' }}
                                        />
                                        <h3>{movie.title || movie.name}</h3>
                                        <p>
                                            <strong>Titolo originale:</strong>

                                            {movie.original_title}
                                        </p>
                                        <p>
                                            <strong>Lingua:</strong>
                                            {langFlag(movie.original_language)}
                                            {movie.original_language}
                                        </p>
                                        <p>
                                            <strong>Voto:</strong>
                                            {getRatingStars(movie.vote_average)}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : <div> Nessun risultato</div>

                    }


                </>


            </div>
        </div>
    )
}

export default MovieSearch