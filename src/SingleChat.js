import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./SingleChat.css";
const SingleChat = () => {
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image: "...",
      message: "Whats up ?",
    },
    {
      name: "Ellen",
      image: "...",
      message: "How is it going",
    },
    {
      message: "Whats up ?",
    },
  ]);
  return (
    <div className="singleChat">
      <p className="singleChat__timestamp"> YOU MATCHED WITH ELLEN ON 10/08/20</p>

      {messages.map((message) => (

          message.name ? (
            <div className="singleChat__message">
            <Avatar
              className="singleChat__image"
              alt={message.name}
              src={message.image}
            />
            <p className="singleChat__text" >{message.message}</p>
          </div>
          ) : (
            <div className="singleChat__message">
            
            <p className="singleChat__textUser" >{message.message}</p>
            </div>
          )
        
      ))}
    </div>
  );
};

export default SingleChat;
