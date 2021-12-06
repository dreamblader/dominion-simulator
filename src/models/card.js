const Card = (id, playerID) => {
  let obj = {
    id: id,
    title: "none",
    type: "none",
    art: "",
    atk: 0,
    hp: 0,
    range: 0,
    atk_mod: 0,
    hp_mod: 0,
    range_mod: 0,
    element: "none",
    unique: false,
    description: "none",
    direction: [],
    tags: [],
    status: [],
    controller: playerID,
    inversed: false,
    flipped: false,
  };

  return obj;
};

export const mapToCard = (rawData, id) => {
  let result = [];
  let card = Card(rawData.ID, id);
  Object.assign(card, {
    title: rawData.NAME,
    type: rawData.TYPE,
    art: rawData.ART,
    atk: rawData.ATK,
    hp: rawData.HP,
    range: rawData.RANGE,
    element: rawData.ELEMENT,
    unique: Boolean(rawData.UNIQUE),
    description: rawData.DESCRIPTION,
    direction: getDirection(rawData.DIRECTION_RANGE),
    tags: rawData.TAGS.split(","),
  });

  for (let i = 1; i <= rawData.CARD_QUANTITY; i++) {
    result.push(card);
  }

  return result;
};

const getDirection = (code) => {
  let result = [];
  let bits = code.toString().split("");
  bits.forEach((bit, index) => {
    if (bit === "1") {
      switch (index) {
        case 0:
          result.push("N");
          return;
        case 1:
          result.push("NE");
          return;
        case 2:
          result.push("E");
          return;
        case 3:
          result.push("SE");
          return;
        case 4:
          result.push("S");
          return;
        case 5:
          result.push("SW");
          return;
        case 6:
          result.push("W");
          return;
        case 7:
          result.push("NW");
          return;
        default:
          return;
      }
    }
  });
  return result;
};

export default Card;
