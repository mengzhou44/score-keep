import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
import Players from '../api/players';

export default class PlayerList extends Component {
  renderPlayer(player) {
    return (
      <div key={player._id} className="item">
        <div className="player">
          <div>
            <h3 className="player__name"> {player.name} </h3>
            <p className="player__stats">{player.score} point(s).</p>
          </div>
          <div className="player__actions">
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
        </div>
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
    return (
      <div className="wrapper">
        <FlipMove maintainContainerHeight>{this.props.players.map(this.renderPlayer)}</FlipMove>
      </div>
    );
  }
}
