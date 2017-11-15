import React, { Component } from 'react';
import Players from '../api/players';

export default class AddPlayer extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const playerName = e.target.playerName.value;
    if (playerName) {
      e.target.playerName.value = '';
      Players.insert({
        name: playerName,
        score: 0
      });
    }
  }
  render() {
    return (
      <div className="wrapper">
        <div className="item">
          <form onSubmit={this.handleSubmit} className="form">
            <input
              className="form__input"
              name="playerName"
              type="text"
              placeholder="Enter Player Name"
            />
            <button className="button"> Add Player</button>
          </form>
        </div>
      </div>
    );
  }
}
