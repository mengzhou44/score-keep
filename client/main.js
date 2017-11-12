import React from 'react';
import ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import Players from '../imports/api/players';

import App from '../imports/ui/app';

console.log('Log from /client/main.js');

Meteor.subscribe('players');

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find(
      {},
      {
        sort: {
          score: -1
        }
      }
    ).fetch();

    ReactDom.render(<App players={players} />, document.getElementById('app'));
  });
});
