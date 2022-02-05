import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getMoviesOverview } from '../services/MoviesApi';
import { Loader } from "../components/Loader/Loader";
import { Reviews } from "../components/Reviews/Reviews";

export const Review = () => {

    const { movieId } = useParams();
    const [loading, setLoading] = useState(false);
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        async function getOverview() {
          setLoading(true)
          try {
            const reviews = await getMoviesOverview(movieId);
            setReviews(reviews); 
          } catch(error) {
            console.log("Error")
          } finally { setLoading(false) }
        }
        getOverview();
      }, [movieId]);

    return (
        <>
          {loading && <Loader />}
          {reviews && <Reviews reviews={reviews}/>}
        </>
    );
}