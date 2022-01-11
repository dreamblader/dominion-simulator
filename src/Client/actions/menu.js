import MenuLifeData from "models/menu-life";
import DeckActions from "Client/actions/deck";
import HandActions from "Client/actions/hand";
import BoardActions from "Client/actions/board";
import DestroyActions from "Client/actions/destroy";
import OutActions from "Client/actions/out";
import Strings from "utils/strings";

const { getDeckActionsOnMenu } = DeckActions;
const { getDZForSearch } = DestroyActions;
const { getOOGForSearch } = OutActions;
const { getHandActionsOnMenu } = HandActions;
const { getBoardActionMenu } = BoardActions;

const MenuActions = ({
  G,
  myID,
  moves,
  actionMenu,
  setActionMenu,
  lifeMenu,
  setLifeMenu,
  listMenu,
  setListMenu,
  setSelectToBoard,
}) => {
  const getLifeMenu = (life) => {
    return MenuLifeData(life);
  };

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

  const clearListMenu = () => {
    let wasDeckMenu = listMenu.header === Strings.deckHeader;
    setListMenu(null);
    if (wasDeckMenu) {
      setTimeout(moves.shuffleDeck, 100);
    }
  };

  const clearMenuCallback = () => {
    if (actionMenu) {
      setActionMenu(null);
    } else if (listMenu) {
      clearListMenu();
    } else if (lifeMenu) {
      setLifeMenu(null);
    } else if (G.reveal[myID]) {
      moves.clearReveal();
    }
  };

  return {
    getLifeMenu,
    deckMenu,
    dzMenu,
    oogMenu,
    handMenu,
    boardMenu,
    clearListMenu,
    clearMenuCallback,
  };
};

export default MenuActions;
