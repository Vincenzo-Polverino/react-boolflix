import React from 'react';
import { useGlobalContext } from './contexts/GlobalContext';
import AppHeader from './components/AppHeader';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const {
    query,
    movies,
    handleChange,
    handleSearch,
    getRatingStars,
  } = useGlobalContext();

  return (
    <>
      <AppHeader query={query} handleChange={handleChange} handleSearch={handleSearch} />

      <main>
        {Array.isArray(movies) && movies.length > 0 ? (
          <MovieList movies={movies} getRatingStars={getRatingStars} />
        ) : (
          <h1 className='d-flex my-5 justify-content-center align-items-center'>Nessun risultato</h1>
        )}
      </main>
    </>
  );
};

export default App;
