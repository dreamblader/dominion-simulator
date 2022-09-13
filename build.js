const { exec } = require("child_process");

const build = "npm run react-build";
const convert = "npm run converter";
const runDB = "npm run start-db";
const runServer = "npm run server";

const generatePassCode = (size, prefix) => {
  let result = prefix;
  const symbols =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  for (let i = 0; i < size; i++) {
    let rndIndex = Math.floor(Math.random() * symbols.length);
    result += symbols.charAt(rndIndex);
  }

  return result;
};

const consoleCallback = (name, error, stdout, stderr, onSucces = () => {}) => {
  if (error) {
    console.error(`[${name}] - error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`[${name}] - stderr: ${stderr}`);
    return;
  }

  onSucces();
  console.log(`[${name}] - stdout:\n${stdout}`);
};

const run = () => {
  process.env["REACT_APP_ACCESS_PASS"] = generatePassCode(8, "#");

  console.log("Setting Alpha Lock: " + process.env.REACT_APP_ACCESS_PASS);

  console.log("Executing React Build.");
  exec(build, (error, stdout, stderr) =>
    consoleCallback("REACT-BUILD", error, stdout, stderr, () => {})
  );

  console.log("Executing CSV Converter.");
  exec(convert, (error, stdout, stderr) =>
    consoleCallback("CSV-CONVERTER", error, stdout, stderr, () => {
      console.log("Executing Database Starter.");
      exec(runDB, (error, stdout, stderr) =>
        consoleCallback("DB-START", error, stdout, stderr)
      );
    })
  );

  console.log("Executing Server Start.");
  exec(runServer, (error, stdout, stderr) =>
    consoleCallback("SERVER-START", error, stdout, stderr)
  );
};

run();
