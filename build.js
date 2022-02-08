const { exec } = require("child_process");

const build = "npm run react-build";
const convert = "npm run converter";
const runDB = "npm run start-db";
const runServer = "npm run server";

const consoleCallback = (error, stdout, stderr, onSucces = () => {}) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  onSucces();
  console.log(`stdout:\n${stdout}`);
};

const run = () => {
  console.log("Executing React Build.");
  exec(build, (error, stdout, stderr) =>
    consoleCallback(error, stdout, stderr, () => {})
  );

  console.log("Executing CSV Converter.");
  exec(convert, (error, stdout, stderr) =>
    consoleCallback(error, stdout, stderr, () => {
      console.log("Executing Database Starter.");
      exec(runDB, (error, stdout, stderr) =>
        consoleCallback(error, stdout, stderr)
      );
    })
  );

  console.log("Executing Server Start.");
  exec(runServer, (error, stdout, stderr) =>
    consoleCallback(error, stdout, stderr)
  );
};

run();
