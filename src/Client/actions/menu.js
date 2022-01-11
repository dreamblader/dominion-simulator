import MenuLifeData from "../../models/menu-life";
import DeckActions from "Server/actions/deck";
import Strings from "../../utils/strings";

const { getDeckActionsOnMenu } = DeckActions;

const MenuActions = ({
  G,
  myID,
  moves,
  actionMenu,
  lifeMenu,
  listMenu,
  setSelectToBoard,
  setActionMenu,
  setListMenu,
}) => {
  const getLifeMenu = (life) => {
    return MenuLifeData(life);
  };
  /**
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

  const setMenu = (menu) => {
    setActionMenu(menu);
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
  **/
};

export default MenuActions;
