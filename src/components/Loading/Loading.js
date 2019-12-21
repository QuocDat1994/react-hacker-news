import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <FontAwesomeIcon icon={faSpinner} spin />
      <div>Now Loading...</div>
    </div>
  );
};

export default Loading;
