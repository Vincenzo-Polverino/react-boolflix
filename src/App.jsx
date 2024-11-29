import { useState } from 'react'
import Flag from 'react-world-flags'
import { FaStar, FaRegStar } from 'react-icons/fa'

const App = () => {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])


  const API_KEY = '2dac3390988d579dbe536ee1ab9afbac'
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w342/'
  const API_URL = 'https://api.themoviedb.org/3/search/multi'

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

    <>

      <header>

        <h1>Boolflix</h1>

        <input
          type='text'
          value={query}
          onChange={handleChange}
          placeholder='Cerca...'
        />

        <button onClick={handleSearch}>
          Cerca
        </button>

      </header>


      <main>

        {movies.length > 0 ? (

          <div>

            <h2>Risultati ricerca</h2>

            <hr />

            <ul>
              {movies.filter((movie) => movie.media_type !== "person").map((movie) => (

                <li key={movie.id}>

                  <img
                    src={movie.poster_path ? IMAGE_URL + movie.poster_path : './public/poster_placeholder.jpg'}
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

                  <hr />

                </li>

              ))}

            </ul>

          </div>

        ) : <div> Nessun risultato</div>

        }

      </main>

    </>
  )
}

export default App