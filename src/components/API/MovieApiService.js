import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const OPTIONS = {
  params: {
    api_key: '470b53b8228b70c791d3c6418cea7265',
  }
}

async function fetchWithErrorHandling(url, options = {}) {
    try {
        const { data } = await axios.get(url, options);
        return data;
    } catch (error) {
        return new Error(`Sorry something went wrong. ${error.message}`);
    }
}

export async function fetchTrendingMovies() {
    const TRENDING_URL = `${BASE_URL}/trending/movie/day`;
    const { results } = await fetchWithErrorHandling(TRENDING_URL, OPTIONS); 
    return results;
}

export function fetchMovieDetails(movieId) {
    const MOVIE_URL = `${BASE_URL}/movie/${movieId}`;
    return fetchWithErrorHandling(MOVIE_URL, OPTIONS);
}

export async function fetchSearchingMovie(query) {
    const SEARCHING_MOVIE_URL = `${BASE_URL}/search/movie`;
    const optionsSearch = {
        params: {
            api_key: '470b53b8228b70c791d3c6418cea7265',
            query,
        }
    };
    const { results } = await fetchWithErrorHandling(SEARCHING_MOVIE_URL, optionsSearch); 
    return results;
}

export async function fetchCast(movieId) {
    const CAST_URL = `${BASE_URL}/movie/${movieId}/credits`;
    const { cast } = await fetchWithErrorHandling(CAST_URL, OPTIONS); 
    return cast;
}

export async function fetchReviews(movieId) {
    const REVIEWS_URL = `${BASE_URL}/movie/${movieId}/reviews`;
    const { results } = await fetchWithErrorHandling(REVIEWS_URL, OPTIONS); 
    return results;
}

export async function fetchGenresList() {
    const GENRES_URL = `${BASE_URL}/genre/movie/list`;
    const {genres} = await fetchWithErrorHandling(GENRES_URL, OPTIONS); 
    return genres;
}