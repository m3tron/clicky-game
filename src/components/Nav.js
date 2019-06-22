import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div className="ui text three item menu">
        <div className="item">Clicky Game</div>
        <div className="item">Guess</div>
        <div className="item">Score: {this.props.score}</div>
      </div>
    );
  }
}

export default Nav;
