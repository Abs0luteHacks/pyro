import React, { Component } from "react";
import "./player.css";

import QueueObject from "../../components/queueObject/queueObject";
import MediaController from "../../components/mediaControl/mediaControl";
import AddButton from "../../components/addButton/addButton";

class Player extends Component {
  constructor(props) {
    super();
    this.state = {
      data: {},
      error: false
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

        <AddButton />
      </div>
    );
  }
}

export default Player;
