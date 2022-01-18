import Consts from "../../utils/consts";
import { moveToArray } from "../../utils/help";
import { pushToReveal } from "../../utils/menu";
import MenuRevealData from "../../models/menu-reveal";

const setDeck = (G, ctx, deck) => {
  G.deck[ctx.playerID] = deck;
};

const draw = (G, ctx) => {
  if (G.deck[ctx.playerID].cards.length > 0) {
    let draw = G.deck[ctx.playerID].cards.pop();
    G.hand[ctx.playerID].push(draw);
  }
};

const drawForTurn = (G, ctx) => {
  while (G.hand[ctx.playerID].length < Consts.handSize) {
    draw(G, ctx);
  }
};

const searchToHand = (G, ctx, index) => {
  let content = G.deck[ctx.playerID].cards[index];
  let topText = `Your opponent have selected ${content.title} from Deck to Hand`;
  G.reveal = pushToReveal(
    G.reveal,
    MenuRevealData(topText, content),
    parseInt(ctx.playerID)
  );
  moveToArray(G.deck[ctx.playerID].cards, G.hand[ctx.playerID], index);
};

const searchToDZ = (G, ctx, index) => {
  moveToArray(G.deck[ctx.playerID].cards, G.destroyZone[ctx.playerID], index);
};

const searchToOOG = (G, ctx, index) => {
  moveToArray(G.deck[ctx.playerID].cards, G.out, index);
};

const shuffleDeck = (G, ctx) => {
  G.deck[ctx.playerID].cards = ctx.random.Shuffle(G.deck[ctx.playerID].cards);
};

const mill = (G, ctx, number) => {
  let count = number || 1;
  for (let i = 0; i < count; i++) {
    let draw = G.deck[ctx.playerID].cards.pop();
    G.destroyZone[ctx.playerID].push(draw);
  }
};

export const DeckActions = {
  setDeck,
  draw,
  drawForTurn,
  searchToHand,
  searchToDZ,
  searchToOOG,
  shuffleDeck,
  mill,
};

export default DeckActions;
