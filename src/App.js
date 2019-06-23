import React, { Component } from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import geekPics from "./geek.json";

class App extends Component {
  state = {
    geekPics,
    score: 0,
    clickedCard: []
  };

  randomize = () => {
    console.log(Math.random());
    return 0.5 - Math.random();
  };

  handleClick = event => {
    const currentCard = event.target.alt;
    const cardAlreadyClicked = this.state.clickedCard.indexOf(currentCard) > -1;
    console.log(cardAlreadyClicked);

    if (cardAlreadyClicked) {
      this.setState({
        geekPics: this.state.geekPics.sort(this.randomize),
        clickedCard: [],
        score: 0
      });
      alert("lost");
    } else {
      this.setState(
        {
          geekPics: this.state.geekPics.sort(this.randomize),
          clickedCard: this.state.clickedCard.concat(currentCard),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 12) {
            alert("win");
            this.setState({
              geekPics: this.state.geekPics.sort(this.randomize),
              clickedCard: [],
              score: 0
            });
          }
        }
      );
    }
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
