import axios from "axios";

export const OmdbApiKey = process.env.REACT_APP_OMDB_API_KEY; //omdb api key

const OmdbUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=${OmdbApiKey}`

//creating axios instance with omdb api
export default axios.create({
  baseURL: OmdbUrl,
});
