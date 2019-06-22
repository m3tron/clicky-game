import React from "react";

const Card = props => {
  return (
    <div className="ui link card" onClick={props.handleClick}>
      <div className="image">
        <img alt={props.id} src={require("../geekPics/" + props.image)} />
      </div>
    </div>
  );
};

export default Card;
