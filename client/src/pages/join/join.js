import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./join.css";

class Join extends Component {
  render() {
    return (
      <div className="join">
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
                  autocomplete="off"
                />
                <label for="nme">
                  <span>Enter the room code</span>
                </label>
              </form>
            </div>
          </div>
        </div>
        <div classNameName="tabBar">
          <div
            className="button"
            style={{ backgroundColor: "#EF4A30", fontWeight: "700" }}
          >
            <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "white" }}
            >
              JOIN ROOM
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Join;
