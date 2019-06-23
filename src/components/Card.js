import React from "react";
import "./css/card.css";

const Card = card => {
  return (
    <div className="ui link card" onClick={card.handleClick}>
      <div className="image">
        <img alt={card.id} src={require("../geekPics/" + card.image)} />
      </div>
    </div>
  );
};

export default Card;
