# DATA FOLDER
This folder contains the SQLite Database along with the csv + sql inserts.

# GAME.DB
Main Database separated into:

## Deck Table
The Deck name, ID an the user who created it (userId = 0 means that is from the game default decks)

## Cards Table
The main Cards Table where all the main information of all card types is set

- Card Id
- Card Name
- Card Type
  - Unity
  - Artifact
  - Field
- Card Tags
- Card Elements (Unity Only)
  - EARTH
  - WATER
  - AIR
  - FIRE
  - THUNDER
  - ICE
  - VOID
- Card ATK Value
  - Default 0
- Card HP Value
  - Default 1
- Card Range
  - Default 0
- Card Description
- Card Direction Range
  - 8 bit binary based on 1 = have range and 0 = do not have range. The reading of binary goes from the direction NORTH (N) and move clockwise until it reaches NORTH-WEST (NW)
- Card Art Path
- Card is UNIQUE (STAR)

## Card Deck Junction Table
Table that reference cards from it ID to decks from it ID and specifies the quantity of them.

## User Table
WIP

# SQLs
Here will have all the important sqls to run in your sqlite to create your tables.

Use the Setup.sql first to create everything and then the latest Card_Update and Deck_Update from the folder

# CSV
Import all Nandeck CSVs (Unity, Artifact and Field) here so you can run the Python converter (card-convert.py) that wil transform all the specifics CSV to a main generic SQL file named: Card_Update_YYYY_MM_DAY



