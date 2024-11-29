import { useGlobalContext } from './contexts/GlobalContext'
import languageToFlag from './components/languageFlags'
import 'bootstrap/dist/css/bootstrap.min.css';

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


        <img className="logo" src="./public/logo.png" alt="Logo" />

        <div className="m-3 d-flex">
          <input
            type='text'
            value={query}
            onChange={handleChange}
            placeholder='Cerca...'
          />
          <button className="btn btn-secondary" onClick={handleSearch}>
            Cerca
          </button>
        </div>



      </header>



      <main>

        {movies.length > 0 ? (


          <div className='container d-flex justify-content-center'>


            <ul className='d-flex flex-wrap'>
              {movies.filter((movie) => movie.media_type !== "person").map((movie) => (

                <li className='card shadow col-3 m-5' key={movie.id}>

                  <img className='poster'
                    src={movie.poster_path ? IMAGE_URL + movie.poster_path : './public/poster_placeholder.jpg'}
                    alt={movie.title || movie.name}

                  />
                  <div className="card-body">
                    <h3 className='card-title'>{movie.title || movie.name}</h3>

                    <p>
                      <strong>Titolo originale: </strong>
                      {movie.original_title}
                    </p>

                    <p>
                      <strong>Lingua: </strong>
                      <img className='flag'
                        src={`https://flagcdn.com/w20/${languageToFlag[movie.original_language]}.png`}
                        alt={movie.original_language}
                        style={{ width: '20px', height: '13px' }}
                      />
                    </p>

                    <p>
                      <strong>Voto: </strong>
                      {getRatingStars(movie.vote_average)}
                    </p>

                    <p className='movie_overview'>
                      <h6>Overview:</h6>
                      {movie.overview}
                    </p>
                  </div>
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