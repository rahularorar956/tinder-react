import React from "react";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SingleChat from "./SingleChat";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <SingleChat />
          </Route>

          <Route path="/chat">
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
      </Router>
    </div>
  );
}

export default App;
