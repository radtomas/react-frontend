import React from "react";
import Insets from "./components/Insets";

class App extends React.Component{
    render() {
        return (
            <div className="app">
                <header><h1>My website</h1></header>
                <Insets/>
            </div>
        );
    }
}

export default App;