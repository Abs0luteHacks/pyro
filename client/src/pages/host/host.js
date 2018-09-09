import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./host.css";

class Host extends Component {
  state = {
    code: "",
    genre: "pop",
    ambiance: "chill",
    error: ""
  };

  onType = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  createRoom = () => {
    const { code, genre, ambiance } = this.state;
    fetch("https://calm-dusk-88107.herokuapp.com/rooms/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        code,
        genre,
        ambiance
      })
    })
      .then(body => body.json())
      .then(json => {
        if (json.alreadyexists) {
          this.setState({
            error: "Room code already exists!"
          });
        } else {
          this.props.history.push(`/dashboard/${json.success}`);
        }
      })
      .catch(err => {
        this.setState({
          error: "Room code already exists!"
        });
      });
  };

  render() {
    const { code, genre, ambiance } = this.state;
    return (
      <div>
        <div>
          <div>
            <div className="host">
              <div className="flex-container">
                <div className="row">
                  <div className="flex-item">
                    <div className="subHeading">
                      <h1>create a room name</h1>
                    </div>
                    <input
                      name="code"
                      onChange={this.onType}
                      value={code}
                      placeholder="code"
                    />
                  </div>
                  <div className="subHeading">
                    <h3>{this.state.error}</h3>
                  </div>
                  <div className="flex-item">
                    <div className="subHeading">
                      <h1>genre</h1>
                      <select name="genre" onChange={this.onType} value={genre}>
                        <option value="pop">pop</option>
                        <option value="hiphop">hiphop</option>
                        <option value="rock">rock</option>
                        <option value="country">country</option>
                        <option value="edm/dance">edm/dance</option>
                        <option value="any">any</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex-item">
                    <div className="subHeading">
                      <h1>ambiance</h1>
                      <select
                        onChange={this.onType}
                        value={ambiance}
                        name="ambiance"
                      >
                        <option value="chill">chill</option>
                        <option value="party">party</option>
                        <option value="workout">workout</option>
                        <option value="focus">focus</option>
                        <option value="any">any</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tabBar">
                <div
                  className="button"
                  style={{ backgroundColor: "#EF4A30", fontWeight: "700" }}
                  onClick={this.createRoom}
                >
                  CREATE ROOM
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tabBar">
          <button
            className="button"
            style={{ backgroundColor: "#EF4A30", fontWeight: "700" }}
          >
            HOST PARTY
          </button>
        </div>
      </div>
    );
  }
}

export default Host;
