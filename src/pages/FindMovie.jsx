import { Outlet, useSearchParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FindMoviesByKeywords } from "../components/Movies/FindByKeyWords";
import { getKeywords } from "../services/MoviesApi";
import { Loader } from "../components/Loader/Loader";
import { RenderSearchMovie } from "../components/SearchMovie/SearchMovie";

export const FindMovie = () => {

    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams({});
    const location = useLocation();
    const query = searchParams.get('query');


    const handleFormSubmit = query => {
          setSearchParams({query: query})
    };

    

    useEffect(() => {
      if(query) {
        async function getMovieByKeyWord() {
          setLoading(true)
          try {
          await getKeywords(query).then(movies => setMovies(movies)) 
          } catch(error) {
            toast.error('The movie is not found')
          } finally { setLoading(false) }
        }
        getMovieByKeyWord();
      } 
      }, [query]);
  
    return (
      
        <main>
          {loading && <Loader />}
          <FindMoviesByKeywords onSubmit={handleFormSubmit} />
          {movies ? <RenderSearchMovie movies={movies} location={location}/> : <div>No movie</div>}
          <Outlet />
        </main>
    )
}