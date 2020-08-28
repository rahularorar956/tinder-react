import React from "react";
import Chat from "./Chat";
import "./Chats.css";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Sophie"
        message="What are you doing this weekend?"
        timestamp="45 secons ago"
        profilePic="https://images.generated.photos/OKRuIIs5lRCsqDCGiKaAnqFo1fc386049ipkYWBiGfU/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5MzU4NzMuanBn.jpg"
      />

      <Chat
        name="Sarah"
        message="Whats up !"
        timestamp="50 minutes ago"
        profilePic="https://images.generated.photos/j6keUrhOz53lSXchb_GERxRM6uuQeraHQT292iPtERI/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1NTMxMTUuanBn.jpg"
      />

      <Chat
        name="Ellen"
        message="Hey, How are you?"
        timestamp="2 days ago"
        profilePic="https://images.generated.photos/k1pVttVRoS3DiIXtduX2GSzMGnn1hao3-6BXh6Sp9ys/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1NTc1MzYuanBn.jpg"
      />
    </div>
  );
};

export default Chats;
