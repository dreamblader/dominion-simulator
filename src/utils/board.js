export const getTileCardsArray = (board, place) => {
  return board[place.y][place.x].cards;
};

export const getTileCard = (board, place, index) => {
  return board[place.y][place.x].cards[index];
};
