import React from "react";

import "../App.scss";

import CustomButton from "./CustomButton";
import { nominateMovie, withdrawNomination } from "../redux/movie/actions";
import { connect } from "react-redux";


//this is the default image link if the image is not available
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://i.pinimg.com/originals/d3/8b/c3/d38bc38ad9ba60f9091aa2a9b3f4190f.png";

const Movie = ({ nominateMovie, withdrawNomination, movie, nominated }) => {
  const { Title, Year, Poster } = movie;

  const poster = Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : Poster;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${poster})` }} />
      <div className="collection-footer">
        <span className="name">{Title}</span>
        <span className="price">{Year}</span>
      </div>

      {/* if the movie is not nominated yet the nominate movie function will fire on click else withdrawNomination function fire */}
      <CustomButton
        onClick={
          nominated
            ? () => withdrawNomination(movie)
            : () => nominateMovie(movie)
        }
        className="custom-button"
        componentName={"Movie"}
        movie={movie}
      >
        {/* changing the button name based on movie status */}
        {nominated ? "Remove" : "Nominate"}
      </CustomButton>
    </div>
  );
};

export default connect(null, { nominateMovie, withdrawNomination })(Movie);
