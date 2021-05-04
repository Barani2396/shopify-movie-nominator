export const addMovieToList = (nominations, movieToNominate) => {
  const alreadyNominatedMovie = nominations.find(
    (movie) => movie.imdbID === movieToNominate.imdbID
  );

  if (alreadyNominatedMovie) {
    return [...nominations];
  }
  return [...nominations, { ...movieToNominate }];
};

export const removeMovieFromList = (nominatedMovies, movieToRemove) => {
  return nominatedMovies.filter(
    (nominateMovie) => nominateMovie.imdbID !== movieToRemove.imdbID
  );
};

export const removeAlert = (alerts, alertIdToRemove) => {
  console.log(
    alerts.filter((alert) => alert.alertId !== alertIdToRemove),
    alertIdToRemove
  );
  return alerts.filter((alert) => alert.alertId !== alertIdToRemove);
};
