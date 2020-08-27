import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./SingleChat.css";
const SingleChat = () => {
  const [input, setInput] = useState("");
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

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="singleChat">
      <p className="singleChat__timestamp">
        {" "}
        YOU MATCHED WITH ELLEN ON 10/08/20
      </p>

      {messages.map((message) =>
        message.name ? (
          <div className="singleChat__message">
            <Avatar
              className="singleChat__image"
              alt={message.name}
              src={message.image}
            />
            <p className="singleChat__text">{message.message}</p>
          </div>
        ) : (
          <div className="singleChat__message">
            <p className="singleChat__textUser">{message.message}</p>
          </div>
        )
      )}

      <div className="singleChat__input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="singleChat__inputField"
            type="text"
            placeholder="Type a message..."
          />
          <button
            type="submit"
            onClick={handleSend}
            className="singleChat__inputButton"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleChat;
