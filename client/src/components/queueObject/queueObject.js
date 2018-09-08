import React, { Component } from "react";
import button from "react";
import "./queueObject.css";

import album from "../mediaControl/album.jpg";
import yellowFlame from "./heat1.png";
import orangeFlame from "./heat2.png";
import redFlame from "./heat3.png";

class QueueObject extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { thumbnail, title, artist, upvoteCount, makeLit, URL } = this.props;
    return (
      <div className="song">
        <img src={thumbnail} className="album" />

        <div className="metadata">
          <h1>{title}</h1>
          <h2>{artist}</h2>
        </div>

        <button className="heat" onClick={() => makeLit(URL)}>
          <img src={yellowFlame} />
          <h1>{upvoteCount}</h1>
        </button>
      </div>
    );
  }
}

export default QueueObject;
