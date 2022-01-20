--ADD 5 UNITIES
INSERT OR REPLACE INTO "Cards" (
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
    "U001", 
    "Azros King of Thassalos", 
    "Unity",
    "HUMAN,ROYAL",
    "EARTH",
    2,
    5,
    0,
    "<b>Once Per Turn:</b><br/><strong>ACTION</strong><br>Select a HUMAN card <br>Apply + 1 ATK and SHIELD to it<br><br>This effect last until you select another card to apply this blessing <br><br><story>Drunk from power Azros declared war against all worlds</story>",
    11111111,
    "nandeck_dominion_unity_01.jpg",
    1
);
--ADD 4 ARTIFACTS
INSERT OR REPLACE INTO "Cards" (
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
    "A001", 
    "Arrow Rain", 
    "Artifact",
    "SIEGE WEAPON",
    "INSTANT",
    "<br><b>ACTION:</b><br>Select a board tile<br>Toss a D6<br>Apply the number of the die as DMG to the unity in the selected tile<br>Apply this number -2 to all linked unities",
    "nandeck_dominion_artifact_01.jpg",
    0
);
--ADD 1 FIELD
INSERT OR REPLACE INTO "Cards" (
    "ID", 
    "NAME", 
    "TYPE", 
    "TAGS",
    "DESCRIPTION", 
    "ART", 
    "UNIQUE"
)
VALUES (
    "F001", 
    "Royal Palace", 
    "Field",
    "ROYAL,CASTLE",
    "<b>OCCUPY EFFECT:</b><br>Apply +2/+2 to all cards of the same element of the ROYAL card that hold this position<br><br><b>LINK EFFECT:</b><br>Apply +2/+2 to all ROYALs or the OCCUPY effect<br>(both effects cannot stack)",
    "nandeck_dominion_field_01.jpg",
    0
);