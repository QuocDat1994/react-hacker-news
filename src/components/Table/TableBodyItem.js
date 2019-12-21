import React from "react";
import moment from "moment";

export default class TableBodyItem extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.data.objectID);
  };

  render() {
    const { data } = this.props;
    return (
      <tr>
        <td>
          <a className="title" href={data.url} target="_blank">
            {data.title}
          </a>
          <div className="author">by {data.author}</div>
        </td>
        <td>{moment(data.created_at).format("MMMM Do YYYY")}</td>
        <td>{data.num_comments}</td>
        <td>{data.points}</td>
        <td>
          <button onClick={this.handleClick}>Dismiss</button>
        </td>
      </tr>
    );
  }
}
