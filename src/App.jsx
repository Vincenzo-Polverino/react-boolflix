import React from 'react';
import { useGlobalContext } from './contexts/GlobalContext';
import AppHeader from './components/AppHeader';
import MovieList from './components/MovieList';
import ShowList from './components/ShowList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const {
    query,
    movies,
    shows,
    handleChange,
    handleSearch,
    getRatingStars,
  } = useGlobalContext();

  return (
    <>
      <AppHeader query={query} handleChange={handleChange} handleSearch={handleSearch} />

      <main className='container mt-5'>
        <h2>Film</h2>
        {Array.isArray(movies) && movies.length > 0 ? (
          <MovieList movies={movies} getRatingStars={getRatingStars} />
        ) : (
          <h1 className='d-flex my-5 justify-content-center align-items-center'>Nessun Film trovato</h1>
        )}

        <h2>Serie TV</h2>
        {Array.isArray(shows) && shows.length > 0 ? (
          <ShowList shows={shows} getRatingStars={getRatingStars} />
        ) : (
          <h1 className='d-flex my-5 justify-content-center align-items-center'>Nessuna Serie Tv trovata</h1>
        )}
      </main>
    </>
  );
};

export default App;
