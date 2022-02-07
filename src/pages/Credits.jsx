import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getMoviesCast } from '../services/MoviesApi';
import { Loader } from "../components/Loader/Loader";
import { MoviesCast } from "../components/Cast/Cast";

export const Credits = () => {

    const { movieId } = useParams();
    const [loading, setLoading] = useState(false);
    const [cast, setCast] = useState(null);

    useEffect(() => {
        async function getCast() {
          /* setLoading(true) */
          try {
            const cast = await getMoviesCast(movieId);
            setCast(cast); 
          } catch(error) {
            console.log("Error")
          } /* finally { setLoading(false) } */
        }
        getCast();
      }, [movieId]);

    return (
        <>
          {/* {loading && <Loader />} */}
          {cast && <MoviesCast cast={cast}/>}
        </>
    );
}