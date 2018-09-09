import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./join.css";

class Join extends Component {
  state = {
    code: "",
    error: ""
  };

  onType = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  joinRoom = () => {
    const { code } = this.state;
    fetch("https://salty-earth-27009.herokuapp.com/server/rooms/find", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        code
      })
    })
      .then(body => body.json())
      .then(json => {
        if (json.doesnotexist) {
          this.setState({
            error: "The room does not exist!"
          });
        } else {
          this.props.history.push(`/dashboard/${json.code}`);
        }
      })
      .catch(err => {
        this.setState({
          error: "Room code already exists!"
        });
      });
  };

  render() {
    return (
      <div>
        <div className="join">
          <div className="flex-container">
            <div className="row">
              <div className="flex-item">
                <div className="subHeading">
                  <h1>enter the room code</h1>
                </div>
                <input
                  placeholder="code"
                  name="code"
                  value={this.state.code}
                  onChange={this.onType}
                />
              </div>
              <div className="subHeading">
                <h3>{this.state.error}</h3>
              </div>
            </div>
          </div>

          <div className="tabBar">
            <div
              className="button"
              style={{ backgroundColor: "#EF4A30", fontWeight: "700" }}
              onClick={this.joinRoom}
            >
              JOIN ROOM
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Join;
