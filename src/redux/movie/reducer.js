import MovieActionTypes from "./actionTypes";
import { addMovieToList, removeMovieFromList, removeAlert } from "./utils";

const INITIAL_STATE = {
  loading: true,
  nominations: [],
  error: {},
  allMovies: [],
  alerts: [],
};
const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MovieActionTypes.NOMINATE_MOVIE:
      return {
        ...state,
        nominations: addMovieToList(state.nominations, action.payload, 34343),
      };
    case MovieActionTypes.WITHDRAW_NOMINATION:
      return {
        ...state,
        nominations: removeMovieFromList(state.nominations, action.payload),
      };

    case MovieActionTypes.SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case MovieActionTypes.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        allMovies: action.payload,
      };
    case MovieActionTypes.SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    case MovieActionTypes.SET_ALERT:
      return { ...state, alerts: [...state.alerts, { ...action.payload }] };
    case MovieActionTypes.REMOVE_ALERT:
      return {
        ...state,
        alerts: removeAlert(state.alerts, action.payload),
      };
    default:
      return state;
  }
};

export default movieReducer;
