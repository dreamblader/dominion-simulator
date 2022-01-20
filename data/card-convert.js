const K = require("./consts");
const queries = require("./queries");
const csv = require("csv-parser");
const fs = require("fs");

const readCSV = (type) => {
  const table = [];
  const file = K.Strings.FILE + type + ".csv";

  fs.createReadStream(file)
    .pipe(csv())
    .on("data", (data) => {
      table.push(convertData(data, type));
    })
    .on("end", () => {
      saveData(table, type);
    });
};

const convertData = (data, type) => {
  data.TAG = data.TAG.replace(" &#124 ", ",");
  switch (type) {
    case K.Types.UNITY:
      data.DIRECTIONS = getDirectionsCode(data);
      data.RANGE = data.RANGE === "" ? 0 : data.RANGE;
      data.STAR = data.STAR === "S" ? "1" : "0";
      break;
    default:
      break;
  }

  return data;
};

const saveData = (table, type) => {
  const now = new Date();
  const artPath = K.Strings.IMG_FILE + type + "_";
  const paddingSize = table.length.toString().length;
  const saveFile =
    K.Strings.SAVE_FILE +
    now.getFullYear() +
    "_" +
    (now.getMonth() + 1) +
    "_" +
    now.getDate() +
    ".sql";

  var stream = fs.createWriteStream(saveFile);
  stream.on("open", (fd) => {
    table.forEach((row, index) => {
      row.ART = artPath + paddingNumber(index + 1, paddingSize) + ".jpg";
      switch (type) {
        case K.Types.UNITY:
          stream.write(queries.UnityQuery(row));
          break;
        default:
          break;
      }
    });
  });
};

const paddingNumber = (num, size) => {
  let result = num.toString();
  while (result.length < size) {
    result = "0" + result;
  }
  return result;
};

const getDirectionsCode = (data) => {
  let code = "";
  for (let direction in K.Directions) {
    code += data[direction] === "X" ? "1" : "0";
  }
  return code;
};

const run = () => {
  for (let type in K.Types) {
    readCSV(type.toLowerCase());
  }
};

run();
