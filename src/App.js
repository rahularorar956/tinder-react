import React from "react";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chats">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
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
