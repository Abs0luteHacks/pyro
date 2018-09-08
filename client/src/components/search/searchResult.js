import React, { Component } from "react";
import album from "../mediaControl/album.jpg";
import "./searchResult.css";

class SearchResult extends Component {
  constructor(props) {
    super();
  }
  render() {
    const { title, artist, thumbnail, URL, onClick } = this.props;
    return (
      <div
        className="result"
        onClick={() => onClick({ thumbnail, title, artist, URL })}
      >
        <img src={thumbnail} />
        <div className="metadata">
          <h1>{title}</h1>
          <h2>{artist}</h2>
        </div>
      </div>
    );
  }
}

export default SearchResult;
