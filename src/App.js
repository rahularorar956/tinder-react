import React from "react";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
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
            {/* Cards */}
            <TinderCards />
            {/* Buttons Below Cards */}

            <SwipeButtons />
          </Route>
        </Switch>

        {/* Chat Screen */}

        {/* Individual chat screen */}
      </Router>
    </div>
  );
}

export default App;
