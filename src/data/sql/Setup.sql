--DECK TABLE
CREATE TABLE IF NOT EXISTS "Decks"(
  "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
  "NAME" TEXT,
  "USER_ID" INTEGER
);

--CARD TYPE TABLE
CREATE TABLE IF NOT EXISTS "Cards"(
  "ID" TEXT PRIMARY KEY,
  "NAME" TEXT NOT NULL,
  "TYPE" TEXT NOT NULL,
  "TAGS" TEXT NOT NULL,
  "ELEMENT" TEXT,
  "ATK" INTEGER DEFAULT 0,
  "HP" INTEGER DEFAULT 1,
  "RANGE" INTEGER DEFAULT 0,
  "DESCRIPTION" TEXT NOT NULL,
  "DIRECTION_RANGE" INTEGER DEFAULT 0,
  "ART" TEXT NOT NULL,
  "UNIQUE" INTEGER DEFAULT 0
);

--DECK + CARD RELATION TABLE
CREATE TABLE IF NOT EXISTS "DeckCardRelation"(
    "DECK_ID" INTEGER NOT NULL,
    "CARD_ID" INTEGER NOT NULL,
    "CARD_QUANTITY" INTEGER DEFAULT 1,
    PRIMARY KEY ("DECK_ID", "CARD_ID"),
    FOREIGN KEY ("DECK_ID") REFERENCES "Decks"("ID"),
    FOREIGN KEY ("CARD_ID") REFERENCES "Cards"("ID") ON DELETE CASCADE
);
