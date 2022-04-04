const MenuListData = (header, cards, actions, isShuffled = false) => {
  let obj = {
    header: header,
    cards: cards,
    actions: actions,
    isShuffled: isShuffled,
  };

  return obj;
};

export default MenuListData;
