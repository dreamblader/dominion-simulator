# Releases Plan

## 0.5v Closed Beta
  - [x] All Deck Base Mechanics working
  - [x] All DZ Base Mechanics working
  - [x] All OOG Base Mechanics working
  - [x] All Hand Base Mechanics working
  - [ ] All Board Base Mechanics working
  - [x] All Basic Menus implemented
    - [x] Action Menu
    - [x] List Menu
    - [x] Reveal Menu
    - [x] Life Menu
    - [x] Card Attr Menu
  - [ ] Main Layout Finished
    - [x] Deck Column
    - [x] Hands + Board Column
    - [ ] Control Panel
      - [x] END TURN
      - [ ] CHANGE STAGE
      - [x] REACT BUTTON
    - [x] Card Info
  - [x] Card Storage SQLite
  - [x] Storage Reader
  - [ ] Link 2 hard coded Decks to P1 x P2
  - [ ] DEPLOY

## Backlog

### Feature
- [ ] Add Game Lobby
- [ ] Add Start Menu
  - [ ] Login
  - [ ] Rules Link
- [ ] Add Deck Building Feature
  - [x] Add Server Database Storage

### QOL
- [x] Arena refactor
- [x] Separate Actions between Client and Server
- [ ] Add Animations and Particles

### Bug
- [x] Move Function is Creating a Ghost Tile at Board Y0 X0
- [x] Undefined in getTileCards when trying to move card to top or back with 2 or more card stacked
- [x] Draw For Turn when 1+ cards are on board freezes the game
