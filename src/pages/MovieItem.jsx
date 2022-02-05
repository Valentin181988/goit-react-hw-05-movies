import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemMovie } from "../components/ItemMovie/ItemMovie";
import { GetMovieById } from "../services/MoviesApi";
import { Loader } from "../components/Loader/Loader";

export const MovieItem = () => {

  const {movieId} = useParams();
  const [movieItem, setMovieItem] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getItemMovie() {
      setLoading(true)
      try {
      GetMovieById(movieId).then(movieItem => setMovieItem(movieItem)); 
      } catch(error) {

      } finally { setLoading(false) }
    }
    getItemMovie();
  }, [movieId]);

  console.log(movieItem)
  
    return (
        <main>
          {loading && <Loader />}
          {movieItem && <ItemMovie movieItem={movieItem}/>}
        </main>
    )
};

