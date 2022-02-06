import { getMyDeckCards } from "./actions/database";
import { Server, Origins } from "boardgame.io/server";
import path from "path";
import serve from "koa-static";
import { Simulator } from "../Game";

const PORT = process.env.PORT || 8000;
const frontEndAppBuildPath = path.resolve(__dirname, "../../build");

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
  ctx.body = await getMyDeckCards(database, ctx.params.id);
});

server.app.use(serve(frontEndAppBuildPath));

server.run(PORT, () => {
  server.app.use(
    async (ctx, next) =>
      await serve(frontEndAppBuildPath)(
        Object.assign(ctx, { path: "index.html" }),
        next
      )
  );
});

//server.run({ port: 8000, lobbyConfig });
