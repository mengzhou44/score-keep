import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Players from '../api/players';

export default class PlayerList extends Component {
  renderPlayer(player) {
    return (
      <div key={player._id} className="player">
        {player.name} has {player.score} points.
        <button onClick={() => Players.update({ _id: player._id }, { $inc: { score: 1 } })}>
          +
        </button>
        <button onClick={() => Players.update({ _id: player._id }, { $inc: { score: -1 } })}>
          -
        </button>
        <button onClick={() => Players.remove({ _id: player._id })}> X </button>
      </div>
    );
  }
  render() {
    if (this.props.players.length === 0) {
      return <p>No Players </p>;
    }
    return <div>{this.props.players.map(this.renderPlayer)}</div>;
  }
}
