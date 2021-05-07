import React from "react";
import { connect } from "react-redux";
import { nominateMovie, withdrawNomination } from "../redux/movie/actions";

import Button from "./Button";

import "../scss/App.scss";

const DEFAULT_PLACEHOLDER_IMAGE = "https://i.pinimg.com/originals/d3/8b/c3/d38bc38ad9ba60f9091aa2a9b3f4190f.png";

const NominatedMovie = ({ withdrawNomination, movie }) => {
  const { Title, Year, Poster } = movie;
  const poster = Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : Poster;
  return (
    <div className="nominated-grid-item">
      <div className="image" style={{ backgroundImage: `url(${poster})` }} />
      <div className="nominated-grid-footer">
        <span className="name">{Title}</span>
        <span className="price">{Year}</span>
      </div>

      <Button
        onClick={() => withdrawNomination(movie)}
        className="custom-button"
      >
        {"Remove"}
      </Button>
    
    </div>
  );
};

export default connect(null, { nominateMovie, withdrawNomination })(
  NominatedMovie
);
