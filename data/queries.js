const UnityQuery = (unity) => {
  return `INSERT OR REPLACE INTO "Cards" (
        "ID", 
        "NAME", 
        "TYPE", 
        "TAGS", 
        "SUBTYPE", 
        "ATK", 
        "HP", 
        "RANGE", 
        "DESCRIPTION", 
        "DIRECTION_RANGE", 
        "ART", 
        "UNIQUE"
    )
    VALUES (
        "${unity.NUM}", 
        "${unity.NAME}", 
        "Unity",
        "${unity.TAG}",
        "${unity.ELEMENT}",
        ${unity.ATK},
        ${unity.HP},
        ${unity.RANGE},
        "${unity.EFFECT}",
        ${unity.DIRECTIONS},
        "${unity.ART}",
        ${unity.STAR}
    );`;
};

module.exports = {
  UnityQuery,
};
