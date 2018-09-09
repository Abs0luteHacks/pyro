import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Player from "./pages/player/player";
import Landing from "./pages/landing/landing";
import Join from "./pages/join/join";
import Host from "./pages/host/host";

import "./index.css";

class App extends React.Component {
  state = {
    code: ""
  };

  changeCode = e => {
    this.setState(
      {
        code: e.target.value
      },
      this.fetchData()
    );
  };

  fetchData() {
    fetch("https://salty-earth-27009.herokuapp.com/server/rooms/find", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        code: "sjublock"
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/host" component={Host} />
          <Route path="/dashboard/:id" component={Player} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
