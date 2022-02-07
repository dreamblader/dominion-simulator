const { exec } = require("child_process");

const build = "npm run react-build";
const runServer = "npm run server";

const consoleCallback = (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout:\n${stdout}`);
};

const run = () => {
  console.log("Executing React Build.");
  exec(build, (error, stdout, stderr) =>
    consoleCallback(error, stdout, stderr)
  );
  console.log("Finishing React Build.");

  console.log("Executing Server Start.");
  exec(runServer, (error, stdout, stderr) =>
    consoleCallback(error, stdout, stderr)
  );
};

run();
