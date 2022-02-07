import { useParams, Outlet, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FindMoviesByKeywords } from "../components/Movies/FindByKeyWords";
import { getKeywords } from "../services/MoviesApi";
import { Loader } from "../components/Loader/Loader";
import { SearchMovie } from "../components/SearchMovie/SearchMovie";

export const FindMovie = () => {

    const [keyWord, setKeyWord] = useState('');
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams({});


    const handleFormSubmit = keyWord => {
          setKeyWord(keyWord)
          setSearchParams({query: keyWord})
    };

    useEffect(() => {
      if(keyWord.length === 0) {
        return;
      }
        async function getMovieByKeyWord() {
          setLoading(true)
          try {
          await getKeywords(keyWord).then(movies => setMovies(movies)) 
          } catch(error) {
            toast.error('The movie is not found')
          } finally { setLoading(false) }
        }
        getMovieByKeyWord();

      }, [keyWord]);
  
    return (
        <main>
          {loading && <Loader />}
          <FindMoviesByKeywords onSubmit={handleFormSubmit} />
          <SearchMovie movies={movies}/>
          <Outlet />
        </main>
    )
}