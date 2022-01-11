import BoardActions from "Client/actions/board";
import DestroyActions from "Client/actions/destroy";
import HandActions from "Client/actions/hand";
import DeckActions from "Client/actions/deck";
import MenuActions from "./actions/menu";

const moves = ({
  G,
  myID,
  setSelectToBoard,
  setActionMenu,
  setListMenu,
  setLifeMenu,
}) => {
  const spawnFaceUp = (...args) => {
    setSelectToBoard(HandActions.spawnFaceUp(...args));
  };

  const spawnFaceDown = (...args) => {
    setSelectToBoard(HandActions.spawnFaceDown(...args));
  };

  const reborn = (...args) => {
    setSelectToBoard(DestroyActions.reborn(...args));
  };

  const getDeckForSearch = () => {
    setListMenu(DeckActions.getDeckForSearch(G.deck[myID].cards));
  };

  const myLifeMenu = () => {
    setLifeMenu(MenuActions.getLifeMenu(G.life[myID]));
  };

  const getTileCardsList = (...args) => {
    setListMenu(BoardActions.getTileCardsList(...args));
  };

  const moveInBoard = (...args) => {
    setSelectToBoard(BoardActions.moveInBoard(G.board, ...args));
  };

  const actionsMenu = (menu) => {
    setActionMenu(menu);
  };

  return {
    spawnFaceUp,
    spawnFaceDown,
    reborn,
    getDeckForSearch,
    myLifeMenu,
    actionsMenu,
    getTileCardsList,
    moveInBoard,
  };
};

export default moves;
