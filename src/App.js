import React, { Component } from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import geekPics from "./geek.json";

class App extends Component {
  //set original state
  state = {
    geekPics,
    score: 0,
    hiScore: 0,
    clickedCard: [],
    msg: "Click a card to begin"
  };

  //to randomize pictures
  randomize = () => {
    console.log(Math.random());
    return 0.5 - Math.random();
  };

  //handle onClick event
  handleClick = event => {
    const currentCard = event.target.alt;
    //if current card present
    const cardAlreadyClicked = this.state.clickedCard.indexOf(currentCard) > -1;

    //if card present reset state and randomize pictures
    if (cardAlreadyClicked) {
      this.setState({
        geekPics: this.state.geekPics.sort(this.randomize),
        clickedCard: [],
        score: 0,
        msg: "You Lose! Try again."
      });
    }
    //otherwise randomize picture and add 1 to score
    else {
      this.setState(
        {
          geekPics: this.state.geekPics.sort(this.randomize),
          clickedCard: this.state.clickedCard.concat(currentCard),
          score: this.state.score + 1,
          msg: "Good Guess"
        },
        //if current score if higher than hiscore set new hiscore
        () => {
          if (this.state.score > this.state.hiScore) {
            this.setState({
              hiScore: this.state.score
            });
          }
        },
        //if correctly guessed all reset state and randomize pictures
        () => {
          if (this.state.score === 12) {
            this.setState({
              geekPics: this.state.geekPics.sort(this.randomize),
              clickedCard: [],
              score: 0,
              msg: "You Beat the Game!!!"
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div className="ui container">
        <Nav
          msg={this.state.msg}
          score={this.state.score}
          hiScore={this.state.hiScore}
        />
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
