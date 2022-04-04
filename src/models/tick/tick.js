import Burn from "./burn";

export const setDuration = (tick, duration) => {
  tick.duration = duration;
};

export const Conditions = {
  BURN: Burn,
};

const Ticks = {
  CONDITION: Conditions,
};

export default Ticks;
