import { fetchCast } from 'components/API/MovieApiService';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, Info, Text } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const {movieId} = useParams();
  
  useEffect(() => {
    fetchCast(movieId).then(setCast);
}, [movieId])

  return (
    <>
      {cast && (<CastList>
        {cast.slice(0, 10).map(({ original_name, character, profile_path, id }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={original_name}
            />
            <Text><Info>Name:</Info> {original_name}</Text>
            <Text><Info>Character:</Info> {character}</Text>
          </li>
        ))}
      </CastList>)}
    </>
  );
};

export default Cast;