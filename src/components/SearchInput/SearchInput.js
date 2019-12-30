import React from "react";
import "./SearchInput.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class SearchInput extends React.Component {
  render() {
    return (
      <form className="SearchInput">
        <FontAwesomeIcon icon={faSearch} />
        <input
          name="search"
          type="text"
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder="Search"
        />
        <button type="submit" onClick={this.props.onClick}>
          Search
        </button>
      </form>
    );
  }
}
