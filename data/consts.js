const Types = {
  UNITY: "unity",
  ARTIFACT: "artifact",
  FIELD: "field",
};

const Directions = {
  North: "North",
  "North-Right": "North-Right",
  Right: "Right",
  "South-Right": "South-Right",
  South: "South",
  "South-Left": "South-Left",
  Left: "Left",
  "North-Left": "North-Left",
};

const Strings = {
  FILE: "data/csv/Nandeck_db - ",
  IMG_FILE: "nandeck_dominion_",
  SAVE_FILE: "data/sql/Card_Update_",
  TRANSACTION_INIT: "BEGIN TRANSACTION;\n",
  TRANSACTION_END: "\nCOMMIT;",
  FIELD_OC_EFFECT: "OCCUPY EFFECT",
  FIELD_LK_EFFECT: "LINK EFFECT",
};

module.exports = {
  Types,
  Directions,
  Strings,
};
