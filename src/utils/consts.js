//Game Constants
const board = [
	[2, 1, 0, 0, -1, 0, 0, 1, 2],
	[2, 1, 0, 0, -1, 0, 0, 1, 2],
	[2, 1, 0, 0, -1, 0, 0, 1, 2],
];

const VersionName = "Closed Beta";

const Phases = ["Draw", "Tick", "Move", "Battle", "Spawn"];

const AnimationTimes = {
	jokenpoShow: 1500,
	jokenpoResultShow: 1000,
};

const Consts = {
	deckSize: 30,
	handSize: 5,
	board: board,
	maxLife: 20,
	phases: Phases,
	animationTimes: AnimationTimes,
	versionName: VersionName,
};

export default Consts;

//TODO
/*
. Update your dependency

Almost all dependencies with this problem have a newer version available that you can install instead. Find out which version of your dependency corresponds to after Node 18 became the LTS version of Node, band uplift your dependency to that version.
This is, really, the only proper solution: update your dependencies, because just like Node.js itself, they can leave your project vulnerable to attacks and exploits.
*/
