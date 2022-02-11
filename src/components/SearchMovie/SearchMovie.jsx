import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const RenderSearchMovie = ({movies, location}) => {

    return(
        <div>
            <ul>
                {movies && movies.map(movie => (
                    <li key={movie.id}>
                      <Link to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

RenderSearchMovie.propTypes = {
    movies: PropTypes.array,
    location: PropTypes.object
}