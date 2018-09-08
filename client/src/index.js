import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Player from './pages/player/player';
import Landing from './pages/landing/landing';
import Join from './pages/join/join';
import Host from './pages/host/host';

import './index.css';

class App extends React.Component { 
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={Landing} />
					<Route exact path="/join" component={Join	} />
					<Route exact path="/host" component={Host} />
					<Route exact path="/dashboard" component={Player} />
				</div>
			</Router>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
