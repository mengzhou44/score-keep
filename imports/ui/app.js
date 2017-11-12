import React, { Component } from 'react';

import TitleBar from './title-bar';
import PlayerList from './player-list';
import AddPlayer from './add-player';

export default class App extends Component {
  render() {
    return (
      <div>
        <TitleBar title="Score Keep" />
        <PlayerList players={this.props.players} />
        <AddPlayer />
      </div>
    );
  }
}
