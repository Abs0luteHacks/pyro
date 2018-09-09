import React, { Component } from "react";
import "./queueObject.css";
import redFire from './redfire.gif';
import redPinkFire from './redpinkfire.gif';
import pinkFire from './pinkfire.gif';
import magentaFire from './magentafire.gif';
import darkMagentaFire from './darkmagentafire.gif';
import purpleFire from './purplefire.gif';

class QueueObject extends Component {
  constructor(props) {
    super();
  }

  state = {
    query: "",
    searchResults: [],
    color: "#"
  };

  flame = () => { 
    if (this.props.upvoteCount < 6) {
      return 'redfire';
    }
  }

  render() {
    const { thumbnail, title, artist, upvoteCount, makeLit, URL } = this.props;
    var color = ""
    if (this.props.upvoteCount < 6){
      color = "#EF4A30"
    }
    else if (this.props.upvoteCount < 11){
      color = "#f40d30"
    }

    return (
      <div className="song">
        <img src={thumbnail} className="album" />

        <div className="metadata">
        {/* this.props.title.slice(0,20) */}
          <h1>{title}</h1>
          <h2>{artist}</h2>
        </div>

        <button className="heat" onClick={() => makeLit(URL)}>
          <h1 style={{backgroundColor: this.state.backgroundColor}}>{upvoteCount}</h1>
          <img src={upvoteCount < 6 ? require("./redfire.gif") : upvoteCount < 11 ? require("./redpinkfire.gif") : upvoteCount < 16 ? require("./pinkfire.gif") : upvoteCount < 21 ? require("./magentafire.gif") : 
            upvoteCount < 26 ? require("./darkmagentafire.gif") : upvoteCount < 31 ? require("./purplefire.gif") : require("./purplefire.gif")} />
        </button>
      </div>
    );
  }
}

export default QueueObject;
