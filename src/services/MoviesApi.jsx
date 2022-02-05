import axios from 'axios';
import { toast } from "react-hot-toast";

axios.defaults.baseURL = 'https://api.themoviedb.org/';
const KEY = `aa799e6d0297de166f5b00a47e312b46`;

export const getMovies = async () => {
    const response = await axios.get(`3/trending/movie/day?api_key=${KEY}`);
    const movies = response.data.results;
    /* const quantity = response.data.total_results; */
    
    return movies;
  };


export const getMovieById = async (movieId) => {
  try {
    const response = await axios.get(`3/movie/${movieId}?api_key=${KEY}`);
    const movie = response.data;
    return movie;
  } catch(error) {
    toast.error("The Movie is not found!")
  } 
};

export const getMoviesOverview = async (movieId) => {
  try {
    const response = await axios.get(`3/movie/${movieId}/reviews?api_key=${KEY}`);
    const rewiews = response.data;
    return rewiews;
  } catch(error) {
    toast.error("Reviews is not found!")
  } 
};


