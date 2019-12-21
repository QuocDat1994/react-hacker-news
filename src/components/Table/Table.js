import React from "react";
import "./Table.scss";

import TableHeaderItem from "./TableHeaderItem";
import TableBodyItem from "./TableBodyItem";

export default class Table extends React.Component {
  handleSort = key => {
    this.props.onSortChange(key);
  };

  handleDismiss = id => {
    this.props.onDismiss(id);
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <TableHeaderItem
              text="Title"
              onClick={this.handleSort}
              sortKey={this.props.sortKey}
            />
            <TableHeaderItem
              text="Date"
              onClick={this.handleSort}
              sortKey={this.props.sortKey}
            />
            <TableHeaderItem
              text="Comments"
              onClick={this.handleSort}
              sortKey={this.props.sortKey}
            />
            <TableHeaderItem
              text="Points"
              onClick={this.handleSort}
              sortKey={this.props.sortKey}
            />
            <th />
          </tr>
        </thead>
        <tbody>
          {this.props.list.map(data => (
            <TableBodyItem
              key={data.objectID}
              data={data}
              onClick={this.handleDismiss}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
