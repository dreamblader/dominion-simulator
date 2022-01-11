import ServerActions from "Server/actions/out";
import Action from "models/action";
import MenuListData from "models/menu-list";
import Strings from "utils/strings";

const getOOGForSearch = (out) => {
  let actions = [Action("Recycle", ServerActions.recycle.name)];
  return MenuListData(Strings.oogHeader, out, actions);
};

const OutActions = {
  getOOGForSearch,
};

export default OutActions;
