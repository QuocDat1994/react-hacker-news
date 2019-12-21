import React from "react";
import axios from "axios";
import { sortBy } from "lodash";

import Table from "./components/Table/Table";
import Loading from "./components/Loading/Loading";
import SearchInput from "./components/SearchInput/SearchInput";

import "./App.scss";

const SORTS = {
  TITLE: list => sortBy(list, "title"),
  TITLE_DESC: list => sortBy(list, "title").reverse(),
  DATE: list => sortBy(list, "created_at"),
  DATE_DESC: list => sortBy(list, "created_at").reverse(),
  COMMENTS: list => sortBy(list, "num_comments"),
  COMMENTS_DESC: list => sortBy(list, "num_comments").reverse(),
  POINTS: list => sortBy(list, "points"),
  POINTS_DESC: list => sortBy(list, "points").reverse()
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      searchTerm: "",
      sortKey: "POINTS_DESC",
      page: 0,
      isLoading: false,
      isLoadingMore: false,
      noMoreResult: false
    };
  }

  componentDidMount() {
    this.fetchData(0);
  }

  fetchData = async page => {
    const { searchTerm } = this.state;
    const url = `https://hn.algolia.com/api/v1/search?query=${searchTerm}&page=${page}&hitsPerPage=20`;

    this.setState({
      isLoading: page === 0,
      isLoadingMore: page !== 0
    });

    const response = await axios.get(url);
    const filteredList = [...this.state.list, ...response.data.hits].filter(
      data => Boolean(data.title) && Boolean(data.url)
    );

    this.setState({
      list: filteredList,
      page: page,
      isLoading: false,
      isLoadingMore: false,
      noMoreResult: response.data.hits.length === 0
    });
  };

  onSearchChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  onSearchSubmit = event => {
    event.preventDefault();
    this.setState({ list: [] });
    this.fetchData(0);
  };

  onSortChange = key => {
    if (key === this.state.sortKey) {
      this.setState({ sortKey: `${key}_DESC` });
    } else {
      this.setState({ sortKey: key });
    }
  };

  onLoadMore = () => {
    this.fetchData(this.state.page + 1);
  };

  onDismiss = id => {
    const filteredList = this.state.list.filter(data => data.objectID !== id);
    this.setState({ list: filteredList });
  };

  render() {
    const { isLoading, isLoadingMore, noMoreResult } = this.state;
    return (
      <div className="app">
        <div className="app__header">
          <h1>Hacker News Top Stories</h1>
          <SearchInput
            value={this.state.searchTerm}
            onChange={this.onSearchChange}
            onClick={this.onSearchSubmit}
          />
        </div>
        <div className="app__body">
          {isLoading && <Loading />}
          {!isLoading && (
            <Table
              list={SORTS[this.state.sortKey](this.state.list)}
              onSortChange={this.onSortChange}
              onDismiss={this.onDismiss}
              isLoading={isLoading}
              sortKey={this.state.sortKey}
            />
          )}
        </div>
        <div className="app__footer">
          {isLoadingMore && <Loading isLoadingMore={true} />}
          {!isLoadingMore && !isLoading && !noMoreResult && (
            <button onClick={this.onLoadMore}>More</button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
