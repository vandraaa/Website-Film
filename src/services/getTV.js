import axios from "axios";
import  {apiKey, baseUrl} from './api'

export const getAiringToday = async () => {
    const tv = await axios.get(`${baseUrl}/tv/airing_today?page=1&api_key=${apiKey}`);
    return tv.data.results
}

export const getOnTheAir = async () => {
    const tv = await axios.get(`${baseUrl}/tv/on_the_air?page=1&api_key=${apiKey}`);
    return tv.data.results
}

export const getPopular = async () => {
    const tv = await axios.get(`${baseUrl}/tv/popular?page=1&api_key=${apiKey}`);
    return tv.data.results
}

export const getTopRated = async () => {
    const tv = await axios.get(`${baseUrl}/tv/top_rated?page=1&api_key=${apiKey}`);
    return tv.data.results
}


export const getSearchTV = async (q) => {
    const tv = await axios.get(`${baseUrl}/search/tv?query=${q}&api_key=${apiKey}`);
    return tv.data
}

export const getDetailTv = async (id) => {
    const detail = await axios.get(`${baseUrl}/tv/${id}?api_key=${apiKey}`);
    return detail.data
}