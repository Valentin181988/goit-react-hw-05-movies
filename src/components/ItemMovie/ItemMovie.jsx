import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Wrapper, PosterWrapper, GoBackBtn } from '../ItemMovie/ItemMovie.styled';

export const ItemMovie = ({movieItem, location}) => {
   const genres = movieItem.genres;
   const {title, overview, budget, popularity} = movieItem;

   console.log(movieItem)

    return (
        <>
          <GoBackBtn as={Link} to={location?.state?.from ?? "/home"}><AiOutlineArrowLeft/> go back</GoBackBtn>
          <Wrapper>
              <PosterWrapper>
                  <img src={`https://image.tmdb.org/t/p/w300${movieItem.poster_path}`} alt="Poster"/>
              </PosterWrapper>
              <div>
                <h1>{title}</h1>

                <h2>Overview</h2>
                <p>{overview}</p>

                <h3>Budget</h3>
                <p>{budget}</p>

                <h3>Popularity</h3>
                <p>{popularity}</p>

                <h3>Genres</h3>
                {genres.map(genre => (<span key={genre.id}>{genre.name} </span>))}
              </div>
          </Wrapper>
          <hr/>
          <div>
            <h3>Additional information</h3>
            <ul>
              <li><Link to="cast">Cast</Link></li>
              <li><Link to="reviews">Reviews</Link></li>
            </ul>    
          </div>
          <hr/>    
        </>
    )
};