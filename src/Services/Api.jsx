import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = "4927eaa78308464ff5455b8cc9f9bf61"


// https://api.themoviedb.org/3/movie/550?api_key=4927eaa78308464ff5455b8cc9f9bf61


// https://api.themoviedb.org/3/genre/movie/list

// const getTrendingMovies = axios.get(movieBaseUrl + "/movie/550?api_key=" + api_key);

const getTrendingMovies = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);

// https://api.themoviedb.org/3/discover/tv?api_key=
const getTvShows = axios.get(movieBaseUrl + "/discover/tv?api_key=" + api_key);

const getMovies = axios.get(movieBaseUrl + "/discover/movie?api_key=" + api_key);

const getGenreList = axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=" + api_key);

const getMovieByGenreId = (id) => axios.get(movieBaseUrl+"/discover/movie?api_key=" + api_key +"&with_genres="+id);

const getMovieVideos = (movieId) => axios.get(movieBaseUrl + "/movie/" + movieId + "/videos?api_key="+ api_key + "&language=en-US");

const getTvVideos = (tvId) => axios.get(movieBaseUrl + "/tv/" + tvId + "/videos?api_key="+ api_key + "&language=en-US");


 

export default {
    getTrendingMovies, getTvShows, getMovies, getGenreList, getMovieByGenreId, getMovieVideos, getTvVideos
}