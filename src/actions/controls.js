import { pushToReveal } from "../utils/menu";
import ImageData from "../models/image-data";
import MenuLifeData from "../models/menu-life";
import MenuRevealData from "../models/menu-reveal";

export const clearReveal = (G, ctx) => {
  G.reveal[ctx.playerID] = null;
};

export const setLife = (G, ctx, lp) => {
  G.life[ctx.playerID] = lp;
};

export const callReact = (G, ctx, image) => {
  let content = ImageData(image, "REACT!");
  let topText = "Your opponent wants to";
  G.reveal = pushToReveal(
    G.reveal,
    MenuRevealData(topText, content),
    parseInt(ctx.playerID)
  );
};

//CLIENT

export const getLifeMenu = (life) => {
  return MenuLifeData(life);
};
