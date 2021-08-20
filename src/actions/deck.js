import Consts from "../utils/consts";

export const draw = (G, ctx) => {
  let draw = G.deck[ctx.currentPlayer].pop();
  G.hand[ctx.currentPlayer].push(draw);
};

export const drawForTurn = (G, ctx) => {
  while (G.hand[ctx.currentPlayer].length < Consts.handSize) {
    draw(G, ctx);
  }
};

export const shuffleDeck = (G, ctx) => {
  G.deck[ctx.currentPlayer] = ctx.random.Shuffle(G.deck[ctx.currentPlayer]);
};
