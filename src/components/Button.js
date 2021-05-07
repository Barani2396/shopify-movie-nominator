import React from "react";

import { connect } from "react-redux";

import "../scss/App.scss";

const CustomButton = ({
  children,
  movie,
  componentName,
  nominations,
  onClick,
}) => {
  const disableInverted =
    componentName === "Movie" &&
    nominations.length >= 5 &&
    !nominations.find((item) => item.imdbID === movie.imdbID);

  return (
    <button
      className={`${disableInverted ? "inverted" : null} custom-button`}
      onClick={onClick}
      disabled={disableInverted}
    >
      {disableInverted ? "Can't add" : children}
    </button>
  );
};

const mapStateToProps = (state) => ({
  nominations: state.movie.nominations,
});

export default connect(mapStateToProps)(CustomButton);
