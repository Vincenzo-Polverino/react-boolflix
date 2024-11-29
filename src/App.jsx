import { useGlobalContext } from './contexts/GlobalContext'
import languageToFlag from './components/languageFlags'

const App = () => {
  const {
    query,
    movies,
    handleChange,
    handleSearch,
    IMAGE_URL,
    getRatingStars,
  } = useGlobalContext();

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
                    <img
                      src={`https://flagcdn.com/w20/${languageToFlag[movie.original_language]}.png`}
                      alt={movie.original_language}
                      style={{ width: '20px', marginLeft: '5px' }}
                    />
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