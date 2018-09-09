import React, { Component } from "react";
import "./player.css";

import QueueObject from "../../components/queueObject/queueObject";
import MediaController from "../../components/mediaControl/mediaControl";
import AddButton from "../../components/addButton/addButton";

import SearchModal from "../../components/search/search";

class Player extends Component {
  constructor(props) {
    super();
    this.state = {
      data: null,
      error: false,
      search: true,
      mainSong: {}
    };
  }

  componentWillMount() {
    this.updateData();
  }

  updateData = () => {
    fetch("http://localhost:8888/rooms/find", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        code: this.props.match.params.id
      })
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          data
        })
      )
      .catch(
        this.setState({
          error: true
        })
      );
  };

  makeLit = songURL => {
    fetch("http://localhost:8888/songs/upvote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        code: this.props.match.params.id,
        songURL,
        sessionUUID: Math.floor(Math.random() * 1001392)
      })
    });

    this.updateData();
  };

  generateSongs = () => {
    return this.state.data == null
      ? null
      : this.state.data.songs.map(song => {
          return (
            <QueueObject
              thumbnail={song.songThumbnailURL}
              title={song.songTitle}
              artist={song.artistTitle}
              upvoteCount={song.upvoters.length}
              makeLit={this.makeLit}
              URL={song.songURL}
            />
          );
        });
  };

  showSearch = () => {
    this.setState({
      search: !this.state.search
    });
  };

  addSong = song => {
    this.showSearch();
    console.log(song);

    fetch("http://localhost:8888/songs/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        code: this.props.match.params.id,
        songURL: song.URL,
        songTitle: song.title,
        songThumbnailURL: song.thumbnail,
        artistTitle: song.artist,
        sessionUUID: Math.floor(Math.random() * 1000009)
      })
    })
      .then(body => body.json())
      .then(json => {
        console.log("Song added");
        this.updateData();
      });
  };

  render() {
    console.log(this.props.match.params.id);
    console.log(this.generateSongs());

    return (
      <div className="player">
        <MediaController 
        />
        <div className="queue">{this.generateSongs()}</div>

        <AddButton onClick={this.showSearch} />

        <SearchModal addSong={this.addSong} show={this.state.search} />
      </div>
    );
  }
}

export default Player;
