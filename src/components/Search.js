import React, { useState } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { searchMovieSuccess } from "../redux/movie/actions";

import "../App.scss";

import SearchIcon from "../assets/images/search.svg"

const Search = ({ searchMovieSuccess }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    searchMovieSuccess(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      <input
      placeholder="Search movies..."
        value={searchValue}
        onChange={handleSearch}
        type="text"
      />
      <button className="search-button" onClick={callSearchFunction}>
      <img className="search-icon"  type="image" src={SearchIcon} />
      </button>
    </form>
  );
};

Search.propTypes = {
  searchMovieSuccess: PropTypes.func.isRequired,
};

export default connect(null, { searchMovieSuccess })(Search);
