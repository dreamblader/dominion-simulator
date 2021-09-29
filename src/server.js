const { Server, Origins } = require("boardgame.io/server");
const { Simulator } = require("./Game");

const lobbyConfig = {
  apiPort: 8080,
  apiCallback: () => console.log("Running Lobby API on port 8080..."),
};

const server = Server({
  games: [Simulator],
  origins: [Origins.LOCALHOST],
});

server.run(8000);
//server.run({ port: 8000, lobbyConfig });
