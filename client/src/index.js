import React from "react";
import ReactDOM from "react-dom";

import Landing from './pages/landing';
import './index.css';

class App extends React.Component { 
    render() {
        return (
            <div>
                <Landing />

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
