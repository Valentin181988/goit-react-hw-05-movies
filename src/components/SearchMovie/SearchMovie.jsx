import { Link } from "react-router-dom";

export const SearchMovie = ({movies, location}) => {

    console.log("search", location)

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
}