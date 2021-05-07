import React, { useEffect } from "react"

import { PropTypes } from "prop-types"
import { connect } from "react-redux"

import { searchMovieSuccess } from "./redux/movie/actions"

import NominatedGrid from "./grid/NominatedGrid"
import MoviePage from "./grid/OMDBGrid"

import Title from "./components/Title"
import Alert from "./components/Alert"
import Search from "./components/Search"
import Footer from "./components/Footer"

import "./scss/App.scss"

import Popcorn from "./assets/images/popcorn.svg"

const App = ({ searchMovieSuccess }) => {
  useEffect(() => {
    searchMovieSuccess("success");
  }, [searchMovieSuccess]);

  return (
    <div>
        <Title text={"Movie Nominator"} svgIcon={Popcorn}/>
      <div className="body">
        <div className="wrapper">
          <Search />
          <p style={{textAlign: "center"}}>Pick 5 movies of your choice</p>
          <div className="alert-wrap">
            <div> <Alert /> </div>
          </div>
          <div className="grid-container grid-wrap">
            <div className={"grid-item"}>
              <NominatedGrid />
            </div>
            <div className={"grid-item"}>
              <MoviePage />
            </div>
          </div>
        </div>
      </div>
      
        <Footer />
    
    </div>
  );
};
App.propTypes = {
  searchMovieSuccess: PropTypes.func.isRequired,
};

export default connect(null, { searchMovieSuccess })(App);
