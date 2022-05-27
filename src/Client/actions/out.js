import Action from "models/action";
import MenuListData from "models/menu/menu-list";
import Strings from "utils/strings";

const getOOGForSearch = (out) => {
  let actions = [Action("Recycle", "recycle")];
  return MenuListData(Strings.oogHeader, out, actions);
};

const OutActions = {
  getOOGForSearch,
};

export default OutActions;
