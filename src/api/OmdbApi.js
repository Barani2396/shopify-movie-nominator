import axios from "axios";

export const OmdbApiKey = process.env.REACT_APP_OMDB_API_KEY; //omdb api key

//creating axios instance with omdb api
export default axios.create({
  baseURL: OmdbApiKey,
});
