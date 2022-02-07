import { Link } from 'react-router-dom';

export const ItemMovie = ({movieItem}) => {
   const genres = movieItem.genres;

    return (
        <>
          <Link to="/home">Go back</Link>
          <div>
              <img src={`https://image.tmdb.org/t/p/w300${movieItem.poster_path}`} alt="Poster"/>
          </div>
          <div>
            <h1>{movieItem.title}</h1>

            <h2>Overview</h2>
            <p>{movieItem.overview}</p>

            <h2>Genres</h2>
            {genres.map(genre => (<p key={genre.id}>{genre.name}</p>))}
          </div>
           
          <div>
            <ul>
              <li><Link to="cast">Cast</Link></li>
              <li><Link to="reviews">Reviews</Link></li>
            </ul>    
          </div>    
        </>
    )
};