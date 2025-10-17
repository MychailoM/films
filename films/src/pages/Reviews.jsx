import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from '../api/tmdb';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(movieId)
      .then(setReviews)
      .catch(() => setReviews([]));
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>No reviews available.</p>;
  }

  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <strong>{review.author}</strong>: {review.content}
        </li>
      ))}
    </ul>
  );
}


