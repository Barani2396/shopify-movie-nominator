import React from "react";

import { connect } from "react-redux";

import NominatedMovie from "../components/NominatedMovie";

import "./page.scss";


function NominatedMoviePage({ movie }) {
  return (
    <div className="nominated-page">
      <h6>Nominated List</h6>
      <div>
        {movie.nominations && movie.nominations.length !== 0
          ? movie.nominations.map((movie) => {
              return <div className="movies"><NominatedMovie key={movie.imdbID} movie={movie} /></div>;
            })
          : "Nothing to show!"}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps)(NominatedMoviePage);
