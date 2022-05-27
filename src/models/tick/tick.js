import Burn from "./objects/burn";
import Cooldown from "./objects/cooldown";
import StatusUp from "./objects/stats-up";
import StatusDown from "./objects/stats-down";
import Stun from "./objects/stun";
import Shield from "./objects/shield";

export const stripEvent = (tick) => {
  let { event, ...rest } = tick;
  return rest;
};

export const combineTicks = (oldTick, newTick) => {
  let result = oldTick;
  if (oldTick.name === newTick.name) {
    if (oldTick.duration < 0 || newTick.duration < 0) {
      result.duration = newTick.duration;
    } else {
      result.duration += newTick.duration;
    }
  }
  return result;
};

const Ticks = {
  COOLDOWN: Cooldown,
  STATS_DOWN: StatusDown,
  BURN: Burn,
  STUN: Stun,
  STATS_UP: StatusUp,
  SHIELD: Shield,
};

export default Ticks;
