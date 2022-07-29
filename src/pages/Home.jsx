import {fetchGenresList, fetchTrendingMovies} from "services/API/MovieApiService";
import { Box } from "components/Box";
import MovieList from "components/MoviesList";
import { useState, useEffect } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
    fetchGenresList().then(setGenres);
  }, [])

  return (
    <Box as="main" display="flex" flexDirection="column" alignItems="center">
      <h1>Trending today</h1>
      {movies && <MovieList movies={movies} genres={genres} />}
    </Box>
  );
};

export default Home;