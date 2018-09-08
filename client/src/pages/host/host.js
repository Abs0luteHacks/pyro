import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./host.css";

class Host extends Component {
  render() {
    return (
      <div className="host">
        <div className="flex-container">
          <div className="row">
            <div className="flex-item">
              <form>
                <input
                  type="text"
                  name="name"
                  className="question"
                  id="nme"
                  required
                  autoComplete="off"
                />
                <label for="nme">
                  <span>Enter the room code</span>
                </label>
                <textarea
                  name="message"
                  rows="2"
                  className="question"
                  id="msg"
                  required
                  autocomplete="off"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="tabBar">
          <button
            className="button"
            style={{ backgroundColor: "#EF4A30", fontWeight: "700" }}
          >
            <Link to="/dashboard">HOST PARTY</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Host;
