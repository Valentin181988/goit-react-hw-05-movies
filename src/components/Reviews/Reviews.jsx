import PropTypes from 'prop-types';

export const Reviews = ({reviews}) => {
    
    const movieReviews = reviews.results;
    
    return(
        <>
          <ul>
              {movieReviews.length > 0 ? movieReviews.map(review => (
                <li key={review.id}>
                  <h3>{review.author}</h3>
                  <p>{review.content}</p>
                </li>
              )) : <p>Sorry there are no reviews yet!</p>}
          </ul>
        </>
    );
};

Reviews.propTypes = {
  reviews: PropTypes.object
}