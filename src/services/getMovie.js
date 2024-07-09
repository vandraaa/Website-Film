import axios from "axios";
import { apiKey, baseUrl } from "./api";

export const getMovieNowPlaying = async () => {
    const movie = await axios.get(`${baseUrl}/movie/now_playing?page=1&api_key=${apiKey}`);
    return movie.data.results
}

export const getMoviePopular = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`);
    return movie.data.results
}

export const getMovieTopRated = async () => {
    const movie = await axios.get(`${baseUrl}/movie/top_rated?page=1&api_key=${apiKey}`);
    return movie.data.results
}

export const getMovieUpComing = async () => {
    const movie = await axios.get(`${baseUrl}/movie/upcoming?page=1&api_key=${apiKey}`);
    return movie.data.results
}

// detail
export const getMovieDetail = async (id) => {
    const movie = await axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}`);
    return movie.data
}

export const getVideo = async (id) => {
    const video = await axios.get(`${baseUrl}/movie/${id}/videos?api_key=${apiKey}`);
    return video
}

// export const getDiscoverMovie = async () => {
//     const movie = await axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}`);
//     return movie.data.results
// }