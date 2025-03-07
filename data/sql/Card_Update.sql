BEGIN TRANSACTION;
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
      "<b>ACTION:</b><br>Select a field tile<br>Toss a D6<br>Apply the number of the die as DMG to the card at the selected tile<br>Apply this number -3 to all other enemy cards on the same lane",
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
      "<b>IF a UNIT is on top of this card:<br>ACTION</b><br>Apply 3 DMG to enemy card at meelee range<br>(Cooldown 2 TICKS)",
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
      "<b>ACTION:</b><br>Throw 2 COINS:<br>Destroy any enemy card on the same lane of this card at the battle range equal to number of  HEADS +1<br>SELECT a card next to the destroyed card<br>Apply 3 DMG to it",
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
      "Select a DOMAIN card:<br>Destroy it.<br>Apply 2 DMG to any card occupying it",
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
      "<b>ACTION:</b><br>Both players DRAW 2 cards<br>Select one UNIT card from the drawn cards and place it face down.<br>Your opponent is gonna do the same.<br>After that flip both cards face up and BATTLE each other.<br>The surviving card can be SPAWN at the owner's field.<br><br>IF a player have not setted a card face-down the only card face-down is declared the surviving card<br>IF both cards survives place them back into their owner's hand.<br>After the end of this effect both players needs to shuffle the remaining drawn cards from their hand back to the deck. ",
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
      "<b>TRAP:</b><br><b>TRAP:</b><br>The ATKer of this card gets 3 DMG and BURN (2 TICKS)",
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
      "<b>SPAWN:</b><br>Create a Wall Token 0/10 with BLOCK at all lanes at the same row of this card.<br>This card is treated as a 0/5 card with BLOCK<br>AND CANNOT MOVE, BATTLE and gain any status or be healed<br>This card CANNOT SPAWN if there is one or more cards occupying a Wall Token SPAWN location<br><br><b>IF this card life reaches zero:</b><br>Destroy it and all the Wall Tokens spawned by it.",
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
      "<b>TRAP:</b><br>Discard a card in hand with the same ATK or same HP as the ATKer<br><b>IF the ATK is equal:</b><br>The card ATK value becomes 0<br><b>IF the HP is equal:</b><br>The Card is destroyed",
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
      "<b>ACTION:<br>ATTACH TO UNIT:</b><br>Enemy UNITS can only declare an ATK against this UNIT until your next TICK.<br><br><b>TICK:<br>IF this UNIT is on field:</b><br>Destroy this card and apply SHIELD to the UNIT",
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
      "Select any UNIT on field:<br>Add any number to it ATK value<br>But subtract the same amout to the selected UNIT HP value",
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
      "<b>ACTION:</b><br>Select any MAGE card from your field and destroy it.<br>Apply it ATK value as DMG to all cards on the same lane of this card on enemy's side",
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
      "<b>IF this card is ACTIVE:</b><br>UNITS cannot target other UNITS to BATTLE.<br>(Meelee cards will skip any UNIT and land on an actual target)<br><br>This card cannot be protected against any BATTLE or Destruction Effect<br>",
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
      "<b>ATTACH TO UNIT:</b><br>The UNIT cannot BATTLE or be targeted in a BATTLE by any other UNIT as long this card is attached to it",
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
      "<b>ATTACH TO UNIT:</b><br>This UNIT becomes a DIVINE card.<br>This UNIT gains +1 ATK instantly and +1 ATK for each other UNIT that this card destroys.<br><br><b>IF the attached UNIT is destroyed:</b><br>Put this card back at your hand",
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
      "<b>BATTLE:</b><br>Select any UNIT.<br> Give +2 ATK until the end of this BATTLE phase",
      "nandeck_dominion_artifact_15.jpg",
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
        "ART", 
        "UNIQUE"
    )
    VALUES (
        "U0001", 
        "Azros King of Thassalos", 
        "Unity",
        "HUMAN,ROYAL",
        "EARTH",
        1,
        5,
        0,
        "<b>Once Per Turn:</b><br/><b>ACTION</b><br>Select any HUMAN card on field (except himself) <br>Apply + 1 ATK and SHIELD to it<br><br>This effect last until you select another card to apply this blessing or this card is destroyed",
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
        "<b>BLOCK</b><br><b>SHIELD</b><br>(negate the first damage this card takes and remove the shield effect)<br><br><b>IF a movable UNIT next to this card is ATK:</b><br>Swap places and take the DMG instead",
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
        1,
        "<b>EXPLOSIVE</b><br>(when this card dies: apply it current ATK value as DMG to all cards at the same ROW)",
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
        "<b>COMBO (x2)</b><br>(Can BATTLE 2 times against the same target)<br><br><b>IF this card ATK a PAYBACK card<br>AND<br>their ATK is equal or higher than this card:</b><br>Ignore the PAYBACK DMG",
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
        "<b>IF a DOMAIN is SPAWN:</b><br>SPAWN this card on the same LANE<br>Any DOMAINS in the same LANE of this card have their effects negated until this card is destroyed",
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
        "ART", 
        "UNIQUE"
    )
    VALUES (
        "U0006", 
        "Army of Thassalos", 
        "Unity",
        "HUMAN,SOLDIER,TEAM",
        "EARTH",
        0,
        6,
        0,
        "Cannot be Healed<br>This card ATK is equal to its health<br><br><b>END OF TURN:</b><br>Lose -1 Health<br>SPAWN next to this card a SOLDIER (1/1) *EARTH*",
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
        "ART", 
        "UNIQUE"
    )
    VALUES (
        "U0007", 
        "Kingdom Spearman", 
        "Unity",
        "HUMAN,SOLDIER",
        "EARTH",
        3,
        2,
        1,
        "<b>DASH</b><br>(Can MOVE 2 spaces, but it cannot ATK after it)<br><b>PIERCE</b><br>(Apply any extra DMG to cards behind the battle target)",
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
        "ART", 
        "UNIQUE"
    )
    VALUES (
        "U0008", 
        "Crossroads Thief", 
        "Unity",
        "HUMAN,THIEF",
        "EARTH",
        1,
        2,
        0,
        "<b>STEALTH</b><br>(This card can be SPAWN face-down. It require to be flipped face-up to ATK or activate its effects)<br><br><b>MOVE:</b><br><b>REACTION</b><br>STUN the moving card for 1 Tick (The MOVE action can still be performed with another card)",
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
        "<b>SPAWN:</b><br>DMG all cards in this LANE by 1 and apply BURN<br>(2 Ticks)<br><br><b>TICK:</b><br>Destroy a HUMAN card from your field or hand.<br><b>ELSE:</b><br>Destroy this card<br><br><b>SUPER SPAWN:</b><br>Negate this card TICK effect",
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
        4,
        0,
        "<b>SPAWN:</b><br>Draw 3 cards<br>And then Discard 2 cards from your hand",
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
        "ART", 
        "UNIQUE"
    )
    VALUES (
        "U0011", 
        "Nightmare Seer", 
        "Unity",
        "HUMAN,MAGE,NIGHTMARE",
        "VOID",
        2,
        3,
        0,
        "<b>Once Per Turn:</b><br/><b>ACTION</b><br>Select a card from your enemy hand or face-down in field<br>They must reveal the selected card",
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
        "<b>IF this card gets damaged:</b><br>Get +2 ATK",
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
        "<b>BATTLE:</b><br>Select any UNIT in LANE<br>Apply +2 ATK or -2 ATK to the selected card until your next TICK<br>(You cannot perform a BATTLE action with this card if you choose this effect)",
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
        "<b>IF this card have no artifacts attached to it:</b><br><b>ACTION</b><br>Select an attached artifact in the field<br>Attach the selected card to this unity instead",
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
        "<b>IF you use the effect of any TRAP ARTIFACT and discard this as cost:</b><br><b>SUPER SPAWN:</b><br>This card mimics the HP and the ATK of the target that triggered the TRAP ARTIFACT effect and Spawn at it location<br><br><b>ONCE PER TURN:<br>ACTION:</b><br>Select a unity card<br>Swap it ATK and HP values for your next TICK",
        "nandeck_dominion_unity_16.jpg",
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
        "<b>SPAWN:</b><br>Select an enemy ARTIFACT<br>Destroy it<br><br><b>IF the selected card is face-down:</b><br>Flip face-up and aplly the effect if it is an ARTIFACT, else this does nothing",
        "nandeck_dominion_unity_17.jpg",
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
        "ART", 
        "UNIQUE"
    )
    VALUES (
        "U0017", 
        "Ryu The Twilight Archer", 
        "Unity",
        "ELF,TWILIGHT,RANGER",
        "EARTH",
        3,
        3,
        1,
        "<b>DASH</b><br>(Can MOVE 2 spaces, but it cannot ATK after it)<br><br><b>COMBO (x3)</b><br>(Can BATTLE 3 against the same target)<br><br>This card does -1 ATK for each enemy card in front of your BATTLE target",
        "nandeck_dominion_unity_18.jpg",
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
        "ART", 
        "UNIQUE"
    )
    VALUES (
        "U0018", 
        "Orian Echo of the Twilight", 
        "Unity",
        "ELF,TWILIGHT",
        "VOID",
        2,
        4,
        0,
        "<b>If a TWILIGHT card is destroyed in BATTLE</b><br>SPAWN this card from hand to the destroyed card LANE<br><b>SPAWN:</b><br>Negate all BATTLE ACTIONS from this card LANE until your next TICK",
        "nandeck_dominion_unity_19.jpg",
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
        "ART", 
        "UNIQUE"
    )
    VALUES (
        "U0019", 
        "Twilight Enraged Beast", 
        "Unity",
        "TWILIGHT,BEAST",
        "EARTH",
        1,
        3,
        0,
        "<b>IF a TWILIGHT card is destroyed:</b><br>Get +1 ATK",
        "nandeck_dominion_unity_20.jpg",
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
        "ART", 
        "UNIQUE"
    )
    VALUES (
        "U0022", 
        "Spirit of the Water", 
        "Unity",
        "SPIRIT,NATURE",
        "WATER",
        1,
        3,
        0,
        "<b>BATTLE:</b><br>You can TARGET your UNITS AND apply this card ATK value as healing<br><b>IF the targeted UNIT have an affliction:</b><br>Remove all afflictions instead of healing",
        "nandeck_dominion_unity_21.jpg",
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
        "ART", 
        "UNIQUE"
    )
    VALUES (
        "U0023", 
        "Moon Bird", 
        "Unity",
        "BIRD,TWILIGHT,NATURE",
        "AIR",
        2,
        2,
        0,
        "<b>FLY</b><br>(Can SPAWN anywhere in the board. Can only be targeted to BATTLE by RANGED cards or any UNIT if this card performed a BATTLE ACTION the last turn) <br><br><b>BATTLE:</b><br>Apply FEAR (2 Ticks) to the BATTLE target<br>(Cards with FEAR will MOVE to a random direction in their TICK phase and cannot be moved after it)",
        "nandeck_dominion_unity_22.jpg",
        0
    );
    INSERT OR REPLACE INTO "Cards" (
    "ID", 
    "NAME", 
    "TYPE", 
    "TAGS",
    "DESCRIPTION", 
    "ART",
    "CHARGE", 
    "UNIQUE"
  )
  VALUES (
      "D0001", 
      "Corrupt Palace", 
      "Domain",
      " ",
      "<b>SPAWN</b><br>Select an ELEMENT<br><br><b>IF a HUMAN or the SELECTED ELEMENT SPAWN on LANE:</b><br> Apply -1/-1 to the UNIT and get +1 Charge<br>(This effect can be used multiple times as long this DOMAIN have charge space and the selected card have a status greater than 1/1)<br><br><b>-2 Charge</b><br>Apply +1/+1 to the OCCUPYING UNIT",
      "nandeck_dominion_domain_1.jpg",
      8,
      1
  );INSERT OR REPLACE INTO "Cards" (
    "ID", 
    "NAME", 
    "TYPE", 
    "TAGS",
    "DESCRIPTION", 
    "ART",
    "CHARGE", 
    "UNIQUE"
  )
  VALUES (
      "D0002", 
      "Thassalos Battlefield", 
      "Domain",
      " ",
      "<b>WHENEVER an UNIT is destroyed in this LANE</b><br>+1 Charge<br><br><b>ACTION</b><br><b>-3 Charge</b><br>Apply one of the following:<br><br>\149\ SPAWN a HUMAN card from your DZ on top of this card<br>\149\ Select any card on this LANE and destroy it",
      "nandeck_dominion_domain_2.jpg",
      6,
      1
  );INSERT OR REPLACE INTO "Cards" (
    "ID", 
    "NAME", 
    "TYPE", 
    "TAGS",
    "DESCRIPTION", 
    "ART",
    "CHARGE", 
    "UNIQUE"
  )
  VALUES (
      "D0003", 
      "Exodus Ruins", 
      "Domain",
      " ",
      "<b>WHENEVER an ARTIFACT activate in this LANE</b><br>+1 Charge<br><br><b>ACTION</b><br><b>-1 Charge</b><br>Select any UNIT and swap it ATK and HP values for your next TICK<br><br><b>-9 Charge</b><br>Destroy this card and SPAWN ""Sealed Exodus Guardian"" from anywhere as an 9/9 UNITY",
      "nandeck_dominion_domain_3.jpg",
      9,
      1
  );INSERT OR REPLACE INTO "Cards" (
    "ID", 
    "NAME", 
    "TYPE", 
    "TAGS",
    "DESCRIPTION", 
    "ART",
    "CHARGE", 
    "UNIQUE"
  )
  VALUES (
      "D0004", 
      "Mistycal Twilight Forest", 
      "Domain",
      " ",
      "You can SPAWN any UNIT face-down in this LANE<br><br><b>WHENEVER a face-down UNIT is revealed:</b><br>+1 Charge<br><br><b>ACTION</b><br><b>-1 Charge</b><br>Reveal any TWILIGHT or ELF card from hand and SWAP places with another card in this LANE",
      "nandeck_dominion_domain_4.jpg",
      3,
      1
  );INSERT OR REPLACE INTO "Cards" (
    "ID", 
    "NAME", 
    "TYPE", 
    "TAGS",
    "DESCRIPTION", 
    "ART",
    "CHARGE", 
    "UNIQUE"
  )
  VALUES (
      "D0005", 
      "Lost Woods", 
      "Domain",
      " ",
      "<b>WHENEVER a card on this LANE MOVE</b><br>+1 Charge<br><br><b>ACTION</b><br><b>-X Charge</b><br> Select an UNIT and STUN it for X Ticks",
      "nandeck_dominion_domain_5.jpg",
      2,
      1
  );INSERT OR REPLACE INTO "Cards" (
    "ID", 
    "NAME", 
    "TYPE", 
    "TAGS",
    "DESCRIPTION", 
    "ART",
    "CHARGE", 
    "UNIQUE"
  )
  VALUES (
      "D0006", 
      "Elf Village", 
      "Domain",
      " ",
      "<b>ACTION</b><br><b>+1 Charge</b><br>Reveal an ELF card at your hand or destroy one ELF card in your deck<br><br><b>ACTION</b><br>-2 Charge<br>Add an ELF card from anywhere to your hand",
      "nandeck_dominion_domain_6.jpg",
      4,
      1
  );
COMMIT;