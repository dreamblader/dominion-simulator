import MenuLifeData from "models/menu/menu-life";
import DeckActions from "Client/actions/deck";
import HandActions from "Client/actions/hand";
import BoardActions from "Client/actions/board";
import DestroyActions from "Client/actions/destroy";
import OutActions from "Client/actions/out";
import Strings from "utils/strings";
import ControlActions from "Client/actions/control";

const { getDeckActionsOnMenu } = DeckActions;
const { getDZForSearch } = DestroyActions;
const { getOOGForSearch } = OutActions;
const { getHandActionsOnMenu } = HandActions;
const { getBoardActionMenu } = BoardActions;

const ArenaActions = ({
  G,
  moves,
  myID,
  actionMenu,
  setActionMenu,
  lifeMenu,
  setLifeMenu,
  listMenu,
  setListMenu,
  statsMenu,
  setStatsMenu,
  setSelectToBoard,
}) => {
  const getLifeMenu = (life) => {
    return MenuLifeData(life);
  };

  //GLOBALS

  const deckMenu = (e) => {
    setSelectToBoard(null);
    setActionMenu(getDeckActionsOnMenu(e));
  };

  const dzMenu = (id, mine) => {
    setListMenu(getDZForSearch(G, id, mine));
  };

  const oogMenu = () => {
    setListMenu(getOOGForSearch(G.out));
  };

  const handMenu = (e, i) => {
    setSelectToBoard(null);
    setActionMenu(getHandActionsOnMenu(e, i, G.hand, myID));
  };

  const boardMenu = (e, tile, id) => {
    setActionMenu(getBoardActionMenu(e, tile, id));
  };

  const clearMenuCallback = () => {
    if (actionMenu) {
      setActionMenu(null);
    } else if (listMenu) {
      setListMenu(null);
    } else if (lifeMenu) {
      setLifeMenu(null);
    } else if (statsMenu) {
      setStatsMenu(null);
    } else if (G.reveal[myID]) {
      moves.clearReveal();
    }
  };

  //MOVES

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
    console.dir(G);
    moves.shuffleDeck();
    setListMenu(DeckActions.getDeckForSearch(G.deck[myID].cards));
  };

  const myLifeMenu = () => {
    setLifeMenu(getLifeMenu(G.life[myID]));
  };

  const getTileCardsList = (...args) => {
    setListMenu(BoardActions.getTileCardsList(...args));
  };

  const moveInBoard = (...args) => {
    setSelectToBoard(BoardActions.moveInBoard(G.board, ...args));
  };

  const selectToAttack = (...args) => {
    setSelectToBoard(BoardActions.selectToAttack(G.board, ...args));
  };

  const actionsMenu = (menu) => {
    setActionMenu(menu);
  };

  const openStatsMenu = (...args) => {
    setStatsMenu(BoardActions.openStatsMenu(G.board, ...args));
  };

  const createToken = (...args) => {
    setSelectToBoard(ControlActions.createToken(...args));
  };

  return {
    global: {
      getLifeMenu,
      deckMenu,
      dzMenu,
      oogMenu,
      handMenu,
      boardMenu,
      clearListMenu,
      clearMenuCallback,
    },

    moves: {
      spawnFaceUp,
      spawnFaceDown,
      reborn,
      getDeckForSearch,
      myLifeMenu,
      actionsMenu,
      getTileCardsList,
      moveInBoard,
      selectToAttack,
      openStatsMenu,
      createToken,
    },
  };
};

export default ArenaActions;
