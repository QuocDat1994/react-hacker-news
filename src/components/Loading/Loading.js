import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import "./Loading.scss";

const Loading = props => {
  return (
    <div className={`loading ${props.isLoadingMore && "loading--small"}`}>
      <FontAwesomeIcon icon={faSpinner} spin />
      <div className="loading__text">Now Loading...</div>
    </div>
  );
};

export default Loading;
