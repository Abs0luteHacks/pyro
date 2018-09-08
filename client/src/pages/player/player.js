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
          data: {},
          error: false,
          search: false
        };
      }

  componentWillMount() {
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
        // this.setState({
        //   data
        // });
        console.log(data)
      )
      .catch(
        this.setState({
          error: true
        })
      );
  }

  showSearch = () => {
      this.setState({
          search: !this.state.search
      })
  }

  render() {
    console.log(this.props.match.params.id);

    return (
      <div className="player">
        <MediaController />
        <div className="queue">
          <QueueObject />
          <QueueObject />
          <QueueObject />
          <QueueObject />
          <QueueObject />
          <QueueObject />
          <QueueObject />
          <QueueObject />
          <QueueObject />
          <QueueObject />
          <QueueObject />
          <QueueObject />
          <QueueObject />
          <QueueObject />
          <QueueObject />
          <QueueObject />
          <QueueObject />
        </div>

        <AddButton onClick={this.showSearch} />

        <SearchModal show={this.state.search}/>
      </div>
    );
  }
}

export default Player;
