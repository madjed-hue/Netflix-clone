require("dotenv").config();
const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchAdventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchDrama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchFamily: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fetchFantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchHistory: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  fetchMusic: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
  fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchScienceFiction: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchTvMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  fetchTvThriller: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchWar: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
};
export default requests;
