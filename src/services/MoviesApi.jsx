import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
const KEY = `aa799e6d0297de166f5b00a47e312b46`;

export const GetMovies = async () => {
    const response = await axios.get(`3/trending/movie/day?api_key=${KEY}`);
    const movies = response.data.results;
    /* const quantity = response.data.total_results; */
    
    return movies;
  }