import { Box } from "components/Box";
import PropTypes from 'prop-types';
import dataProcessing from "components/movieDataProcessing";
import { Link, useLocation } from "react-router-dom";
import { Item, Image, Title, Info } from "./MovieList.styled";

const MovieList = ({ movies, genres }) => {
    const { pathname, search } = useLocation();
    
    const moviesInfo = dataProcessing(movies, genres);

    return (
        <Box as="ul" display="flex" flexWrap="wrap" margin="-12px" justifyContent="center">
            {moviesInfo.map(({ id, imagePoster, original_title, releaseYear, fullGenresNames }) => (
                <Item key={id}>
                    <Link to={pathname.includes('movies') ? `${id}` : `movies/${id}`} state={{ from: pathname, search: search }}>
                        <Image src={imagePoster} alt={original_title} />
                        <div>
                            <Title>{original_title}</Title>
                            <Info>{fullGenresNames} | {releaseYear} </Info>
                        </div>
                    </Link>
                </Item>
            ))}
        </Box>
    );
};

MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
    genres: PropTypes.array,
}

export default MovieList;