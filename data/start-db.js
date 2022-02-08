const K = require("./consts");
const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();

const database = new sqlite3.Database("./data/game.db", (err) => {
  if (err) {
    console.log("Could not connect to database", err);
  } else {
    console.log("Connected to database");
  }
});

const applyData = (fileName, data) => {
  database.serialize(() => {
    console.log(`RUNNING QUERY FILE (${fileName})`);
    data.split(";").forEach((query, index) => {
      runQuery(query + ";", index);
    });
  });
};

const runQuery = (query, index) => {
  database.run(query, (result, error) => {
    if (error) {
      console.log(`ERROR @${index}(${query}): `, error);
    }
  });
};

const finishRun = () => {
  database.close((error) => {
    if (error) {
      console.log("Database Closing Error :", error.message);
    }
    console.log("END...");
  });
};

const run = () => {
  K.SqlFiles.forEach((file) => {
    applyData(file, fs.readFileSync(`data/sql/${file}`).toString());
  });
  finishRun();
};

run();
