import React from "react";

import { connect } from "react-redux";

import NominatedComp from "../components/NominatedComp";

import "../scss/App.scss";

function NominatedGrid({ movie }) {
  return (
    <div className="nominated-grid">
      <h6>Nominated List</h6>
      <div className="nominated-items">
        {movie.nominations && movie.nominations.length !== 0
          ? movie.nominations.map((movie) => {
              return <div><NominatedComp key={movie.imdbID} movie={movie} /></div>;
            })
          : <p>Nothing to show! Start adding your favourite movies</p>}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps)(NominatedGrid);
