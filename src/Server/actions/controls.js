import { pushToReveal } from "../../utils/menu";
import ImageData from "../../models/image-data";
import MenuRevealData from "../../models/menu-reveal";

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

const MiscActions = {
  clearReveal,
  setLife,
  callReact,
};

export default MiscActions;
