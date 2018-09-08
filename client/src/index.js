import React from "react";
import ReactDOM from "react-dom";

import Player from './pages/player/player';
import './index.css';

class App extends React.Component { 
    render() {
        return (
            <div>
                <Player />

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
