import React from "react";
import Chat from "./Chat";
import "./Chats.css";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="whats up !"
        timestamp="40 secons ago"
        profilePic="..."
      />

      <Chat
        name="Sarah"
        message="whats up !"
        timestamp="40 secons ago"
        profilePic="..."
      />

      <Chat
        name="Ellen"
        message="whats up !"
        timestamp="40 secons ago"
        profilePic="..."
      />
    </div>
  );
};

export default Chats;
