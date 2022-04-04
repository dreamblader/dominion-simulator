import Consts from "../../utils/consts";
import { moveToArray } from "../../utils/help";
import { pushToReveal } from "../../utils/menu";
import MenuRevealData from "../../models/menu/menu-reveal";
import { INVALID_MOVE } from "boardgame.io/core";

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
  while (
    G.hand[ctx.playerID].length < Consts.handSize &&
    G.deck[ctx.playerID].cards.length > 0
  ) {
    draw(G, ctx);
  }
};

const searchToHand = (G, ctx, card) => {
  let myDeck = G.deck[ctx.playerID];
  let myHand = G.hand[ctx.playerID];
  let index = searchCard(myDeck, card);
  console.log(index);
  if (index !== -1) {
    let content = G.deck[ctx.playerID].cards[index];
    let topText = `Your opponent have selected ${content.title} from Deck to Hand`;
    G.reveal = pushToReveal(
      G.reveal,
      MenuRevealData(topText, content),
      parseInt(ctx.playerID)
    );
    moveToArray(myDeck.cards, myHand, index);
  } else {
    return INVALID_MOVE;
  }
};

const searchToDZ = (G, ctx, card) => {
  let myDeck = G.deck[ctx.playerID];
  let myDZ = G.destroyZone[ctx.playerID];
  let index = searchCard(myDeck, card);
  if (index !== -1) {
    moveToArray(myDeck.cards, myDZ, index);
  } else {
    return INVALID_MOVE;
  }
};

const searchToOOG = (G, ctx, card) => {
  let myDeck = G.deck[ctx.playerID];
  let index = searchCard(myDeck, card);
  if (index !== -1) {
    moveToArray(myDeck.cards, G.out, index);
  } else {
    return INVALID_MOVE;
  }
};

const searchCard = (deck, target) => {
  return deck.cards.findIndex((card) => card.id === target.id);
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
