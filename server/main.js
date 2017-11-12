import { Meteor } from 'meteor/meteor';

import Players from '../imports/api/players';

console.log('Log from /server/main.js');

Meteor.publish('players', function() {
  return Players.find(
    {},
    {
      fields: { secretInfo: 0 }
    }
  );
});

Meteor.startup(() => {
  class Person {
    constructor(name) {
      this.name = name;
    }

    getGreeting() {
      return `hi, ${this.name}`;
    }
  }

  class Employee extends Person {
    constructor(name, title) {
      super(name);
      this.title = title;
    }
  }

  const me = new Employee('daniel', 'frontend developer');
  console.log(me.getGreeting());
});
