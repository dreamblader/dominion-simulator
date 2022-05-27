export const ClassNames = {
  DISABLED: "disabled",
  NO_COVER: "no-cover",
  SELECTED: "selected",
  INVERTED: "inverted",
  ATK: "attacker",
  DEF: "defender",
};

export const getExtraClasses = (condition, className) => {
  if (Array.isArray(condition) && Array.isArray(className)) {
    let extraClassName = "";
    condition.forEach((cond, index) => {
      if (cond) {
        extraClassName += className[index];
      }
      extraClassName += condition[index + 1] ? " " : "";
    });
    return extraClassName;
  } else {
    return condition ? className : "";
  }
};
