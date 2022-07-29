import { fetchReviews } from 'services/API/MovieApiService';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Info, Item, Text } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const {movieId} = useParams();
  
  useEffect(() => {
    fetchReviews(movieId).then(setReviews);
}, [movieId])

  return (
    <>
      {reviews ? (<ul>
        {reviews.map(({ id, author, content }) => (
          <Item key={id}>
            <Text><Info>Author:</Info> {author}</Text>
            <Text><Info>Review:</Info> {content}</Text>
          </Item>
        ))}
      </ul>) : '0 reviews'}
    </>
  );
};

export default Reviews;