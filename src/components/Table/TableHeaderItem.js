import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

export default class TableHeaderItem extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.text.toUpperCase());
  };

  getSortClass = () => {
    const { text, sortKey } = this.props;

    if (sortKey === text.toUpperCase()) {
      return "sortUp";
    } else if (sortKey === `${text.toUpperCase()}_DESC`) {
      return "sortDown";
    }
    return "";
  };

  render() {
    return (
      <th onClick={this.handleClick} className={this.getSortClass}>
        {this.props.text}
        {this.getSortClass() === "sortUp" && (
          <FontAwesomeIcon icon={faSortUp} />
        )}
        {this.getSortClass() === "sortDown" && (
          <FontAwesomeIcon icon={faSortDown} />
        )}
      </th>
    );
  }
}
