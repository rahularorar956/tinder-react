import React from "react";
import Header from "./Header";
import TinderCards from "./TinderCards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">chat</Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>

        {/* Cards */}

        {/* Buttons Below Cards */}

        {/* Chat Screen */}

        {/* Individual chat screen */}
      </Router>
    </div>
  );
}

export default App;
