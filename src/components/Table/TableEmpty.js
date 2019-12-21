import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";

const TableEmpty = () => {
  return (
    <div className="table table--empty">
      <FontAwesomeIcon icon={faFrown} />
      <div>No Results</div>
      <p>
        There is no posts that matches your search. <br />
        Please try different search terms.
      </p>
    </div>
  );
};

export default TableEmpty;
