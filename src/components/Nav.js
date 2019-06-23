import React, { Component } from "react";
import "./css/nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="ui text three item menu">
        <div className="item">Clicky Game</div>
        <div className="item">{this.props.msg}</div>
        <div className="item">
          Score: {this.props.score} | Hi-Score: {this.props.hiScore}
        </div>
      </div>
    );
  }
}

export default Nav;
