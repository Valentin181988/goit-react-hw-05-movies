import { useParams, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { ItemMovie } from "../components/ItemMovie/ItemMovie";
import { getMovieById } from "../services/MoviesApi";
import { Loader } from "../components/Loader/Loader";

export const MovieItem = () => {

  const {movieId} = useParams();
  const [movieItem, setMovieItem] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getItemMovie() {
      setLoading(true)
      try {
      await getMovieById(movieId).then(movieItem => setMovieItem(movieItem)); 
      } catch(error) {
        console.log("Error")
        toast.error('The movie is not found')
      } finally { setLoading(false) }
    }
    getItemMovie();
  }, [movieId]);

  /* console.log(movieItem) */
  
    return (
        <main>
          {loading && <Loader />}
          {movieItem && <ItemMovie movieItem={movieItem}/>}
          <Outlet />
        </main>
    )
};

