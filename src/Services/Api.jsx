import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = "4927eaa78308464ff5455b8cc9f9bf61"


// https://api.themoviedb.org/3/movie/550?api_key=4927eaa78308464ff5455b8cc9f9bf61


// https://api.themoviedb.org/3/genre/movie/list

// const getTrendingMovies = axios.get(movieBaseUrl + "/movie/550?api_key=" + api_key);

const getTrendingMovies = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);



// const getTrendingMovies = () => {
//     return axios.get(movieBaseUrl + "/genre/movie/list", {
//       params: {
//         api_key: api_key,
//         language: 'en',
//       },
//     });
//   };
  

export default {
    getTrendingMovies
}