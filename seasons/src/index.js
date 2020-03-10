import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";
import useLocation from "./useLocation";

const App = () => {
  const [lat, errMessage] = useLocation();
  let content;
  if (errMessage) {
    content = <div>Error: {errMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Loader message="Please accept request..." />;
  }

  return <div className="border red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
