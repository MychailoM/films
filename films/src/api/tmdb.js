import React from "react";
import axios from "axios";

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '89b6a44841a2190c49f0f512dbc030ee';

const tmdb = axios.create({
    baseURL: API_URL,
    params: {api_key: API_KEY, language: 'en-US'}
});

export const getTrending = async () => {
    const {data} = await tmdb.get("/trending/movie/day");
    return data.results;
}

export const searchMovies = async (query) => {
    const {data} = await tmdb.get("/search/movie", {params:{query}});
    return data.results;
}

export const getMovieDetails = async (id) => {
    const {data} = await tmdb.get(`movie/${id}`);
    return data
}

export const getReviews = async (id) => {
  const { data } = await tmdb.get(`movie/${id}/reviews`);
  return data.results;
}; 

export const getCast = async (id) => {
    const {data} = await tmdb.get(`movie/${id}/credits`);
    return data.cast;
}
