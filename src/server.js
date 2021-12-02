const { getMyDeckCards } = require("./actions/database");

const { Server, Origins } = require("boardgame.io/server");
const { Simulator } = require("./Game");

/*
const lobbyConfig = {
  apiPort: 8080,
  apiCallback: () => console.log("Running Lobby API on port 8080..."),
};
*/
const sqlite3 = require("sqlite3").verbose();

const database = new sqlite3.Database("./data/game.db", (err) => {
  if (err) {
    console.log("Could not connect to database", err);
  } else {
    console.log("Connected to database");
  }
});

const server = Server({
  games: [Simulator],
  origins: [Origins.LOCALHOST],
});

server.router.get("/deck/:id", (ctx, next) => {
  console.log(getMyDeckCards(database, ctx.params.id));
  //ctx.body = getMyDeckCards(database, ctx.params.id);
});

server.run(8000);
//server.run({ port: 8000, lobbyConfig });
