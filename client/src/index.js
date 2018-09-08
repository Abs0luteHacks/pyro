import React from "react";
import ReactDOM from "react-dom";

import Player from './pages/player/player';
import Landing from './pages/landing/landing';
import Join from './pages/join/join';
import Host from './pages/host/host';



import './index.css';

class App extends React.Component { 
    render() {
        return (
            <div>
                <Host />

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
