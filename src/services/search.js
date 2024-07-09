import axios from "axios";
import { apiKey, baseUrl } from "./api";

export const getSearchMovie = async (q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`);
    console.log(q)
    return search.data
}

console.log(getSearchMovie)