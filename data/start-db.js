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
    database.run(data, (result, error) => {
      console.log(`RUNNING QUERY FILE (${fileName})`);
      if (error) {
        console.log(`ERROR: `, error);
      } else {
        console.log("SUCCESS");
      }
      finishRun();
    });
  });
};

let savedCount = 0;

const finishRun = () => {
  let finishCount = K.SqlFiles.length;

  savedCount++;

  console.log("Files Read " + savedCount + "/" + finishCount);

  if (savedCount >= finishCount) {
    database.close((error) => {
      if (error) {
        console.log("Database Closing Error :", error.message);
      }
      console.log("END...");
    });
  }
};

//TODO Test
const run = () => {
  K.SqlFiles.forEach((file) => {
    applyData(file, fs.readFileSync(`data/sql/${file}`).toString());
  });
};

run();
