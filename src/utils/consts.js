//Game Constants
const board = [
  [-1, -1, -1, 0, -1, -1, -1],
  [-1, -1, 0, 0, 0, -1, -1],
  [-1, 1, 0, 0, 0, 2, -1],
  [3, 1, 0, 0, 0, 2, 4],
  [-1, 1, 0, 0, 0, 2, -1],
  [-1, -1, 0, 0, 0, -1, -1],
  [-1, -1, -1, 0, -1, -1, -1],
];

const VersionName = "Closed Alpha";

const Phases = ["Draw", "Tick", "Move", "Combat", "Spawn"];

const Consts = {
  deckSize: 30,
  handSize: 4,
  board: board,
  maxLife: 20,
  phases: Phases,
  versionName: VersionName,
};

export default Consts;
