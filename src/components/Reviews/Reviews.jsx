export const Reviews = ({reviews}) => {
    
    const movieReviews = reviews.results;
    
    return(
        <>
            {movieReviews.length > 0 ? movieReviews.map(review => 
              (<ul>
                <li key={review.id}>
                  <h3>{review.author}</h3>
                  <p>{review.content}</p>
                </li>
              </ul>)) : <p>Sorry there are no reviews yet!</p>}
        </>
    );
}