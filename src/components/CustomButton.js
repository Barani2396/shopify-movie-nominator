import React from "react";

import { connect } from "react-redux";

import "../App.scss";

//commpon button componeny

const CustomButton = ({
  children,
  movie,
  componentName,
  nominations,
  onClick,
}) => {
  //disable inverter will be true when we have already reached the limits of 5 and the incoming movie non nominated
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
      {disableInverted ? "Can't Add More" : children}
    </button>
  );
};

const mapStateToProps = (state) => ({
  nominations: state.movie.nominations,
});

export default connect(mapStateToProps)(CustomButton);
