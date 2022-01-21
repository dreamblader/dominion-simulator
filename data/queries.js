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
    );
    `;
};

const ArtifactQuery = (artifact) => {
  return `INSERT OR REPLACE INTO "Cards" (
    "ID", 
    "NAME", 
    "TYPE", 
    "TAGS", 
    "SUBTYPE",
    "DESCRIPTION", 
    "ART", 
    "UNIQUE"
  )
  VALUES (
      "${artifact.NUM}", 
      "${artifact.NAME}", 
      "Artifact",
      "${artifact.TAG}",
      "${artifact.Activation}",
      "${artifact.EFFECT}",
      "${artifact.ART}",
      ${artifact.STAR}
  );
  `;
};

const FieldQuery = (field) => {
  return `INSERT OR REPLACE INTO "Cards" (
    "ID", 
    "NAME", 
    "TYPE", 
    "TAGS",
    "DESCRIPTION", 
    "ART", 
    "UNIQUE"
  )
  VALUES (
      "${field.NUM}", 
      "${field.NAME}", 
      "Field",
      "${field.TAG}",
      "${field.EFFECT}",
      "${field.ART}",
      ${field.STAR}
  );`;
};

module.exports = {
  UnityQuery,
  ArtifactQuery,
  FieldQuery,
};
