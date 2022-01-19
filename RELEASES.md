# Releases Plan

## 0.1v Closed Alpha
  - [x] All Deck Base Mechanics working
  - [x] All DZ Base Mechanics working
  - [x] All OOG Base Mechanics working
  - [x] All Hand Base Mechanics working
  - [x] All Board Very Basic Mechanics working
  - [x] All Basic Menus implemented
    - [x] Action Menu
    - [x] List Menu
    - [x] Reveal Menu
    - [x] Life Menu
    - [x] Card Attr Menu
  - [x] Main Layout Finished
    - [x] Deck Column
    - [x] Hands + Board Column
    - [x] Control Panel
    - [x] Card Info
  - [x] Card Storage SQLite
  - [x] Storage Reader
  - [ ] Link 1 SQL Deck
  - [ ] DEPLOY

## 0.5v Closed Beta
  - [ ] + Board Base Mechanics working
    - [ ] Add Ticks Mechanics
    - [ ] Add Attaching Mechanics
  - [ ] + Control Panel
      - [ ] CHANGE STAGE
      - [ ] TOKEN CREATOR
      - [ ] DIE ROLLERS | COIN TOSSERS
  - [ ] Link 1 extra Deck for P2
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
- [x] Draw For Turn when 1+ cards are on board freezes the game (actually was an infinite loop not treated)
