import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, Loading } from "./types";
import axios from "axios";
import API from "../../apis/APIKEY";

export const searchMovie = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text,
  });
};

export const fetchMovies = (text) => (dispatch) => {
  axios
    .get(`http://www.omdbapi.com/?apikey=${API}&s=${text}`)
    .then((res) =>
      dispatch({
        type: FETCH_MOVIES,
        payload: res.data,
      })
    )
    .catch((err) => console.log("error", err));
};

export const fetchMovie = (id) => (dispatch) => {
  axios
    .get(`http://www.omdbapi.com/?apikey=${API}&i=${id}`)
    .then((res) =>
      dispatch({
        type: FETCH_MOVIE,
        payload: res.data,
      })
    )
    .catch((err) => console.log("error", err));
};

export const setLoading = () => {
  return {
    type: Loading,
  };
};
