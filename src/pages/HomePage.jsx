import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovies } from "../services/MoviesApi";
import { Loader } from "../components/Loader/Loader";

const useFetchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
  
    useEffect(() => {
      async function fetchMovies () {
          setLoading(true)
          try {
            const movies = await getMovies()
            setMovies(movies)
          } catch (error) {
            setError(error)
          } finally {
            setLoading(false)
          } 
        }
        fetchMovies()
    }, []);
  
    return {movies, loading, error}
   };

export const HomePage = () => {

  const location = useLocation();
  const {movies, loading, error} = useFetchMovies();

  console.log("home", location)

    return (
        <main>
         <h1>Trending today</h1>
         {loading && <Loader />}
         {!error && (<ul>
             {movies.map(movie => (<li key={movie.id}><Link to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</Link></li>) )}
         </ul>)}
        </main>
   );
};