import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import db from "./firebase";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    db.collection("/users").onSnapshot((snapshot) => {
      setPeople(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            key={person.name}
            className="swipe"
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
