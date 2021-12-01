const MenuData = (posX, posY, actions, spawnDown = false) => {
  let obj = {
    posX: posX,
    posY: posY,
    actions: actions,
    spawnDown: spawnDown,
  };

  return obj;
};

export default MenuData;
