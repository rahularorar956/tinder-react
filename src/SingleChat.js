import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./SingleChat.css";
const SingleChat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image: "https://images.generated.photos/k1pVttVRoS3DiIXtduX2GSzMGnn1hao3-6BXh6Sp9ys/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1NTc1MzYuanBn.jpg",
      message: "Whats up ?",
    },
    {
      name: "Ellen",
      image: "https://images.generated.photos/k1pVttVRoS3DiIXtduX2GSzMGnn1hao3-6BXh6Sp9ys/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1NTc1MzYuanBn.jpg",
      message: "How is it going",
    },
    {
      message: "Hey, How are you?",
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
