import { pushToReveal } from "../utils/menu";
import ImageData from "../models/image-data";
import MenuRevealData from "../models/menu-reveal";

export const clearReveal = (G, ctx) => {
  G.reveal[ctx.playerID] = null;
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
