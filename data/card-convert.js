const K = require("./consts");
const queries = require("./queries");
const csv = require("csv-parser");
const fs = require("fs");

const saveFile = K.Strings.SAVE_FILE;

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
  data.TAG = data.TAG.replace(/ &#124 /g, ",");
  data.STAR = data.STAR ? "1" : "0";
  switch (type) {
    case K.Types.UNITY:
      data.ATK = checkNumber(data.ATK);
      data.HP = checkNumber(data.HP);
      data.RANGE = checkNumber(data.RANGE);
      data.DIRECTIONS = getDirectionsCode(data);
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

  data.NAME = escapeSpecialChars(data.NAME);
  data.EFFECT = escapeSpecialChars(data.EFFECT);

  return data;
};

const saveData = (table, type) => {
  const artPath = K.Strings.IMG_FILE + type + "_";
  const paddingSize = table.length.toString().length;

  let file = fs.openSync(saveFile, "a");

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

  finishFile(file, type);
};

let savedCount = 0;

const finishFile = (file, type) => {
  let finishCount = Object.keys(K.Types).length;

  savedCount++;

  console.log("Finished " + type + " Saving...");
  console.log("File Complete " + savedCount + "/" + finishCount);

  if (savedCount >= finishCount) {
    fs.appendFileSync(file, K.Strings.TRANSACTION_END);
    console.log("END...");
  }
};

const escapeSpecialChars = (text) => {
  return text.replace(/"/g, '""');
};

const checkNumber = (num) => {
  return num === "" || isNaN(num) ? 0 : num;
};

const paddingNumber = (num, size) => {
  let result = num.toString();
  while (result.length < size) {
    result = "0" + result;
  }
  return result;
};

//TODO inserting bits wrong
const getDirectionsCode = (data) => {
  let code = "";
  for (let direction in K.Directions) {
    code += data[direction] === "X" ? "1" : "0";
  }
  return code;
};

const run = () => {
  console.log("Starting converter...");

  let file = fs.openSync(saveFile, "w+");
  fs.writeFileSync(file, K.Strings.TRANSACTION_INIT);

  for (let type in K.Types) {
    console.log("Starting " + type + " Reader");
    readCSV(type.toLowerCase());
  }
};

run();
