import React, { Component } from "react";
import SearchBar from "./searchBar";
import SearchResult from "./searchResult";
import "./searchBar.css";
import "./search.css";

class Search extends Component {
  state = {
    query: "",
    searchResults: []
  };

  onChange = e => {
    const query = e.target.value;

    if (query === "") this.setState({ searchResults: [] });

    this.setState({
      query
    });

    fetch("https://calm-dusk-88107.herokuapp.com/songs/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        songname: query
      })
    })
      .then(res => res.json())
      .then(json => {
        const items = json.items;
        items.splice(2, 3);

        const searchResults = items.map(item => {
          const newItem = {};
          newItem.title = item.snippet.title;
          newItem.artist = item.snippet.channelTitle;
          newItem.thumbnail = item.snippet.thumbnails.default.url;
          newItem.URL = `https://www.youtube.com/watch?v=${item.id.videoId}`;
          return newItem;
        });
        this.setState({
          searchResults
        });
      });
  };

  generateSearchResults = () => {
    return this.state.searchResults.map(result => {
      return (
        <SearchResult
          title={result.title}
          artist={result.artist}
          thumbnail={result.thumbnail}
          URL={result.URL}
          onClick={this.props.addSong}
        />
      );
    });
  };

  render() {
    return (
      <div
        className="search"
        style={{ display: this.props.show ? "none" : "flex" }}
      >
        <div className="searchBar">
          <input
            type="text"
            id="spotlight"
            placeholder="search for a song"
            value={this.state.query}
            onChange={this.onChange}
          />
        </div>
        <div className="results">{this.generateSearchResults()}</div>
      </div>
    );
  }
}

export default Search;
