import Burn from "./burn";
import Cooldown, { event } from "./cooldown";
import StatusUp from "./stats-up";
import StatusDown from "./stats-down";
import Stun from "./stun";
import Shield from "./shield";

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

//TODO make events dettached from ticks
export const TickEvents = {
  COOLDOWN: event,
  STATS_DOWN: StatusDown,
  BURN: Burn,
  STUN: Stun,
  STATS_UP: StatusUp,
  SHIELD: Shield,
};

export default Ticks;
