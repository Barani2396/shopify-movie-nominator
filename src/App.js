import React, { useEffect } from "react"

import { PropTypes } from "prop-types"
import { connect } from "react-redux"

import { searchMovieSuccess } from "./redux/movie/actions"

import NominatedMoviePage from "./pages/NominatedMoviePage"
import MoviePage from "./pages/MoviePage"

import Title from "./components/Title"
import Alert from "./components/Alert"
import Search from "./components/Search"
import Footer from "./components/Footer"

import "./App.scss"

import Popcorn from "./assets/images/popcorn.svg"

const App = ({ searchMovieSuccess }) => {
  useEffect(() => {
    searchMovieSuccess("success");
  }, [searchMovieSuccess]);

  return (
    <div>
      <div className="title">
        <Title text={"Movie Nominator"} svgIcon={Popcorn}/>
      </div>
      <div className="body">
        <div className="wrapper">
          <Search />
          <p style={{textAlign: "center"}}>Pick 5 movies of your choice</p>
          <div className="alert-align">
          <Alert /> 
          </div>
          <div className="grid-container">
            <div className={"grid-item"}>
              <NominatedMoviePage />
            </div>
            <div className={"grid-item"}>
              <MoviePage />
            </div>
          </div>
        </div>
          <div className="push"></div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
App.propTypes = {
  searchMovieSuccess: PropTypes.func.isRequired,
};

export default connect(null, { searchMovieSuccess })(App);
