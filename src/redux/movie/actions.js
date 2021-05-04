import { v4 as uuidv4 } from "uuid";

import MovieActionTypes from "./actionTypes";

import OmdbApi from "../../api/OmdbApi";

export const nominateMovie = (movie) => async (dispatch, getState) => {
  dispatch({
    type: MovieActionTypes.NOMINATE_MOVIE,
    payload: movie,
  });
  if (getState().movie.nominations.length >= 5) {
    dispatch(setAlert("You have reached the limit", "success"));
  }
};

export const withdrawNomination = (movie) => async (dispatch) => {
  dispatch({
    type: MovieActionTypes.WITHDRAW_NOMINATION,
    payload: movie,
  });
};

// Get Search results
export const searchMovieSuccess = (searchTerm) => async (dispatch) => {
  dispatch({
    type: MovieActionTypes.SEARCH_MOVIES_REQUEST,
  });
  try {
    const res = await OmdbApi.get("", {
      params: { s: searchTerm, type: "movie" },
    });

    if (res.data.Response === "True") {
      dispatch({
        type: MovieActionTypes.SEARCH_MOVIES_SUCCESS,
        payload: res.data.Search,
      });
    } else {
      dispatch({
        type: MovieActionTypes.SEARCH_MOVIES_FAILURE,
        payload: { msg: res.data.error, status: res.data.status },
      });
      dispatch(
        setAlert("Please enter a valid name", "danger")
      );
    }
  } catch (err) {
    console.log(err);
  }
};

export const setAlert = (msg, alertType, timeout = 5000) => (
  dispatch,
  getState
) => {
  const alertId = uuidv4();

  dispatch({
    type: MovieActionTypes.SET_ALERT,
    payload: { msg, alertType, alertId },
  });
  setTimeout(
    () => dispatch({ type: MovieActionTypes.REMOVE_ALERT, payload: alertId }),
    timeout
  );
};
