import { GetMovies } from "../services/MoviesApi";
import { useEffect, useState } from "react";
import { Loader } from "../components/Loader/Loader";

export const HomePage = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies () {
        setLoading(true)
        try {
          const movies = await GetMovies()
          setMovies(movies)
        } catch (error) {
 
        } finally {
          setLoading(false)
        } 
      }
      fetchMovies()
  }, []);

  console.log(movies)

    return (
        <main>
         <h1>Trending today</h1>
         {loading && <Loader />}
         {movies && (<ul>
             {movies.map(movie => (<li key={movie.id}>{movie.title}</li>) )}
         </ul>)}
        </main>
   );
};