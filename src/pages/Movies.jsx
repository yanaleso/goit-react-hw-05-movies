import { fetchSearchingMovie } from "services/API/MovieApiService";
import MovieList from "components/MoviesList";
import SearchBox from "components/SearchBox";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
  const [data, setData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!queryParams) {
      return;
    }
    fetchSearchingMovie(queryParams).then(setData);
  }, [queryParams]);

  const handleFormSubmit = searchQuery => {
    const normalizedQuery = searchQuery.trim();

    if (!searchQuery) {
      return;
    }
    fetchSearchingMovie(searchQuery).then(setData);

    setSearchParams(normalizedQuery !== '' ? {query: normalizedQuery} : {});
  };

  return (
    <main>
      <SearchBox onSubmit={handleFormSubmit}/>
      {data && <MovieList movies={data}/>}
    </main>
  );
};

export default Movies;