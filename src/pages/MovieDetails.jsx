import { fetchMovieDetails } from "components/API/MovieApiService";
import BackLink from "components/BackLink";
import { Box } from "components/Box";
import MovieInfo from "components/MovieInfo";
import { useState, useEffect, Suspense } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

const MovieDetails = () => {
  const {movieId} = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const {state} = useLocation();
  const locationState = state?.search ?
    state?.from + state?.search :
    state?.from;
  const backLinkHref = locationState ? locationState : '/movies';
  
  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovieDetails);
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }
  
  return (
    <Box as="main" display="flex" flexDirection="column" alignItems="start">
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      <MovieInfo movie={movieDetails} />
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: locationState }}>Cast</Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: locationState }}>Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </Box>
  );
};

export default MovieDetails;