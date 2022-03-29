BEGIN TRANSACTION;
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
        "T0001", 
        "Generic Unit", 
        "Unity",
        "",
        "NONE",
        0,
        0,
        0,
        "This is a <b>TOKEN</b> Card",
        00000000,
        "nandeck_dominion_unity_01.jpg",
        0
    );
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
        "U0001", 
        "Azros King of Thassalos", 
        "Unity",
        "HUMAN,ROYAL",
        "EARTH",
        2,
        5,
        0,
        "<b>Once Per Turn:</b><br/><strong>ACTION</strong><br>Select a HUMAN card <br>Apply + 1 ATK and SHIELD to it<br><br>This effect last until you select another card to apply this blessing <br><br><story>Drunk from power Azros declared war against all worlds</story>",
        11111111,
        "nandeck_dominion_unity_02.jpg",
        1
    );
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
        "U0002", 
        "Kingdom Guardian", 
        "Unity",
        "HUMAN,GUARDIAN",
        "EARTH",
        0,
        6,
        0,
        "<b>IF This cards is attacked from it ATK DIRECTION RANGE:</b><br>Reduced the battle DMG to 0",
        01110000,
        "nandeck_dominion_unity_03.jpg",
        0
    );
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
        "U0003", 
        "Soldier Bombardier", 
        "Unity",
        "HUMAN,SOLDIER",
        "FIRE",
        3,
        1,
        2,
        "<b>EXPLOSIVE</b><br>(when this card dies: apply it current ATK to DMG all cards linked to it)",
        00100010,
        "nandeck_dominion_unity_04.jpg",
        0
    );
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
        "U0004", 
        "Kingdom Duelist", 
        "Unity",
        "HUMAN",
        "EARTH",
        2,
        3,
        0,
        "<b>IF this card ATK a PAYBACK card<br>AND<br>their ATK is equal or higher than this card:</b><br>Ignore the PAYBACK DMG",
        10101010,
        "nandeck_dominion_unity_05.jpg",
        0
    );
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
        "U0005", 
        "Field Flag-bearer", 
        "Unity",
        "HUMAN,SOLDIER",
        "EARTH",
        1,
        5,
        0,
        "<b>IF a FIELD is placed on Board:</b><br>SPAWN this card on the top of the placed FIELD card",
        10101010,
        "nandeck_dominion_unity_06.jpg",
        0
    );
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
        "U0006", 
        "Army of Thassalos", 
        "Unity",
        "HUMAN,SOLDIER &#124 TEAM",
        "EARTH",
        0,
        10,
        0,
        "Cannot be Healed<br>This card ATK is equal to its health<br><br><b>END OF TURN:</b><br>Lose -1 Health<br>SPAWN linked to this card a SOLDIER (1/1) *EARTH*",
        00100000,
        "nandeck_dominion_unity_07.jpg",
        0
    );
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
        "U0007", 
        "Kingdom Spearman", 
        "Unity",
        "HUMAN,SOLDIER",
        "EARTH",
        2,
        2,
        1,
        "<b>DASH</b><br>(Can MOVE 2 tiles without changing direction, but it cannot ATK after it)<br><b>PIERCE</b><br>(Apply DMG to all cards in Range of the selected ATK DIRECTION)",
        00100000,
        "nandeck_dominion_unity_08.jpg",
        0
    );
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
        "U0008", 
        "Crossroads Thief", 
        "Unity",
        "HUMAN,THIEF",
        "EARTH",
        3,
        2,
        0,
        "<b>STEALTH</b><br>(This card can be SPAWN face-down. It require to be flipped face-up to ATK or activate it effect)<br><br><b>IF an enemy unity linked to this card MOVE:</b><br>STUN it for 1 TURN",
        01010101,
        "nandeck_dominion_unity_09.jpg",
        0
    );
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
        "U0009", 
        "Dragon of Thassalos", 
        "Unity",
        "DRAGON",
        "FIRE",
        3,
        7,
        0,
        "<b>SUPER SPAWN:</b><br>DMG all cards in this spawn row by 3 and apply BURN<br>(2 turns)<br><br><b>NORMAL SPAWN:<br></b>Apply the above effect.<br>This card can only be alive on board <b>IF</b> you:<br><br><b>TICK:</b><br>Destroy a HUMAN Unity from your Board or Hand.",
        01110000,
        "nandeck_dominion_unity_10.jpg",
        0
    );
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
        "U0010", 
        "Gem Prospector ", 
        "Unity",
        "HUMAN",
        "EARTH",
        1,
        5,
        0,
        "<b>SPAWN:</b><br>Draw 3 cards<br>And then Discard 2 cards from your hand",
        10101010,
        "nandeck_dominion_unity_11.jpg",
        0
    );
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
        "U0011", 
        "Nightmare Seer", 
        "Unity",
        "HUMAN",
        "VOID",
        2,
        3,
        0,
        "<b>IF this cards damage an enemy unity or LP:</b><br>Select a card from your enemy hand<br>they must reveal the selected card",
        10100010,
        "nandeck_dominion_unity_12.jpg",
        0
    );
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
        "U0012", 
        "Berserk Soldier", 
        "Unity",
        "HUMAN,SOLDIER",
        "EARTH",
        2,
        3,
        0,
        "<b>IF this card gets damaged</b><br>Get +2 ATK",
        01110111,
        "nandeck_dominion_unity_13.jpg",
        0
    );
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
        "U0013", 
        "War Mage", 
        "Unity",
        "HUMAN,MAGE",
        "EARTH",
        2,
        4,
        0,
        "<b>BATTLE:</b><br>Select any unity at it ATK DIRECTION RANGE at 2 Range MAX<br>Apply +2 ATK or -2 ATK to the selected unity for 1 turn<br>(You cannot perform a BATTLE action with this card if you choose this effect)",
        10101010,
        "nandeck_dominion_unity_14.jpg",
        0
    );
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
        "U0014", 
        "Armor Thief", 
        "Unity",
        "HUMAN,THIEF",
        "EARTH",
        3,
        1,
        0,
        "<b>IF this card have no artifacts attached to it:</b><br><b>ACTION</b><br>Select an attached artifact in the board<br>Attach the selected card to this unity instead",
        00010001,
        "nandeck_dominion_unity_15.jpg",
        0
    );
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
        "U0015", 
        "Sealed Exodus Guardian", 
        "Unity",
        "HUMAN,DIMENSIONAL",
        "VOID",
        0,
        0,
        0,
        "<b>IF you use the effect of ""Sealed Rune"" and discard this at cost:</b><br><b>SUPER SPAWN:</b><br>This card mimics the HP and the ATK of the target that triggered the ""Sealed Rune"" effect and Spawn at the artifact location<br><br><b>ONCE PER TURN:<br>ACTION:</b><br>Select a unity card<br>Swap it ATK and HP values for 1 turn",
        11111111,
        "nandeck_dominion_unity_16.jpg",
        0
    );
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
        "U0016", 
        "Artifact Collector", 
        "Unity",
        "HUMAN,MAGE",
        "EARTH",
        1,
        1,
        0,
        "<b>SPAWN:</b><br>Select an enemy artifact<br>Destroy it<br><br><b>IF the selected card is face-down:</b><br>Flip face-up and aplly the effect if it is an artifact, else this does nothing",
        00011100,
        "nandeck_dominion_unity_17.jpg",
        0
    );
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
      "A0001", 
      "Arrow Rain", 
      "Artifact",
      "SIEGE WEAPON",
      "INSTANT",
      "<b>ACTION:</b><br>Select a board tile<br>Toss a D6<br>Apply the number of the die as DMG to the unity in the selected tile<br>Apply this number -2 to all linked unities",
      "nandeck_dominion_artifact_01.jpg",
      0
  );
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
      "A0002", 
      "Balista", 
      "Artifact",
      "SIEGE WEAPON",
      "FOREVER",
      "Need to be SPAWN without attachments<br><b>CANNOT MOVE</b><b>IF a unity is attached to this card:<br>ACTION</b><br>Select a Horizontal Direction (left or right) Apply 3 DMG to nearest card<br>(Cooldown for 2 turns)",
      "nandeck_dominion_artifact_02.jpg",
      0
  );
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
      "A0003", 
      "Catapult", 
      "Artifact",
      "SIEGE WEAPON",
      "ONCE",
      "<b>ACTION:</b><br>Select a DIRECTION and Throw a D6:<br>Destroy any card at the range equal to number face-up -1<br>DMG all linked cards to the ATKed space with 3 DMG",
      "nandeck_dominion_artifact_03.jpg",
      0
  );
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
      "A0004", 
      "Giga Shovel", 
      "Artifact",
      "SHOVEL",
      "ONCE",
      "Select a FIELD card:<br>Destroy it.<br>Apply 2 DMG to any card occupying it",
      "nandeck_dominion_artifact_04.jpg",
      0
  );
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
      "A0005", 
      "Duel Invitation", 
      "Artifact",
      "DUEL",
      "INSTANT",
      "<b>ACTION:</b><br>Select one unity card from your hand and place face down.<br>Your opponent is gonna do the same.<br>After both cards are face-down flip them face up and battle each other.<br>The surviving card is placed on top of this artifact.<br><br>If both cards survives place them back into they owner's hand.",
      "nandeck_dominion_artifact_05.jpg",
      0
  );
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
      "A0006", 
      "Burning Oil", 
      "Artifact",
      "SIEGE WEAPON",
      "TRAP",
      "<b>TRAP:</b><br>The ATKer of this card gets 3 DMG and BURN for 2 Turns",
      "nandeck_dominion_artifact_06.jpg",
      0
  );
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
      "A0007", 
      "Sealed Gate", 
      "Artifact",
      "GATE",
      "FOREVER",
      "<b>SPAWN:</b>Create a Wall Token in each vertical linked space of this card.<br>Unity cards cannot MOVE to the tiles where this card or the Wall Tokens occupy.<br><br>This card is treated a 0/10 card<br>AND cannot MOVE, BATTLE and gain any status or be healed<br>This card cannot SPAWN if it linked vertical tiles are not empty for the Wall Tokens<br><br><b>IF this card life reaches zero:</b><br>Destroy it and the Wall Tokens linked to it.",
      "nandeck_dominion_artifact_07.jpg",
      0
  );
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
      "A0008", 
      "Sealed Rune", 
      "Artifact",
      "RUNE",
      "TRAP",
      "<b>TRAP:</b><br>Discard a card in hand with the same ATK or same HP as the ATKer<br>IF the ATK is equal: The ATK card becomes 0<br>IF the HP is equal: The Card is destroyed",
      "nandeck_dominion_artifact_08.jpg",
      0
  );
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
      "A0009", 
      "Divine Shield of Barbaros", 
      "Artifact",
      "SHIELD,DIVINE",
      "ATTACH",
      "<b>ACTION:<br>ATTACH TO UNITY:</b><br>Enemy unities can only declare a ATK against this unity until next TICK.<br><br><b>TICK:<br>IF this unity survives:</b><br>Destroy this card and apply SHIELD to the unity",
      "nandeck_dominion_artifact_09.jpg",
      0
  );
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
      "A0010", 
      "Chalice of Uncontrollable Power", 
      "Artifact",
      "CHALICE",
      "INSTANT",
      "Select an Unity:<br>Add any number to it ATK<br>But the unity loses the same applied number to it HP",
      "nandeck_dominion_artifact_10.jpg",
      0
  );
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
      "A0011", 
      "Book of Forbidden Spells", 
      "Artifact",
      "BOOK,SPELL",
      "ONCE",
      "<b>ACTION:</b><br>Select an ally MAGE card and destroy it.<br>Apply it ATK value as DMG to all cards in a selected AREA<br>(One selected tile and all linked tiles to it)",
      "nandeck_dominion_artifact_11.jpg",
      0
  );
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
      "A0012", 
      """Peace"" Sign", 
      "Artifact",
      "SIGN",
      "FOREVER",
      "<b>IF this card is ACTIVE:</b><br>Unities cannot BATTLE against any other Unities.<br><br>This card cannot be protected of any BATTLE or Destruction Effect",
      "nandeck_dominion_artifact_12.jpg",
      0
  );
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
      "A0013", 
      "White Flag of Surrender", 
      "Artifact",
      "FLAG",
      "ATTACH",
      "<b>ATTACH TO UNITY:</b><br>The unity cannot BATTLE or be targeted in a BATTLE by any other unity as long this card is attached to it",
      "nandeck_dominion_artifact_13.jpg",
      0
  );
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
      "A0014", 
      "Divine Sword of the Chosen", 
      "Artifact",
      "SWORD,DIVINE",
      "ATTACH",
      "<b>ATTACH TO UNITY:</b><br>This unity becomes a DIVINE card.<br>The unity gains +1 ATK instantly and +1 ATK for each unity that this card destroy.<br><br><b>IF the atached unity is destroyed:</b><br>Put this card back at your hand",
      "nandeck_dominion_artifact_14.jpg",
      1
  );
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
      "A0015", 
      "Mark of War", 
      "Artifact",
      "MARK",
      "ONCE PER TURN",
      "<b>BATTLE:</b><br>Select a unity.<br> Give +2 ATK until the end of this BATTLE phase",
      "nandeck_dominion_artifact_15.jpg",
      0
  );
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
      "F0001", 
      "Royal Palace", 
      "Field",
      "ROYAL,CASTLE",
      "<b>OCCUPY EFFECT:</b><br>Apply +2/+2 to all cards of the same element of the ROYAL card that hold this position<br><br><b>LINK EFFECT:</b><br>Apply +2/+2 to all ROYALs or the OCCUPY effect<br>(both effects cannot stack)",
      "nandeck_dominion_field_1.jpg",
      0
  );
COMMIT;