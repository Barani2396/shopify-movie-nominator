import React from "react";

import "../App.scss";

const Title = (props) => {
  return (
    <header className="app-header-comp">
      <h2><img className="pop-corn" src={props.svgIcon}/> {props.text} <img className="pop-corn" src={props.svgIcon}/></h2>
    </header>
  );
};

export default Title;