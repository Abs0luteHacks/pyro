import React, { Component } from "react";
import button from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import { faStepBackward } from "@fortawesome/free-solid-svg-icons";
import { faStepForward } from "@fortawesome/free-solid-svg-icons";

import "./mediaControl.css";

import album from "./album.jpg";

import YouTube from 'react-youtube';


class MediaControl extends Component {
  constructor(props) {
    super();
    this.state = {show: false};
    this.youtubePlayer;
  }
  
state= {
  show: false
}
  render() {

    const opts = {
      height: '0',
      width: '0',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div className="playing">
        <img src={album} alt="album" />
        <YouTube
        videoId="yhJQBlQsmzE"
        opts={opts}
        onReady={this._onReady}
      />
        <div className="info">
          <div className="details">
            <h1>Why So Serious</h1>
            <h2>Drake</h2>
          </div>
          <div className="controls">
            <button>
              <FontAwesomeIcon
                icon={faStepBackward}
                color="white"
                style={{ width: 35, height: "auto", padding: 5 }}
              />
            </button>

            {this.state.show ? <button onClick={this.playSong}>
              <FontAwesomeIcon
                icon={faPlayCircle}
                color="white"
                style={{ width: 35, height: "auto", padding: 5 }}
              />
            </button> :
          <button onClick={this.pauseSong}>
          <FontAwesomeIcon
            icon={faPauseCircle}
            color="white"
            style={{ width: 35, height: "auto", padding: 5 }}
          />
        </button> }
            <button>
              <FontAwesomeIcon
                icon={faStepForward}
                color="white"
                style={{ width: 35, height: "auto", padding: 5 }}
              />
            </button>
          </div>
        </div>
      </div>
    );
  }



  _onReady = (event) => {
    // access to player in all event handlers via event.target
    // this.youtubePlayer = event.target;

    this.youtubePlayer = event.target;
  }

  pauseSong = () => {
    this.youtubePlayer.pauseVideo();
    this.setState({show: !this.state.show});
  }
  
  playSong = () => {
    console.log("PLAy " + this.youtubePlayer);
    this.youtubePlayer.playVideo();
    this.setState({show: !this.state.show});
  }
}

export default MediaControl;
