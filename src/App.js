import React, { Component } from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import geekPics from "./geek.json";

class App extends Component {
  state = {
    geekPics,
    score: 0,
    clicked: []
  };

  handleClick = event => {
    console.log("clicked " + this.props.id);
  };

  render() {
    return (
      <div className="ui container">
        <Nav score={this.state.score} />
        <div className="ui four cards">
          {this.state.geekPics.map(geekPic => (
            <Card
              handleClick={this.handleClick}
              id={geekPic.id}
              key={geekPic.id}
              image={geekPic.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
