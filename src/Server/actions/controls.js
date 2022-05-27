import { pushToReveal } from "../../utils/menu";
import ImageData from "../../models/image-data";
import MenuRevealData from "../../models/menu/menu-reveal";

const clearReveal = (G, ctx) => {
  G.reveal[ctx.playerID].shift();
};

const setLife = (G, ctx, lp) => {
  G.life[ctx.playerID] = lp;
};

const callReact = (G, ctx, image) => {
  let content = ImageData(image, "REACT!");
  let topText = "Your opponent wants to";
  G.reveal = pushToReveal(
    G.reveal,
    MenuRevealData(topText, content),
    parseInt(ctx.playerID)
  );
};

const flipCoin = (G, ctx, player) => {
  let face = ctx.random.Die(2) === 1 ? "Heads" : "Tails";
  let topText = `Player ${player} flipped a coin and it landed on ${face}`;
  G.reveal = pushToReveal(G.reveal, MenuRevealData(topText, ""), -1);
};

const rollD6 = (G, ctx, player) => {
  let topText = `Player ${player} rolled a ${ctx.random.D6()} of a D6`;
  G.reveal = pushToReveal(G.reveal, MenuRevealData(topText, ""), -1);
};

const rollD8 = (G, ctx, player) => {
  let topText = `Player ${player} rolled a ${ctx.random.D8()} of a D8`;
  G.reveal = pushToReveal(G.reveal, MenuRevealData(topText, ""), -1);
};

const MiscActions = {
  clearReveal,
  setLife,
  callReact,
  flipCoin,
  rollD6,
  rollD8,
};

export default MiscActions;
