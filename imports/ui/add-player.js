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
        <form onSubmit={this.handleSubmit} className="item">
          <input name="playerName" type="text" placeholder="Enter Player Name" />
          <button className="button"> Add Player</button>
        </form>
      </div>
    );
  }
}
