import React from "react";

import { connect } from "react-redux";

import OMDB from "../components/OMDB";
import Loader from "../components/Loader"

import "../scss/App.scss";



const OMDBGrid = ({
  movie: { allMovies, errorMessage, loading, nominations },
}) => {
  return (
    <div className="omdb-grid">
      <h6>OMDB List</h6>
      {loading && !errorMessage ? (
        <Loader />
      ) : errorMessage ? (
        <div className="errorMessage">{errorMessage}</div>
      ) : (
        <div className="omdb-items">
          {allMovies && allMovies.length !== 0
            ?
              allMovies.map((movie) => {
                const alreadyNominatedMovie = nominations.find(
                  (item) => item.imdbID === movie.imdbID
                );
                return (
                  <OMDB
                    key={movie.imdbID}
                    movie={movie}
                    nominated={!!alreadyNominatedMovie}
                  />
                );
              })
            : 
              <p>Search something! Try Avengers</p>
            }
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps)(OMDBGrid);
