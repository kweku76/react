import React, { Component } from "react";

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };
    this.genRandom = this.genRandom.bind(this); //IMPORTANT TO ALWAYS BIND!
  }
  genRandom() {
    // pick random number between 1 -10 <and className=""></and>
    let rand = Math.floor(Math.random() * 10) + 1;
    // update state with new random number
    this.setState({ num: rand });
  }
  render() {
    // IF the random number = 7 then show the message 'you win' and hide the button.
    return (
      <div className="App">
        <h1>Number is: {this.state.num}</h1>
        {this.state.num === 7 ? (
          <h2>YOU WIN!!!</h2>
        ) : (
          <button onClick={this.genRandom}>Random Number</button>
        )}
        <p>
          Simple react app component that generates random number between 1-10.{" "}
          <br /> If the random number is 7 then you win the game.
        </p>
      </div>
    );
  }
}

export default Clicker;
