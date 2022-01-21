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
      console.log("Finished " + type + " Reading...");
      saveData(table, type);
    });
};

const convertData = (data, type) => {
  data.TAG = data.TAG.replace(" &#124 ", ",");
  data.STAR = data.STAR ? "1" : "0";
  switch (type) {
    case K.Types.UNITY:
      data.DIRECTIONS = getDirectionsCode(data);
      data.RANGE = data.RANGE ? 0 : data.RANGE;
      break;
    case K.Types.FIELD:
      data.EFFECT = `<b>${K.Strings.FIELD_OC_EFFECT}:</b><br>${
        data[K.Strings.FIELD_OC_EFFECT]
      }<br><br><b>${K.Strings.FIELD_LK_EFFECT}:</b><br>${
        data[K.Strings.FIELD_LK_EFFECT]
      }`;
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

  var file = fs.openSync(saveFile, "a+");

  table.forEach((row, index) => {
    let i = index + 1;
    console.log("Saving " + type + " " + i + "/" + table.length);
    row.ART = artPath + paddingNumber(i, paddingSize) + ".jpg";
    let query = "";
    switch (type) {
      case K.Types.UNITY:
        query = queries.UnityQuery(row);
        break;
      case K.Types.ARTIFACT:
        query = queries.ArtifactQuery(row);
        break;
      case K.Types.FIELD:
        query = queries.FieldQuery(row);
        break;
      default:
        break;
    }
    fs.appendFileSync(file, query);
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
  console.log("Starting converter...");
  for (let type in K.Types) {
    console.log("Starting " + type + " Reader");
    readCSV(type.toLowerCase());
  }
};

run();
