import React from "react";

import { connect } from "react-redux";

import Movie from "../components/Movie";
import Loader from "../components/Loader"

import "./page.scss";



const MoviePage = ({
  movie: { allMovies, errorMessage, loading, nominations },
}) => {
  return (
    <div className="movie-page">
      {loading && !errorMessage ? (
        <Loader />
      ) : errorMessage ? (
        <div className="errorMessage">{errorMessage}</div>
      ) : (
        <div className="items">
          {allMovies && allMovies.length !== 0
            ? // finding whther movie is already nominated
              allMovies.map((movie) => {
                const alreadyNominatedMovie = nominations.find(
                  (item) => item.imdbID === movie.imdbID
                );
                return (
                  <Movie
                    key={movie.imdbID}
                    movie={movie}
                    nominated={!!alreadyNominatedMovie}
                  />
                );
              })
            : (<div className='no-search-result'>
              <p> Search something! Try Avengers </p>
            </div>)}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps)(MoviePage);
