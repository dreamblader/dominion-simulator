import Place from "./place";

const Combat = (atk = Place(-1, -1), def = Place(-1, -1)) => {
  let obj = {
    atk: atk,
    def: def,
  };

  return obj;
};

export default Combat;
