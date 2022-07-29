import { Box } from "components/Box";
import PropTypes from 'prop-types';
import noPoster from '../../images/no-poster.jpg';
import {Image, Wrapper } from "./MovieInfo.styled";

const IMG_URL= `https://image.tmdb.org/t/p/w300`;

const MovieInfo = ({ movie }) => {
    const { original_title, vote_average, vote_count, popularity, release_date, poster_path, overview } = movie;
    
    const releaseYear = release_date?.split("-").slice(0, 1);
    const imagePoster = poster_path ? `${IMG_URL}${poster_path}` : noPoster; 
    return (
        <Wrapper>
            <Image src={imagePoster} alt={original_title} />
            <Box ml={6}>
                <h2>{original_title}</h2>
                <ul>
                    <li>
                        <p>Vote / Votes: <span>{vote_average}</span> / <span>{vote_count}</span></p>
                    </li>
                    <li>
                        <p>Popularity: {popularity}</p>
                    </li>
                    <li>
                        <p>Year: {releaseYear}</p>
                    </li>
                </ul>
                <div>
                    <h3>About</h3>
                    <p>{overview}</p>
                </div>
            </Box>
        </Wrapper>
    );
};

MovieInfo.propTypes = {
    movie: PropTypes.object.isRequired,
}

export default MovieInfo;