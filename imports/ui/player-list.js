import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Players from '../api/players';

export default class PlayerList extends Component {
  renderPlayer(player) {
    return (
      <div key={player._id} className="item">
        <p>
          {player.name} has {player.score} point(s).{' '}
        </p>
        <button
          className="button button--round"
          onClick={() => Players.update({ _id: player._id }, { $inc: { score: 1 } })}
        >
          +
        </button>
        <button
          className="button button--round"
          onClick={() => Players.update({ _id: player._id }, { $inc: { score: -1 } })}
        >
          -
        </button>
        <button
          className="button button--round"
          onClick={() => Players.remove({ _id: player._id })}
        >
          {' '}
          X{' '}
        </button>
      </div>
    );
  }
  render() {
    if (this.props.players.length === 0) {
      return (
        <div className="wrapper">
          <p className="item item__message item__message-empty">No Players </p>
        </div>
      );
    }
    return <div className="wrapper">{this.props.players.map(this.renderPlayer)}</div>;
  }
}
