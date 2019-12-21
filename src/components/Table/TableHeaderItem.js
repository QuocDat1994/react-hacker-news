import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

export default class TableHeaderItem extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.text.toUpperCase());
  };

  render() {
    const { sortKey, text } = this.props;
    return (
      <th onClick={this.handleClick}>
        {text}
        {sortKey === text.toUpperCase() && <FontAwesomeIcon icon={faSortUp} />}
        {sortKey === `${text.toUpperCase()}_DESC` && (
          <FontAwesomeIcon icon={faSortDown} />
        )}
      </th>
    );
  }
}
