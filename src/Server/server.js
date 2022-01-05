import { getMyDeckCards } from "../actions/database";
import { Server, Origins } from "boardgame.io/server";

//import * as fs from "fs";
import Simulator from "../Game";

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
  apiOrigins: [Origins.LOCALHOST],
  /*
  https: {
    cert: "",
    key: "",
    //key: fs.readFileSync(""),
  },
  */
});

server.router.get("/deck/:id/cards", async (ctx, next) => {
  console.log("getDeck");
  console.log(ctx.params.id);
  ctx.body = await getMyDeckCards(database, ctx.params.id);
});

server.run(8000);
//server.run({ port: 8000, lobbyConfig });
