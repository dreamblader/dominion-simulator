//TODO default doc code -- change this
const { Server, Origins } = require('boardgame.io/server');
const { Simulator } = require('./Game');

const server = Server({
  games: [Simulator],
  origins: [Origins.LOCALHOST],
});

server.run(8000);