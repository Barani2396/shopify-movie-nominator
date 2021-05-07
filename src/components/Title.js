import React from "react";

import "../scss/App.scss";

const Title = (props) => {
  return (
    <div className="title">
    <header className="app-header-comp">
      <h2><img className="pop-corn" src={props.svgIcon}/> {props.text} <img className="pop-corn" src={props.svgIcon}/></h2>
    </header>
    </div>
  );
};

export default Title;