import React from "react";

import CustomButton from "./CustomButton";
import { nominateMovie, withdrawNomination } from "../redux/movie/actions";
import { connect } from "react-redux";
import "../App.scss";
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://i.pinimg.com/originals/d3/8b/c3/d38bc38ad9ba60f9091aa2a9b3f4190f.png";

const NominatedMovie = ({ withdrawNomination, movie }) => {
  const { Title, Year, Poster } = movie;
  const poster = Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : Poster;
  return (
    <div className="movie-item">
      <div className="image" style={{ backgroundImage: `url(${poster})` }} />
      <div className="collection-footer">
        <span className="name">{Title}</span>
        <span className="price">{Year}</span>
      </div>
      <CustomButton
        onClick={() => withdrawNomination(movie)}
        className="custom-button"
      >
        {"Remove"}
      </CustomButton>
    </div>
  );
};

export default connect(null, { nominateMovie, withdrawNomination })(
  NominatedMovie
);
